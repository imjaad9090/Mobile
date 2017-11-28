import React from "react";
import {
  Platform,
  Keyboard,
  Text,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  TouchableOpacity,
  Image,
  TextInput,
  View,
  Component,
  StyleSheet
} from "react-native";
import {
    BallIndicator,
    BarIndicator,
    DotIndicator,
    MaterialIndicator,
    PacmanIndicator,
    PulseIndicator,
    SkypeIndicator,
    UIActivityIndicator,
    WaveIndicator
  } from 'react-native-indicators';
import { Container, Content, Button } from "native-base";
import { Actions } from "react-native-router-flux";
import firebase from "firebase";


export default class Login extends React.Component {
  state = { email: "", password: "", error: "", loading: false };







  onTouchPress() {
    
    const { email, password } = this.state;
    this.setState({ error: "", loading: true });

    


    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        Actions.pop();
        Actions.nom();        
        this.setState({loading: false});
        
      })
      .catch(() => {
        this.setState({
          error: "Something went wrong, try again.",     
          password: "",
          email: "",
          loading: false,
        });
      });
  }

  componentWillMount() {
    firebase.initializeApp(
      {
        apiKey: "AIzaSyBGeKTmShBgf7zcXqkWj8B5tDRKafvDHpE",
        authDomain: "unichat-1.firebaseapp.com",
        databaseURL: "https://unichat-1.firebaseio.com",
        storageBucket: "unichat-1.appspot.com"
      },
      "Second"
    );



    
  }


   renderSpinner(){
       if(this.state.loading){
           return <BarIndicator color='#3046C0'/>      
       }
       return (
        null 
       );
   }

  render() {
    return (
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : null}
        style={styles.container}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.container}>
            <View style={styles.logoContainer}>
              <Image style={styles.logo} source={require("../Img/head.png")} />
            </View>

            <View style={styles.space} >
            {this.renderSpinner()}
            </View>
            

            <View style={styles.form}>
              <TextInput
                style={styles.input}
                value={this.state.email}
                onChangeText={email => this.setState({ email })}
                multiline={false}
                placeholder="Email"
                keyboardType="email-address"
                autoCapitalize="none"
                autoCorrect={false}
                returnKeyType="next"
                underlineColorAndroid="transparent"
                placeholderTextColor="#bdc3c7"
                onSubmitEditing={() => {
                  this.nextInput.focus();
                }}
              />

              <TextInput
                style={styles.input}
                underlineColorAndroid="transparent"
                placeholder="Password"
                value={this.state.password}
                onChangeText={password => this.setState({ password })}
                secureTextEntry
                multiline={false}
                autoCapitalize="none"
                returnKeyType="go"
                placeholderTextColor="#bdc3c7"
                ref={nextInput => (this.nextInput = nextInput)}
              />

              <TouchableOpacity
                style={styles.submit}
                onPress={() => this.onTouchPress()}
              >
                <Text style={styles.subtxt}>Login</Text>
              </TouchableOpacity>

              <Text
                style={{
                  alignSelf: "center",
                  fontSize: 14,
                  color: "#cc0066",
                  marginTop: 3, 
                  
                }}
              >
                {this.state.error}
              </Text>

              <Text
                style={{
                  textAlign: "center",
                  color: "#2c3e50",
                  fontSize: 15,
                  marginTop: 30,
                  fontFamily: "HelveticaNeue-LightItalic"
                }}
              >
                Don't have an account?
              </Text>

              <Button
                onPress={() => Actions.register()}
                bordered
                style={{
                  alignSelf: "center",
                  height: 40,
                  width: 90,
                  borderColor: "#fff",
                  borderWidth:2,
                  marginLeft:15,
                  padding:3,
                }}
              >
                <Text
                  style={{
                    fontSize: 17,
                    color: "#3046C0",
                    fontFamily: "HelveticaNeue-Medium",
                    alignSelf:'center',
                    fontWeight:'bold'
                  }}
                >
                  Register
                </Text>
              </Button>
            </View>

            <View style={styles.bottom}>
              <Image style={styles.btm} source={require("../Img/bottom.png")} />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff"
  },

  space: {
    flex: 1.6
  },

  logoContainer: {
    flex: 2,
    justifyContent: "center",
    marginTop: 40,
    alignItems: "center"
  },
  bottom: {
    flex: 1,
    justifyContent: "center"
  },

  input: {
    height: 37,
    borderColor: "#5c7ac6",
    borderWidth: 2.2,
    borderRadius: 4,
    marginBottom: 8,
    paddingHorizontal: 10,
    fontSize: 14,
    textAlign: "center",
    color: "#2c3e50"
  },

  logo: {
    flex: 1,
    width: 145,
    height: 145,
    resizeMode: "contain"
  },

  btm: {
    flex: 1,
    width: 420,
    height: 100,
    resizeMode: "cover"
  },

  form: {
    flex: 3,
    borderColor: "#34495e",
    paddingLeft: 55,
    paddingRight: 55
  },

  submit: {
    backgroundColor: "#2f46c1",
    paddingVertical: 14
  },

  register: {
    backgroundColor: "#ffffff",
    paddingVertical: 14,
    borderColor: "#34495e"
  },

  subtxt: {
    textAlign: "center",
    color: "#fff",
    fontSize: 15,
    fontFamily: "HelveticaNeue-Medium",
    fontWeight: "700"
  },

  subtxt1: {
    textAlign: "center",
    color: "#3498db",
    fontSize: 13,
    fontFamily: "HelveticaNeue-Medium",
    fontWeight: "700"
  }
});
