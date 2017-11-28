import React from 'react';
import {GiftedChat} from 'react-native-gifted-chat';
import BackendCS from '../BackendCS';
import {BackHandler} from 'react-native';



export default class ChatCS extends React.Component {

  

  state= {
    comp: []
  };

  

  render(){
    return (
      <GiftedChat
        messages={this.state.comp}
        onSend={(message) => {
          BackendCS.sendMessage(message);
        }}
        user={{
          _id: BackendCS.getUid(),
        }}
      />
    );
  }

  componentDidMount() {
    BackendCS.loadMessages((message) => {
      this.setState((previousState) => {
        return {
          comp: GiftedChat.append(previousState.comp, message),
        };
      });
    });
  }
  componentWillUnmount() {
    BackendCS.closeChat();
  }
}
