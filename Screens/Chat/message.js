import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableHighlight,
} from 'react-native';
import PropTypes from 'prop-types';
const Emoji_API = "http://5e297431.ngrok.io" 

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
  },
});
//current.getFullYear() + "년 " + ( current.getMonth() + 1 ) + "월 " + current.getDate() + "일 "+current.getHours() + "시 " + current.getMinutes() + "분"
MessageBubble=(props)=>{
    const current = new Date(props.chat.createAt)
    return (
        props._isUser ?
        (
            <View style={{flexDirection:'row', alignItems:'flex-end'}}>
                <View style={{marginRight:8}}>
                    <Text style={{marginBottom:1,fontSize:9, color:'white'}}>{current.getHours() + "시 " + current.getMinutes() + "분"}</Text>
                </View>
                <View style={{maxWidth: 250,minWidth:45, padding: 8, borderRadius: 20,marginTop:10, backgroundColor:'rgb(123,222,64)',justifyContent:'center',alignItems:'center'}}>
                    <Text style={{fontSize:13,margin:5}}>
                        {props.chat.messageData}
                    </Text>
                </View>
            </View>
        ):(
            <View style={{flexDirection:'row', alignItems:'flex-end'}}>
                <View style={{maxWidth: 250,minWidth:45, padding: 8, borderRadius:20,marginTop:10, backgroundColor:'white',justifyContent:'center',alignItems:'center'}}>
                    <Text style={{fontSize:13,margin:5}}>
                        {props.chat.messageData}
                    </Text>
                </View>
                <View style={{marginLeft:8}}>
                    <Text style={{marginBottom:1,fontSize:9, color:'white'}}>{current.getHours() + "시 " + current.getMinutes() + "분"}</Text>
                </View>
            </View>
        ) 
    )
}
EmojiBubble=(props)=>{
    const current = new Date(props.chat.createAt)
    return (
        props._isUser ?
        (
            <View style={{flexDirection:'row', alignItems:'flex-end'}}>
                <View style={{marginRight:8}}>
                    <Text style={{marginBottom:1,fontSize:9, color:'white'}}>{current.getHours() + "시 " + current.getMinutes() + "분"}</Text>
                </View>
                <View style={{width: 125,height:125, borderRadius: 20,marginTop:10,justifyContent:'center',alignItems:'center'}}>
                    <Image style={{width:125,height:125}} source={{uri:`${Emoji_API}/load/${props.chat.messageData}/ChatSample1/abcabc`}}/>
                </View>
            </View>
        ):(
            <View style={{flexDirection:'row', alignItems:'flex-end'}}>
                <View style={{width: 125,height:125,borderRadius:20,marginTop:10,justifyContent:'center',alignItems:'center'}}>
                    <Image style={{width:125,height:125}} source={{uri:`${Emoji_API}/load/${props.chat.messageData}/ChatSample1/abcabc`}}/>
                </View>
                <View style={{marginLeft:8}}>
                    <Text style={{marginBottom:1,fontSize:9, color:'white'}}>{current.getHours() + "시 " + current.getMinutes() + "분"}</Text>
                </View>
            </View>
        ) 
    )
}
class Message extends React.Component {
    
  //maxWidth
  static propTypes ={
    chats: PropTypes.array.isRequired,
    USER: PropTypes.object.isRequired,
    exRoom: PropTypes.object.isRequired,
  }
  
  render() {
    console.log(this.props.chats);
    const { chats,USER,exRoom } = this.props;
    return (
        <View style={styles.container}>
            {
                chats.map((chat, key)=>{
                    
                    if( exRoom._id==chat.room && chat.creator != USER._id && chat.category=='text'){ //상대가 보낸 텍스트 메시지
                        return(
                            <View style={{backgroundColor:'transparent',marginLeft:10}}>
                                <MessageBubble chat={chat} _isUser={false} />
                            </View>
                        )
                        
                    }
                    else if( exRoom._id==chat.room && chat.creator == USER._id && chat.category=='text'){ //본인이 보낸 텍스트 메시지
                        return(
                            <View style={{backgroundColor:'transparent',marginRight:10,alignItems:'flex-end'}}>
                                <MessageBubble chat={chat} _isUser={true} />
                            </View>
                        )
                        
                    }
                    else if( exRoom._id==chat.room && chat.creator == USER._id && chat.category=='emoji'){ //자신이 보낸 emoji 메시지
                        return(
                            <View style={{backgroundColor:'transparent',marginRight:10,alignItems:'flex-end'}}>
                                <EmojiBubble chat={chat} _isUser={true} />
                            </View>
                        )
                        
                    }
                    else if( exRoom._id==chat.room && chat.creator != USER._id && chat.category=='emoji'){ //타인이 보낸 emoji 메시지
                        return(
                            <View style={{backgroundColor:'transparent',marginLeft:10}}>
                                <EmojiBubble chat={chat} _isUser={false} />
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