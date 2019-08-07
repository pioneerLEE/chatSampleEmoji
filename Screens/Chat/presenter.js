
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
const Emoji_API = "http://5e297431.ngrok.io" 

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
    emoticons:PropTypes.object.isRequired
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
    const {isShowEmoticonSection} = this.state;
    if(!isShowEmoticonSection){
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
  _EmoticonSection=async()=>{
    
    await this.setState({
      isShowEmoticonSection:!this.state.isShowEmoticonSection
    })
    if(this.state.isShowEmoticonSection){
      await Animated.timing(
        this.state.initialPosition,
        {
          toValue: this.state.keyboardHeight
        }
        
      ).start();
      await Keyboard.dismiss();
    }
    else{
      await Animated.timing(
        this.state.initialPosition,
        {
          toValue: 0
        }
        
      ).start();
    }
    
  }
  _hideEmoticonSection=()=>{
    this.setState({
      isShowEmoticonSection:false
    })
  }
  render() {
    const { navigation,chats,USER,message,changeMessage,sendMessage,exRoom,emoticons } = this.props;
    const { messageBoxPosition,isShowEmoticonSection,keyboardHeight } = this.state; 
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
                    onFocus={this._hideEmoticonSection}
                    autoFocus={true}
                    value={message}
                    onChangeText={changeMessage}
                    autoCompleteType={false}
                    autoCorrect={false}
                    placeholder="Message..."
                    multiline={true}
                    style={{fontSize: 15,width:'80%',marginBottom:2}}
                  />
              <TouchableOpacity style={{width:30,height:30,borderRadius:15,marginRight:10}} onPressOut={this._EmoticonSection}>
                <SimpleLineIcons name='emotsmile' size={25} color='rgb(141,147,163)' style={{marginTop:2}} />
              </TouchableOpacity>
            </View>
            <TouchableOpacity style={{width:30,height:30,borderRadius:15,marginRight:10}} onPressOut={()=>{sendMessage()}}>
              <MaterialCommunityIcons name='send-circle' size={30} color='rgb(83,181,53)' style={{marginTop:2}} />
            </TouchableOpacity>
          </View>
          <View style={{width:width,height:keyboardHeight}}>
          {
            isShowEmoticonSection?(
              <View style={{width:'100%',height:'100%'}}>
                <ScrollView>
                {
                  emoticons[0].sample1.map((e,key)=>{
                    return(
                      <View style={{width:width,height:width,margin:10}}>
                        <Image style={{width:width,height:width}} source={{uri:`${Emoji_API}/load/${e}/ChatSample1/abcabc`}}/>
                      </View>
                    )
                  })
                }
                </ScrollView>
              </View>
            ):(null)
          }
          </View>
        </Animated.View>
      </View>
    )
  }
}

export default ChatPresenter;