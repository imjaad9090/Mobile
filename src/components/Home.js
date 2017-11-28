import React from 'react';
import { Text,View ,StyleSheet,TextInput,TouchableOpacity} from 'react-native';
import {Actions} from 'react-native-router-flux';
class Home extends React.Component {

  state = {
    name: '',
  };


  render(){
    return (

      <View>
      <Text style={{color:'#2c3e50',fontFamily:'HelveticaNeue-Medium', fontSize:23, alignSelf:'center', marginTop:80}}>
        Enter Your Nick
      </Text>

      <TextInput
        underlineColorAndroid='transparent'
        style={{alignSelf:'center',fontSize:10,width:190,height:30,textAlign:'center',borderColor:'#2c3e50',opacity:0.8,borderWidth:2, marginTop:20}}
        onChangeText={(text) => {
          this.setState({
            name: text,
          });
        }}
        value={this.state.name}
      />



        <TouchableOpacity
          onPress={() => {
            Actions.chat({
              name : this.state.name,
            });
          }}
          >
          <Text style={{color:'#fff',width:90,height:40,backgroundColor:'#2c3e50',fontFamily:'HelveticaNeue-Medium', fontSize:17, alignSelf:'center', marginTop:30,textAlign:'center',paddingTop:8}}>
            Start
          </Text>
        </TouchableOpacity>
      </View>

    );
  }

  }


export default Home;
