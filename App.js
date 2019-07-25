import React from 'react';
import {
  View,
} from 'react-native';
import Navi from './Navigation/Navi';

class App extends React.Component {
  render() {
    return (
      //앱 컨테이너
      <View style={{flex:1}}>
        <Navi/>
      </View>
    );
  }
}

export default App;