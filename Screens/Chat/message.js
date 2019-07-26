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
        <View style={{maxWidth: 250, padding: 8, borderRadius: 8,marginTop:10, backgroundColor:'rgb(123,222,64)'}}>
            <View style={{backgroundColor:'transparent'}}>
                <Text>
                    {props.chat.data}
                </Text>
            </View>
            <View style={{flexDirection: 'row', justifyContent: 'flex-end', paddingLeft: 8}}>
                <Text style={{fontSize: 8, color: props.isUser ? '#E9EBEF' : '#878d99'}}>{props.chat.time}</Text>
            </View>
        </View>
    )
}

class Message extends React.Component {
    
  state ={
    chats: [
        {
          key:1,
          user:{
              _id:1,
              nick:'이재원',
          },
          time:'오후2시 23분',
          data:'아 시발 존나 많네아 시발 존나 많네아 시발 존나 많네아 시발 존나 많네아 시발 존나 많네',
          category:'text'
        },
        {
            key:2,
            user:{
                _id:1,
                nick:'이재원',
            },
            time:'오후2시 21분',
            data:'하하하ㅏ.....',
            category:'text'
          },
          {
            key:3,
            user:{
                _id:1,
                nick:'이재원',
            },
            time:'오후2시 21분',
            data:'하하하ㅏ.....',
            category:'text'
          },
          {
            key:4,
            user:{
                _id:1,
                nick:'이재원',
            },
            time:'오후2시 21분',
            data:'하하하ㅏ.....',
            category:'text'
          },
          {
            key:5,
            user:{
                _id:1,
                nick:'이재원',
            },
            time:'오후2시 21분',
            data:'하하하ㅏ.....',
            category:'text'
          },
          {
            key:6,
            user:{
                _id:1,
                nick:'이재원',
            },
            time:'오후2시 21분',
            data:'하하하ㅏ.....',
            category:'text'
          },
          {
            key:7,
            user:{
                _id:1,
                nick:'이재원',
            },
            time:'오후2시 21분',
            data:'하하하ㅏ.....',
            category:'text'
          },
          {
            key:8,
            user:{
                _id:1,
                nick:'이재원',
            },
            time:'오후2시 21분',
            data:'하하하ㅏ.....',
            category:'text'
          },
          {
            key:9,
            user:{
                _id:1,
                nick:'이재원',
            },
            time:'오후2시 21분',
            data:'하하하ㅏ.....',
            category:'text'
          },
          {
            key:10,
            user:{
                _id:1,
                nick:'이재원',
            },
            time:'오후2시 21분',
            data:'하하하ㅏ.....',
            category:'text'
          },
          {
            key:11,
            user:{
                _id:1,
                nick:'이재원',
            },
            time:'오후2시 21분',
            data:'하하하ㅏ.....',
            category:'text'
          },
          {
            key:12,
            user:{
                _id:1,
                nick:'이재원',
            },
            time:'오후2시 21분',
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
                    console.log('message console');
                    console.log(chat.user._id,this.state.User._id,chat.category)
                    if(chat.user._id != this.state.User._id && chat.category=='text'){
                        return(
                            <View style={{backgroundColor:'transparent',marginLeft:10}}>
                                <MessageBubble chat={chat} />
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