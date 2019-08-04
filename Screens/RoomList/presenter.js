import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  Dimensions,
  ScrollView
} from 'react-native';
const { height, width } = Dimensions.get('screen');
import PropTypes from 'prop-types';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import AddRoom from './AddRoom'

Roomsection=(props)=>{
  const { room,selectRoom } = props;
  console.log('1room:',room);
  return (
    <View>
      <TouchableOpacity onPressOut={()=>{selectRoom(room._id)}} style={{height:70, width:'100%', flexDirection:'row',alignItems:'center'}}>
        <View style={{width:50,height:50,borderRadius:50/2,justifyContent:'center',alignItems:'center',backgroundColor:'rgb(165,182,229)', marginLeft:20}}>
          <SimpleLineIcons name='user' size={25} color='rgb(226,226,226)' />
        </View>
        <View style={{marginLeft:20}}>
          <Text style={{fontSize: 14, fontWeight:'bold',marginBottom: 3}}>
            {room.creator.nick}
          </Text>
          <Text style={{fontSize: 12,color:'rgb(141,141,141)',fontWeight:'100'}}>
            Soma 사람들 모두 모여라
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

class RoomListPresenter extends React.Component {
  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired,
    }).isRequired,
    Rooms:PropTypes.array.isRequired,
    visible:PropTypes.bool.isRequired,
    selectedRoomId:PropTypes.string.isRequired,
    close:PropTypes.func.isRequired,
    addnewRoom:PropTypes.func.isRequired,
    selectRoom:PropTypes.func.isRequired,
    USER:PropTypes.object.isRequired,
  };

  render() {
    const { navigation,visible,close,addnewRoom,selectedRoomId,USER,selectRoom } = this.props;
    if(selectedRoomId){
      navigation.navigate('ChatScreen',{
        USER,
        selectedRoomId
      });
    }
    return (
      <View style={{flex:1}}>
        <ScrollView>
          <View style={{height:10}}/>
          {
            this.props.Rooms.map((room,i)=>{
              console.log('맵핑',room)
              return(
                <Roomsection room={room} selectRoom={selectRoom}/>
              );
            })
          }
        </ScrollView>
        <AddRoom 
          visible={visible}
          close={close}
          addnewRoom={addnewRoom}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 30,
    paddingRight: 30,
    backgroundColor: '#f5f5f5',
  },
  
});

export default RoomListPresenter;