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

//var current = current.getFullYear() + "년 " + ( current.getMonth() + 1 ) + "월 " + current.getDate() + "일 "+current.getHours() + "시 " + current.getMinutes() + "분"
MessageBubble=(props)=>{
    const current = new Date(props.chat.createAt)
    return (
        props._isUser ?
        (
            <View style={{flexDirection:'row', alignItems:'flex-end'}}>
                <View style={{marginRight:8}}>
                    <Text style={{marginBottom:1,fontSize:9, color:'white'}}>{current.getFullYear() + "년 " + ( current.getMonth() + 1 ) + "월 " + current.getDate() + "일 "+current.getHours() + "시 " + current.getMinutes() + "분"}</Text>
                </View>
                <View style={{maxWidth: 250,minWidth:45, padding: 8, borderRadius: 20,marginTop:10, backgroundColor:'rgb(123,222,64)',justifyContent:'center',alignItems:'center'}}>
                    <Text style={{fontSize:13,margin:5}}>
                        {props.chat.messageData}
                    </Text>
                </View>
            </View>
        ):(
            <View style={{flexDirection:'row', alignItems:'flex-end'}}>
                <View style={{maxWidth: 250,minWidth:45, padding: 8, borderRadius: 8,marginTop:10, backgroundColor:'white'}}>
                    <Text>
                        {props.chat.messageData}
                    </Text>
                </View>
                <View style={{marginLeft:8}}>
                    <Text style={{marginBottom:1,fontSize:9, color:'white'}}>{props.chat.createAt}</Text>
                </View>
            </View>
        ) 
    )
}
class Message extends React.Component {
    
  //maxWidth
  static propTypes ={
    chats: PropTypes.array.isRequired,
    USER: PropTypes.object.isRequired
  }
  
  render() {
    console.log(this.props.chats);
    const { chats,USER } = this.props;
    return (
        <View style={styles.container}>
            {
                chats.map((chat, key)=>{
                    if(chat.creator != USER._id && chat.category=='text'){
                        return(
                            <View style={{backgroundColor:'transparent',marginLeft:10}}>
                                <MessageBubble chat={chat} _isUser={false} />
                            </View>
                        )
                        
                    }
                    else if(chat.creator == USER._id && chat.category=='text'){
                        return(
                            <View style={{backgroundColor:'transparent',marginRight:10,alignItems:'flex-end'}}>
                                <MessageBubble chat={chat} _isUser={true} />
                            </View>
                        )
                        
                    }
                    else if(chat.creator == USER._id && chat.category=='emoji'){
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