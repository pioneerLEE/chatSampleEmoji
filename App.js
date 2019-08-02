import React from 'react';
import {
  View,StatusBar
} from 'react-native';
import Navi from './Navigation/Navi';


class App extends React.Component {
  render() {
    return (
      //앱 컨테이너
      <View style={{flex:1}}>
        <StatusBar barStyle="light-content" />
        <Navi/>
      </View>
    );
  }
}

export default App;

/*

if (!version.startsWith('iOS') && !version.startsWith('tvOS')) {
      continue;
}
을 
node_modules/react-native/local-cli/runIOS/findMatchingSimulator.js
의 44라인의

if (!version.includes('iOS') && !version.includes('tvOS')) {
continue;
} 
로 변경한다.

*/