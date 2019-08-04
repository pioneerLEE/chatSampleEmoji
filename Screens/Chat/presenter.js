
import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  Animated,
  Keyboard
} from 'react-native';
import { ifIphoneX,getBottomSpace } from 'react-native-iphone-x-helper';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Message from './message';
const { width } = Dimensions.get('screen');
const height = Dimensions.get('screen').height/667*600;

import PropTypes from 'prop-types';
import { TextInput } from 'react-native-gesture-handler';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mainContainer: {
    flex: 1,
    alignItems: 'center'
  }
  
});

class ChatPresenter extends React.Component {
  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired,
    }).isRequired,
    chats: PropTypes.array.isRequired,
    USER: PropTypes.object.isRequired,
  };
  constructor(props) {
    super(props);
    this.state = {
      initialPosition: new Animated.Value(0),
      KeyboardHeight:0
    }
  }
  componentDidMount () {
    this.keyboardShowListener = Keyboard.addListener('keyboardDidShow', this._keyboardShow);
    this.keyboardHideListener = Keyboard.addListener('keyboardDidHide', this._keyboardHide);
  }

  componentWillUnmount() {
    this.keyboardShowListener.remove();
    this.keyboardHideListener.remove();
  }

  _keyboardHide = (e) => {
    Animated.timing(
      this.state.initialPosition,
      {
        toValue: 0
      }
    ).start();
  }

  _keyboardShow = (e) => {
    console.log('키보드 사이즈?'+e.endCoordinates.height);
    Animated.timing(
      this.state.initialPosition,
      {
        toValue: e.endCoordinates.height
      }
      
    ).start();
  }
  render() {
    const { navigation,chats,USER } = this.props;
    return (
      <View style={styles.container}>
        <Animated.View style={{bottom: this.state.initialPosition}}>
          <View style={{height:height/10*9,backgroundColor:'rgb(102,137,186)',justifyContent:'flex-end',alignItems:'flex-end'}}>
            <ScrollView 
              ref={ref => this.scrollView = ref}
              onContentSizeChange={(contentWidth, contentHeight)=>{        
                  this.scrollView.scrollToEnd({animated: true});
              }}
              style={{width:'100%',backgroundColor:'rgb(102,137,186)',height}}
            >
              <Message chats={chats} USER={USER}/>
              <View style={{marginBottom:10}}/>
            </ScrollView>
          </View>
          <View style={{height:height/10,justifyContent:'flex-end',flexDirection:'row',alignItems:'center'}}>
            <SimpleLineIcons name='picture' size={25} color='rgb(141,147,163)' style={{marginTop:2, marginRight:15}} />
            <View style={{width:'80%',height:'60%',backgroundColor:'rgb(246,246,246)',borderRadius: 20, alignItems:'center',paddingLeft:20,marginRight:10,flexDirection:'row',justifyContent:'space-between'}}>
              <TextInput
                autoCompleteType={false}
                autoCorrect={false}
                style={styles.input}
                placeholder="Message..."
                returnKeyType="send"
              />
              <TouchableOpacity style={{width:30,height:30,borderRadius:15,marginRight:10}}>
                <SimpleLineIcons name='emotsmile' size={25} color='rgb(141,147,163)' style={{marginTop:2}} />
              </TouchableOpacity>
            </View>
          </View>
        </Animated.View>
      </View>
    )
    /*
    return (

      <KeyboardAvoidingView
        style={styles.container}
      >
        <View style={{height:'90%',backgroundColor:'rgb(102,137,186)'}}/>
        <View style={{height:'10%'}}>
          <View style={{width:'90%',height:'90%',backgroundColor:'rgb(246,246,246)'}}>
          <TextInput
            placeholder="Email"
            autoCompleteType={false}
            autoCorrect={false}
            style={styles.input}
            placeholder="Message..."
            returnKeyType="send"
            />
          </View>
        </View>
        

      </KeyboardAvoidingView>
  );*/
  }
}

export default ChatPresenter;