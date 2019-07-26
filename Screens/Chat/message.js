import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableHighlight,
} from 'react-native';
import PropTypes from 'prop-types';
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
  },
});
MessageBubble=(props)=>{
    return (
        props._isUser ?
        (
            <View style={{flexDirection:'row', alignItems:'flex-end'}}>
                <View style={{marginRight:8}}>
                    <Text style={{marginBottom:1,fontSize:9, color:'white'}}>{props.chat.time}</Text>
                </View>
                <View style={{maxWidth: 250,width:props.chat.data.length*12, padding: 8, borderRadius: 20,marginTop:10, backgroundColor:'rgb(123,222,64)'}}>
                    <Text>
                        {props.chat.data}
                    </Text>
                </View>
            </View>
        ):(
            <View style={{flexDirection:'row', alignItems:'flex-end'}}>
                <View style={{maxWidth: 250,width:props.chat.data.length*12, padding: 8, borderRadius: 8,marginTop:10, backgroundColor:'white'}}>
                    <Text>
                        {props.chat.data}
                    </Text>
                </View>
                <View style={{marginLeft:8}}>
                    <Text style={{marginBottom:1,fontSize:9, color:'white'}}>{props.chat.time}</Text>
                </View>
            </View>
        ) 
    )
}

class Message extends React.Component {
    
  state ={
    chats: [
        {
          key:1,
          user:{
              _id:2,
              nick:'이재원',
          },
          time:'오후 2:12',
          data:'아 시발 존나 많네아 시발 존나 많네아 시발 존나 많네아 시발 존나 많네아 시발 존나 많네',
          category:'text'
        },
        {
            key:2,
            user:{
                _id:1,
                nick:'이재원',
            },
            time:'오후 2:12',
            data:'나 많네아 시발 존나',
            category:'text'
          },
          {
            key:3,
            user:{
                _id:1,
                nick:'이재원',
            },
            time:'오후 2:12',
            data:'하하하ㅏ.....',
            category:'text'
          },
          {
            key:4,
            user:{
                _id:1,
                nick:'이재원',
            },
            time:'오후 2:12',
            data:'하하하ㅏ.....',
            category:'text'
          },
          {
            key:5,
            user:{
                _id:1,
                nick:'이재원',
            },
            time:'오후 2:12',
            data:'하하하ㅏ.....',
            category:'text'
          },
          {
            key:6,
            user:{
                _id:1,
                nick:'이재원',
            },
            time:'오후 2:12',
            data:'하하하ㅏ.....',
            category:'text'
          },
          {
            key:7,
            user:{
                _id:1,
                nick:'이재원',
            },
            time:'오후 2:12',
            data:'하하하ㅏ.....',
            category:'text'
          },
          {
            key:8,
            user:{
                _id:1,
                nick:'이재원',
            },
            time:'오후 2:12',
            data:'하하하ㅏ.....',
            category:'text'
          },
          {
            key:9,
            user:{
                _id:1,
                nick:'이재원',
            },
            time:'오후 2:12',
            data:'하하하ㅏ.....',
            category:'text'
          },
          {
            key:10,
            user:{
                _id:1,
                nick:'이재원',
            },
            time:'오후 2:12',
            data:'하하하ㅏ.....',
            category:'text'
          },
          {
            key:11,
            user:{
                _id:1,
                nick:'이재원',
            },
            time:'오후 2:12',
            data:'하하하ㅏ.....',
            category:'text'
          },
          {
            key:12,
            user:{
                _id:1,
                nick:'이재원',
            },
            time:'오후 2:12',
            data:'하하하ㅏ.....',
            category:'text'
          }, 
    ],
    User:{
        _id:2
    }
  }
  //maxWidth
  
  render() {
    console.log(this.state.chats);
    return (
        <View style={styles.container}>
            {
                this.state.chats.map((chat, i)=>{
                    if(chat.user._id != this.state.User._id && chat.category=='text'){
                        return(
                            <View style={{backgroundColor:'transparent',marginLeft:10}}>
                                <MessageBubble chat={chat} _isUser={false} />
                            </View>
                        )
                        
                    }
                    else if(chat.user._id == this.state.User._id && chat.category=='text'){
                        return(
                            <View style={{backgroundColor:'transparent',marginRight:10,alignItems:'flex-end'}}>
                                <MessageBubble chat={chat} _isUser={true} />
                            </View>
                        )
                        
                    }
                    else if(chat.user._id == this.state.User._id && chat.category=='emoji'){
                        return(
                            <View style={{backgroundColor:'transparent',marginRight:10,alignItems:'flex-end'}}>
                                <MessageBubble chat={chat} _isUser={true} />
                            </View>
                        )
                        
                    }
                })
            }
        </View>
      
    );
  }
}

export default Message;

/*
{
        chats.map((chat,i)=>{
        //다름 사람의 메시지 && 텍스트  
        if(chat.user.id !== User.id){
            
        }
        //다른 사람의 메시지 && 사진
        else if(chat){

        }
        //다른 사람의 메시지 && 이모티콘
        //본인 메시지 && 텍스트
        //본인 메시지 && 사진
        //본인 메시지 && 이모티콘
        })
      }
*/