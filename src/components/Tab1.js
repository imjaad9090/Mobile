import React from 'react';
import {Text,View,StyleSheet,Component,TouchableOpacity} from 'react-native';
import {Actions} from 'react-native-router-flux';

 class Tab1 extends React.Component {



    render(){
  return(
    <View>

      

<TouchableOpacity>

      <Text
        onPress={() => Actions.home()}
        style={{backgroundColor:'#ecf0f1',alignSelf:'center',width:160,height:50, textAlign:'center',fontSize:20,paddingTop:10,marginBottom:10}}>Go Next</Text>

      </TouchableOpacity>
      
  </View>
  );
}


}

export default Tab1;