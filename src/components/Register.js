import React from 'react';
import {Platform,Keyboard,Text,TouchableWithoutFeedback,KeyboardAvoidingView,TouchableOpacity,Image,TextInput,View,Component,StyleSheet} from 'react-native';
import {Container,Content,Button} from 'native-base';
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
import {Actions} from 'react-native-router-flux';
import firebase from 'firebase';
export default class Register extends React.Component {

    state = { email: "", password: "", error: "", loading: false };
    
      onTouchPress() {
        
        const { email, password } = this.state;
        this.setState({ error: "", loading: true });
    
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(() => {
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
          "Third"
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
    


    render(){
    return( 

        <KeyboardAvoidingView behavior= {(Platform.OS === 'ios')? 'padding' : null} style={styles.container}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
        
        <View style={styles.logoContainer}>
        <Image 
        style={styles.logo}
        source={require('../Img/head.png')}  />
        <Image
        style={styles.sub}
        source={require('../Img/sub.png')}  />
        </View>

        

        <View style={styles.space}>
        {this.renderSpinner()}

        </View>

        <View style={styles.form}>

        
        


        <TextInput
        style={styles.input}
        multiline = {false}
        value= {this.state.email}
        onChangeText={email => this.setState({ email })}
        placeholder="Email"
        keyboardType="email-address"
        autoCapitalize="none"
        autoCorrect={false}
        returnKeyType="next"
        underlineColorAndroid='transparent'
        placeholderTextColor='#bdc3c7'
        ref={emai => this.emai = emai}

        onSubmitEditing={() => {this.nextInput.focus()}}
         />

         <TextInput
        style={styles.input}
        underlineColorAndroid='transparent'
        placeholder="Password"
        value= {this.state.password}
        onChangeText={password => this.setState({ password })}
        secureTextEntry
        multiline = {false}
        autoCapitalize="none"
        returnKeyType="go"
        placeholderTextColor='#bdc3c7'
        ref={nextInput => this.nextInput = nextInput}
         />

         <TouchableOpacity  
         onPress={() => this.onTouchPress()}
        style={styles.submit}>
             <Text style={styles.subtxt}>
                 Register
             </Text>
         </TouchableOpacity>

         <Text
                style={{
                  alignSelf: "center",
                  fontSize: 14,
                  color: "#cc0066",
                  marginTop: 3
                }}
              >
                {this.state.error}
              </Text>

         <Text style={{textAlign:'center',color:'#2c3e50',fontSize:15,marginTop:30,fontFamily:'HelveticaNeue-LightItalic'}}>Already a member?</Text>

         
         <Button 
            onPress={() => Actions.pop()}
            bordered style={{alignSelf:'center',height:30,width:90,padding:3,borderColor:'#ffffff'}}>
            <Text style={{fontSize:17,color:'#3046C0',fontWeight:'bold',fontFamily:'HelveticaNeue-Medium',marginLeft:19}}>Login</Text>
          </Button>             


        
        </View>


        <View style={styles.bottom}>
        <Image 
        style={styles.btm}
        source={require('../Img/bottom.png')}  />
        </View>


        </View>
        </TouchableWithoutFeedback>

        </KeyboardAvoidingView>
             

        );



    }

}

const styles = StyleSheet.create({
container: {
    flex:1,
    backgroundColor:'#ffffff',
    
},

space: {
flex:1.6,
},

logoContainer: {
    flex:2,
    justifyContent: 'center',
    marginTop:70,
    alignItems: 'center',
  

},
bottom: {
    flex:1,  
    justifyContent: 'center',
},


input: {
        height:37,
        borderColor:'#5c7ac6',
        borderWidth:2.2,
        borderRadius:4,
        marginBottom:8,
        paddingHorizontal:10,
        fontSize:14,
        textAlign:'center',
        color:'#2c3e50'
        
},


logo: {
    flex: 1,
    width: 145,
    height: 145,
    resizeMode: 'contain',
    
},

sub: {
    flex: 1,
    width: 190,
    height: 175,
    resizeMode: 'contain',
    
},



btm: {
    flex: 1,
    width: 420,
    height: 100,
    resizeMode: 'cover',
    
},

form: {
    flex:3,
    borderColor:'#34495e',
    paddingLeft: 55,
    paddingRight: 55,
},

submit: {
    backgroundColor:'#2f46c1',
    paddingVertical:14,
    
},



register: {
    backgroundColor:'#ffffff',
    paddingVertical:14,
    borderColor:'#34495e',
    
},

subtxt: {
    textAlign:'center',
    color:'#fff',
    fontSize:15,
    fontFamily:'HelveticaNeue-Medium',
    fontWeight:"700",

},


subtxt1: {
    textAlign:'center',
    color:'#3498db',
    fontSize:13,
    fontFamily:'HelveticaNeue-Medium',
    fontWeight:"700",

},




});


