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
  };

  render() {
    const { navigation } = this.props;

    return (
      <View style={{flex:1}}>
        <ScrollView>
          <TouchableOpacity style={{backgroundColor:'red', height:100, width:'100%', flexDirection:'row',justifyContent:"space-between",alignItems:'center'}}>
            <Text style={{fontSize: 20, marginLeft:20}}>
              Soma 사람들 모두 모여라
            </Text>
            <Text style={{fontSize: 15, marginRight:10}}>
              1/2
            </Text>
          </TouchableOpacity>
          
        </ScrollView>
      </View>
    );
  }
}

export default RoomListPresenter;