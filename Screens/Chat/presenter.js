
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
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
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
    exRoom: PropTypes.object.isRequired,
    message: PropTypes.string.isRequired,
    changeMessage: PropTypes.func.isRequired,
    sendMessage: PropTypes.func.isRequired,
  };
  constructor(props) {
    super(props);
    this.state = {
      initialPosition: new Animated.Value(0),
      messageBoxPosition:0,
      keyboardHeight:0,
      isShowEmoticonSection:false,
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
    this.setState({
      messageBoxPosition:0
    });
    Animated.timing(
      this.state.initialPosition,
      {
        toValue: 0
      }
    ).start();
  }

  _keyboardShow = (e) => {
    this.setState({
      messageBoxPosition:e.endCoordinates.height,
      keyboardHeight:e.endCoordinates.height
    });
    Animated.timing(
      this.state.initialPosition,
      {
        toValue: e.endCoordinates.height
      }
      
    ).start();
  }
  _showEmoticonSection=()=>{
    
  }
  render() {
    const { navigation,chats,USER,message,changeMessage,sendMessage,exRoom } = this.props;
    const { messageBoxPosition,isShowEmoticonSection } = this.state; 
    return (
      <View style={styles.container}>
        <Animated.View style={{bottom: this.state.initialPosition}}>
          <View style={{height:messageBoxPosition,backgroundColor:'rgb(102,137,186)'}}/>
          <View style={{height:height/10*9+10-messageBoxPosition,backgroundColor:'rgb(102,137,186)',justifyContent:'flex-end',alignItems:'flex-end'}}>
            <ScrollView 
              ref={ref => this.scrollView = ref}
              onContentSizeChange={(contentWidth, contentHeight)=>{        
                  this.scrollView.scrollToEnd({animated: true});
              }}
              style={{width:'100%',backgroundColor:'rgb(102,137,186)'}}
            >
              <Message chats={chats} USER={USER} exRoom={exRoom}/>
              <View style={{marginBottom:10}}/>
            </ScrollView>
          </View>
          <View style={{height:height/10-10,justifyContent:'flex-end',flexDirection:'row',alignItems:'center'}}>
            <TouchableOpacity>
              <SimpleLineIcons name='picture' size={22} color='rgb(141,147,163)' style={{marginTop:2, marginRight:15}} />
            </TouchableOpacity>
            <View style={{width:'75%',height:'70%',backgroundColor:'rgb(246,246,246)',borderRadius: 20, alignItems:'center',paddingLeft:20,marginRight:10,flexDirection:'row',justifyContent:'space-between'}}>
                  <TextInput
                    autoFocus={true}
                    value={message}
                    onChangeText={changeMessage}
                    autoCompleteType={false}
                    autoCorrect={false}
                    placeholder="Message..."
                    multiline={true}
                    style={{fontSize: 15,width:'80%',marginBottom:2}}
                  />
              <TouchableOpacity style={{width:30,height:30,borderRadius:15,marginRight:10}} onPressOut={Keyboard.dismiss}>
                <SimpleLineIcons name='emotsmile' size={25} color='rgb(141,147,163)' style={{marginTop:2}} />
              </TouchableOpacity>
            </View>
            <TouchableOpacity style={{width:30,height:30,borderRadius:15,marginRight:10}} onPressOut={()=>{sendMessage()}}>
              <MaterialCommunityIcons name='send-circle' size={30} color='rgb(83,181,53)' style={{marginTop:2}} />
            </TouchableOpacity>
          </View>
        </Animated.View>
        
      </View>
    )
  }
}

export default ChatPresenter;