import React from 'react';
import {View,ActivityIndicator,Component} from 'react-native';

export default class Spinner extends Component {
render(){
    return (
        <View style={{flex:1,alignItems:'center',justifyContent:'center'}}> 
        
        <ActivityIndicator color='#ffffff' size={'small'}></ActivityIndicator>
        
        </View>
    );
}
}

