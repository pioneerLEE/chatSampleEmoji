import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Dimensions,
  TouchableOpacity
} from 'react-native';
import PropTypes from 'prop-types';
import Overlay from '../component/Overlay';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

const {width,height} = Dimensions.get('window');

const styles = StyleSheet.create({
  
});

class AddRoom extends React.Component {
  static propTypes = {
    visible:PropTypes.bool.isRequired,
    close:PropTypes.func.isRequired,
    addnewRoom:PropTypes.func.isRequired,
  };
  render() {
    const { visible,close,addnewRoom }=this.props
    return (
      <Overlay visible={visible} animationType="zoomIn"
            containerStyle={{backgroundColor: 'rgba(0, 0, 0, 0.78)'}} >
            <View style={{width:width/100*85,height:height/2}}>
              <View style={{backgroundColor:'rgb(238,238,238)',width:width/100*85,height:height/100*30,borderTopRightRadius:15,borderTopLeftRadius:15,alignItems:'center',justifyContent:'center'}}>
                <Text style={{fontSize:22,marginTop:20}}>{'새로운 방을 생성하시겠습니까?'}</Text>
              </View>
              <View style={{backgroundColor:'#ffffff',width:width/100*85,height:height/100*13,flexDirection:'row',borderBottomRightRadius:15,borderBottomLeftRadius:15}}>
                <TouchableOpacity 
                  onPressOut={()=>{addnewRoom()}}
                  style={{flex:1,borderBottomLeftRadius:15,justifyContent:'center',alignItems:'center'}
                }>
                  <View>
                    <Text style={{color:'black',fontSize:25}}>예</Text>
                  </View>
                </TouchableOpacity>
                <View style={{backgroundColor:'black',width:0.5}}/>
                <TouchableOpacity 
                  onPressOut={()=>{close()}}
                  style={{flex:1,borderBottomRightRadius:15,justifyContent:'center',alignItems:'center'}}
                >
                  <View>
                    <Text style={{color:'black',fontSize:25}}>아니오</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </View>
        </Overlay>
    );
  }
}

export default AddRoom;