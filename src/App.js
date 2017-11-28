

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import MapView from 'react-native-maps';


import Home from './components/Home';
import Chat from './components/Chat';
import ChatCS from './components/ChatCS';
import ChatDPT from './components/ChatDPT';
import Geolocation from './components/Geolocation';

import Kole from './components/Kole';
import Nom from './components/Nom';
import Register from './components/Register';

import { Router,Scene } from 'react-native-router-flux';


  class App extends React.Component {
  render() {
    return (
    <Router>
      <Scene key='root' style={{paddingTop: Platform.OS === 'ios' ? 62 : 54, backgroundColor:'#3046C0'}} >
      <Scene key='chatcs' component={ChatCS} title= 'Computer Science' />
     <Scene key='chatdpt' component={ChatDPT} title= 'DPT' />
      <Scene key='home' component={Home} hideNavBar={true} />
    <Scene key='chat' component={Chat} title = 'General Chat' panHandlers={null} renderBackButton={()=>(null)} />
    <Scene key='register' component={Register} hideNavBar={true} />
    <Scene key='kole' component={Kole} hideNavBar={true}   />
    <Scene key='nom'   component={Nom}  panHandlers={null}  hideNavBar/>
    <Scene key='geolocation' title = 'Fetching Location' component={Geolocation} initial    />

      </Scene>



    </Router>


    );
  }
}


export default App;
