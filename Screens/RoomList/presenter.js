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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 30,
    paddingRight: 30,
    backgroundColor: '#f5f5f5',
  },
  
});

class RoomListPresenter extends React.Component {
  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired,
    }).isRequired,
    Rooms:PropTypes.func
  };

  render() {
    const { navigation } = this.props;

    return (
      <View style={{flex:1}}>
        <ScrollView>
          <View style={{height:20}}/>
          {
            this.props.Rooms.map((room,i)=>{
              return(
                <TouchableOpacity style={{height:70, width:'100%', flexDirection:'row',alignItems:'center'}}>
                  <View style={{width:50,height:50,borderRadius:50/2,justifyContent:'center',alignItems:'center',backgroundColor:'rgb(165,182,229)', marginLeft:20}}>
                    <SimpleLineIcons name='user' size={25} color='rgb(226,226,226)' />
                  </View>
                  <View style={{marginLeft:20}}>
                    <Text style={{fontSize: 14, fontWeight:'bold',marginBottom: 3}}>
                      {room.name}
                    </Text>
                    <Text style={{fontSize: 12,color:'rgb(141,141,141)',fontWeight:'100'}}>
                      Soma 사람들 모두 모여라
                    </Text>
                  </View>
                </TouchableOpacity>
              );
            })
          }
        </ScrollView>
      </View>
    );
  }
}

export default RoomListPresenter;