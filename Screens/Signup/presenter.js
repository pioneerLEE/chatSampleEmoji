import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import {TextInput} from 'react-native-gesture-handler'
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  container: {
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop:50,
    backgroundColor: '#f5f5f5',
  },
  inputForm:{
    width: '98%',
    height:60,
    borderColor: 'rgb(83,181,53)',
    borderWidth: 1, 
    borderRadius: 5, 
    justifyContent:'center',
    marginTop: 60
  },
  loginIDText:{
    fontSize: 30,
    marginLeft:20
  },
  loginButton:{
    width: '98%',
    height:60,
    backgroundColor: 'rgb(83,181,53)',
    borderRadius: 5, 
    justifyContent:'center',
    alignItems:'center',
    marginTop: 80
  },
});

class SignupPresenter extends React.Component {
  static navigationOptions = {
    header: null,
  };

  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired,
    }).isRequired,
    isFail:PropTypes.bool.isRequired,
    nick:PropTypes.string.isRequired,
    email:PropTypes.string.isRequired,
    password:PropTypes.string.isRequired,
    changeNick: PropTypes.func.isRequired,
    changeEmail: PropTypes.func.isRequired,
    changePassword: PropTypes.func.isRequired
  };

  render() {
    const { 
      navigation,
      nick,
      email,
      password,
      changeNick,
      changeEmail,
      changePassword,
      isFail
    } = this.props;

    return (
      <View style={styles.container}>
        <View style={styles.inputForm}>
          <TextInput 
            placeholder="Nick"
            autoCapitalize={'none'}
            autoCorrect={false}
            style={styles.loginIDText}
            value={nick}
            onChangeText={changeNick}
            returnKeytype={'next'}
          />
        </View>
        <View style={styles.inputForm}>
          <TextInput 
            placeholder="Email"
            autoCapitalize={'none'}
            autoCorrect={false}
            style={styles.loginIDText}
            value={email}
            onChangeText={changeEmail}
            keyboardtype="default"
          />
        </View>
        <View style={styles.inputForm}>
          <TextInput 
            placeholder="Password"
            autoCapitalize={'none'}
            autoCorrect={false}
            style={styles.loginIDText}
            value={password}
            onChangeText={changePassword}
            keyboardtype="default"
            secureTextEntry={true}
          />
        </View>
        <View style={{width:'100%', height:30,paddingTop:10}}>{
          isFail ? <Text style={{marginLeft:5,fontSize:10,color:'red'}}>{'아이디 또는 비밀번호가 잘못되었습니다. 다시 시도해주세요.'}</Text>:null
        }</View> 
        <TouchableOpacity style={styles.loginButton}>
          <Text style={{fontSize:20, color:'white'}}>로그인</Text> 
        </TouchableOpacity>
      </View>
    );
  }
}

export default SignupPresenter;