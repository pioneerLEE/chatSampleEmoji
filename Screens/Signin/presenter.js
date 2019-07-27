import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';
import {TextInput} from 'react-native-gesture-handler'

class SigninPresenter extends React.Component {
  static navigationOptions = {
    header: null,
  };

  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired,
    }).isRequired,
    ID:PropTypes.string.isRequired,
    PW:PropTypes.string.isRequired,
    isLoading:PropTypes.bool,
    changeID:PropTypes.func.isRequired,
    changePW:PropTypes.func.isRequired,
  };

  render() {
    const { 
      navigation,
      ID,
      PW,
      changeID,
      changePW 
    } = this.props;

    return (
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.copyText}>채팅이 더 즐거워진다!</Text>
          <View style={styles.nameContainer}>
            <Text style={styles.nameText}>EmoticBox</Text>
            <Text style={styles.subnameText}>채팅샘플</Text>
          </View>
        </View>
        <View style={styles.loginContainer}>
          <View style={styles.loginID}>
            <TextInput 
              placeholder="ID"
              autoCapitalize={'none'}
              autoCorrect={false}
              style={styles.loginIDText}
              value={ID}
              onChangeText={changeID}
              keyboardtype={'email-address'}
              returnKeytype={'next'}
            />
          </View>
          <View style={styles.loginPW}>
            <TextInput 
              placeholder="PW"
              autoCapitalize="none"
              autoCorrect='none'
              style={styles.loginIDText}
              value={PW}
              onChangeText={changePW}
              keyboardtype="default"
              secureTextEntry={true}
            />
          </View>
          <TouchableOpacity style={styles.loginButton}>
            <Text style={{fontSize:20, color:'white'}}>로그인</Text> 
          </TouchableOpacity>
        </View>
        <View style={styles.signinContainer}>
          <Text style={styles.signincopyText}>아직 회원이 아니라면? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('RoomlistScreen')}>
            <Text style={styles.signinText}>회원가입</Text>
          </TouchableOpacity>
        </View>
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
  titleContainer: {
    justifyContent: 'center',
    alignItems: 'flex-start',
    flex: 5,
  },
  copyText: {
    fontSize: 16,
    marginTop: 2,
    color: '#8e8e93',
  },
  nameContainer: {
    flexDirection: 'row',
    marginTop: 10,
    alignItems: 'center',
    justifyContent:'center'
  },
  nameText: {
    fontSize: 26,
    fontWeight: 'bold',
    zIndex: 999,
    color:'rgb(83,181,53)'
    
  },
  subnameText: {
    fontSize: 16,
    marginLeft: 5,
    marginTop:5,
  },
  loginContainer: {
    flex: 5,
    alignItems: 'center',
  },
  loginID:{
    width: '98%',
    height:60,
    borderColor: 'rgb(83,181,53)',
    borderWidth: 1, 
    borderRadius: 5, 
    justifyContent:'center',
  },
  loginIDText:{
    fontSize: 30,
    marginLeft:20
  },
  loginPW:{
    width: '98%',
    height:60,
    borderColor: 'rgb(83,181,53)',
    borderWidth: 1, 
    borderRadius: 5, 
    justifyContent:'center',
    marginTop: 20
  },
  loginButton:{
    width: '98%',
    height:60,
    backgroundColor: 'rgb(83,181,53)',
    borderRadius: 5, 
    justifyContent:'center',
    alignItems:'center',
    marginTop: 20
  },
  signinContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  signinText: {
    fontSize: 11,
    textDecorationLine: 'underline',
    color: '#555555',
  },
  signincopyText: {
    fontSize: 11,
    color: '#555555',
  },
  iconImage: {
    width: 20,
    height: 20,
  },
});

export default SigninPresenter;