import React, { Component } from 'react';
import { View, Text,TouchableOpacity,StyleSheet,Platform} from 'react-native';
import MapView from 'react-native-maps';
import GeoFencing from 'react-native-geo-fencing';
import {Actions} from 'react-native-router-flux';
import Toast from 'react-native-toast-native';


class Geolocation extends Component {

  
  constructor(props) {
    super(props);

    this.state = {
      latitude: null,
      longitude: null,
      error: null
    };
  }

  componentDidMount() {
   

    const polygon = [
    { lat: 31.415534202214022, lng: 74.1745376586914 },
    { lat: 31.414160778554486, lng: 74.17539596557617 },
    { lat: 31.41529614355363,  lng: 74.17687654495239 },
    { lat: 31.416138502254164, lng: 74.17649030685425 },
    { lat: 31.416101878120138, lng: 74.17494535446167 },
    { lat: 31.415534202214022, lng: 74.1745376586914 }// last point has to be same as first point
  ];

  navigator.geolocation.getCurrentPosition(
    (position) => {
      let point = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };

      GeoFencing.containsLocation(point, polygon)
        .then(() => {Actions.nom();})
        .catch(() => {Actions.kole();})
    },
    (error) => alert(error.message),
    { enableHighAccuracy: true, timeout: 25000, maximumAge: 50000 }
  );
  }


  render() {
    return (
      <View style={styles.container}>
      
        <MapView style={styles.map}
    initialRegion={{
      latitude: 31.415624,
      longitude: 74.175740,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    }}
  >
  
  <MapView.Marker 
  title="UOS"
  pinColor="#3498db"
  image={require("../Img/sargodha.png")}
  description="You are at the university,please be civil at all occassion."
    coordinate={{latitude: 31.415815,
      longitude: 74.175601,}}>


  </MapView.Marker>

  
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

export default Geolocation;