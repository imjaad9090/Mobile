import React, { Component } from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import MapView from 'react-native-maps';

 


 class Absent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      latitude: null,
      longitude: null,
      error: null,
    };
  }
  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          error: null,
        });
      },
      (error) => this.setState({ error: error.message }),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
    );
  }

  getInitialState() {
    return {
      region: {
        latitude: this.state.latitude,
        longitude: this.state.longitude,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      },
    };
  }
  

  render() {
    return (
      <View style={styles.container}>
      
        <MapView style={styles.map}
      region={this.state.region}
      >
  
{  /* <MapView.Marker 
  title="UOS"
  pinColor="#3498db"
  image={require("../Img/sargodha.png")}
  description="You are at the university,please be civil at all occassion."
    coordinate={this.state.markerPosition}>


  </MapView.Marker>
*/}
  
  </MapView>
         </View>
    );
  }
}

const styles = StyleSheet.create({

  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },



  map:{
    left:0,
    right:0,
    top:0,
    bottom:0,
    position:'absolute'
    
  }
})

export default Absent;

