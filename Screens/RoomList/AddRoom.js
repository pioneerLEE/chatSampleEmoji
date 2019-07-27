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
  };
  render() {
    const { visible,close }=this.props
    return (
      <Overlay visible={visible} animationType="zoomIn"
            containerStyle={{backgroundColor: 'rgba(0, 0, 0, 0.78)'}} >
            <View style={{width:width/100*85,height:height/100*81}}>
              <View style={{width:width/100*85,height:height/15,justifyContent:'center',alignItems:'flex-end'}}>
                <TouchableOpacity onPressOut={()=>{close()}}>
                  <EvilIcons name={"close"} size={42} color={'#ffffff'}/>
                </TouchableOpacity>
              </View>
              <View style={{backgroundColor:'rgb(238,238,238)',width:width/100*85,height:height/100*25,borderTopRightRadius:15,borderTopLeftRadius:15,alignItems:'center',justifyContent:'center'}}>
                <View style={{width:width/5,height:width/5,borderRadius:width/10,backgroundColor:'white',justifyContent:'center',alignItems:'center',borderColor:'rgb(47,168,183)',borderWidth:1.5}} >
                  <MaterialCommunityIcons name='thumb-up' size={45} color={'rgb(47,168,183)'} style={{marginTop:5}} />
                </View>
                <Text style={{fontSize:22,marginTop:20}}>{'좋아요를 구입하세요!'}</Text>
              </View>
              
              <View style={{backgroundColor:'#ffffff',width:width/100*85,height:height/100*13,flexDirection:'row',alignItems:'center'}}>
                <View style={{flexDirection:'row',alignItems:'center',flex:2}}>
                  <View style={{width:26,height:26,borderRadius:13,backgroundColor:'rgb(47,168,183)',justifyContent:'center',alignItems:'center',marginLeft:18,marginRight:10}} >
                    <MaterialCommunityIcons name='thumb-up' size={15} color='white' style={{marginTop:1}} />
                  </View>
                  <Text style={{fontSize:18}}>{'좋아요 '}</Text>
                  <Text style={{fontSize:18,color:'red'}}>{'10'}</Text>
                  <Text style={{fontSize:18}}>{'개'}</Text>
                </View>
                <View style={{flexDirection:'row',alignItems:'center',flex:1}}>
                  <TouchableOpacity style={{borderColor:'rgb(54,177,191)',borderWidth:1,borderRadius:20,width:width/9*2,height:height/100*5 ,justifyContent:'center',alignItems:'center'}}>
                    <Text style={{color:'rgb(54,177,191)',fontSize:16}}>{'$1.00'}</Text>
                  </TouchableOpacity>
                </View>
              </View>
              
              <View style={{borderBottomColor:'rgb(238,238,238)',borderBottomWidth:1}}/>
              
              <View style={{backgroundColor:'#ffffff',width:width/100*85,height:height/100*13,flexDirection:'row',alignItems:'center'}}>
                <View style={{flexDirection:'row',alignItems:'center',flex:2}}>
                  <View style={{width:26,height:26,borderRadius:13,backgroundColor:'rgb(47,168,183)',justifyContent:'center',alignItems:'center',marginLeft:18,marginRight:10}} >
                    <MaterialCommunityIcons name='thumb-up' size={15} color='white' style={{marginTop:1}} />
                  </View>
                  <Text style={{fontSize:18}}>{'좋아요 '}</Text>
                  <Text style={{fontSize:18,color:'red'}}>{'30'}</Text>
                  <Text style={{fontSize:18}}>{'개'}</Text>
                </View>
                <View style={{flexDirection:'row',alignItems:'center',flex:1}}>
                  <TouchableOpacity style={{borderColor:'rgb(54,177,191)',borderWidth:1,borderRadius:20,width:width/9*2,height:height/100*5 ,justifyContent:'center',alignItems:'center'}}>
                    <Text style={{color:'rgb(54,177,191)',fontSize:16}}>{'$2.00'}</Text>
                  </TouchableOpacity>
                </View>
              </View>
              
              <View style={{borderBottomColor:'rgb(238,238,238)',borderBottomWidth:1}}/>

              <View style={{backgroundColor:'#ffffff',width:width/100*85,height:height/100*13,flexDirection:'row',alignItems:'center',borderBottomRightRadius:15,borderBottomLeftRadius:15}}>
                <View style={{flexDirection:'row',alignItems:'center',flex:2}}>
                  <View style={{width:26,height:26,borderRadius:13,backgroundColor:'rgb(47,168,183)',justifyContent:'center',alignItems:'center',marginLeft:18,marginRight:10}} >
                    <MaterialCommunityIcons name='thumb-up' size={15} color='white' style={{marginTop:1}} />
                  </View>
                  <Text style={{fontSize:18}}>{'좋아요 '}</Text>
                  <Text style={{fontSize:18,color:'red'}}>{'50'}</Text>
                  <Text style={{fontSize:18}}>{'개'}</Text>
                </View>
                <View style={{flexDirection:'row',alignItems:'center',flex:1}}>
                  <TouchableOpacity style={{borderColor:'rgb(54,177,191)',borderWidth:1,borderRadius:20,width:width/9*2,height:height/100*5 ,justifyContent:'center',alignItems:'center'}}>
                    <Text style={{color:'rgb(54,177,191)',fontSize:16}}>{'$3.00'}</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
        </Overlay>
    );
  }
}

export default AddRoom;