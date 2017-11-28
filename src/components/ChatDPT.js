import React from 'react';
import {GiftedChat} from 'react-native-gifted-chat';
import BackendDPT from '../BackendDPT';
import {BackHandler,StatusBar} from 'react-native';



export default class ChatCS extends React.Component {

  
  
  state= {
    dpt: []
  };

  
  
  render(){
    
    return (

      
      <GiftedChat
        messages={this.state.dpt}
        onSend={(message) => {
          BackendDPT.sendMessage(message);
        }}
        user={{
          _id: BackendDPT.getUid(),
        }}
      />
    );
  }

  componentDidMount() {
    
    BackendDPT.loadMessages((message) => {
      this.setState((previousState) => {
        return {
          dpt: GiftedChat.append(previousState.dpt, message),
        };
      });
    });
  }
  componentWillUnmount() {
    BackendDPT.closeChat();
  }
}
