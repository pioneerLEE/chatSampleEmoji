import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableHighlight,
} from 'react-native';
import PropTypes from 'prop-types';

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
    flex: 3,
  },
  copyText: {
    fontSize: 16,
    marginTop: 2,
    color: '#8e8e93',
  },
  nameContainer: {
    flexDirection: 'row',
    marginTop: 10,
    alignItems: 'flex-end',
  },
  nameText: {
    fontSize: 26,
    fontWeight: 'bold',
    zIndex: 999,
  },
  subnameText: {
    fontSize: 16,
    marginLeft: 5,
  },
  marker: {
    position: 'absolute',
    top: 20,
    backgroundColor: '#54d9cd',
    width: 67,
    height: 10,
    zIndex: 0,
  },
  buttonContainer: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  signinContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  button: {
    paddingTop: 15,
    paddingBottom: 15,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 15,
  },
  facebookButton: {
    backgroundColor: '#4267B2',
  },
  kakaoButton: {
    backgroundColor: '#FAE100',
  },
  emailButton: {
    backgroundColor: '#FFFFFF',
  },
  buttonText: {
    fontSize: 13,
    marginLeft: 10,
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

class SignupPresenter extends React.Component {
  static navigationOptions = {
    header: null,
  };

  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func.isRequired,
    }).isRequired,
  };

  render() {
    const { navigation } = this.props;

    return (
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text style={styles.copyText}>대학생이</Text>
          <Text style={styles.copyText}>썸타는 방법</Text>
          <View style={styles.nameContainer}>
            <Text style={styles.nameText}>유니썸</Text>
            <Text style={styles.subnameText}>UNIVSOME</Text>
            <View style={styles.marker} />
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableHighlight style={[styles.button, styles.facebookButton]}>
            <View style={{ flexDirection: 'row' }}>
              <Image source={require('../assets/Landing/facebook.png')}/>
              <Text style={[styles.buttonText, { color: '#FFFFFF' }]}>페이스북으로 시작</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight style={[styles.button, styles.kakaoButton]}>
            <View style={{ flexDirection: 'row' }}>
              <Image style={styles.iconImage} source={require('../assets/Landing/kakao.png')} />
              <Text style={[styles.buttonText, { color: '#381E1F' }]}>카카오톡으로 시작</Text>
            </View>
          </TouchableHighlight>
          <TouchableHighlight style={[styles.button, styles.emailButton]} onPress={() => navigation.navigate('EmailSettingScreen')}>
            <View style={{ flexDirection: 'row' }}>
              <Image style={styles.iconImage} source={require('../assets/Landing/email.png')} />
              <Text style={[styles.buttonText, { color: '#000000' }]}>이메일 주소로 시작</Text>
            </View>
          </TouchableHighlight>
        </View>
        <View style={styles.signinContainer}>
          <Text style={styles.signincopyText}>이미 회원이라면?</Text>
          <TouchableHighlight onPress={() => navigation.navigate('SignInScreen')}>
            <Text style={styles.signinText}>로그인</Text>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

export default SignupPresenter;