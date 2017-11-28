import React from 'react';
import {GiftedChat} from 'react-native-gifted-chat';
import Backend from '../Backend';
import {BackHandler} from 'react-native';



export default class Chat extends React.Component {

  static navigationOptions = {
		headerLeft:null
	}

  state= {
    messages1: []
  };

  componentWillMount() {
    BackHandler.addEventListener('hardwareBackPress', () => {return true});
  }

  render(){
    return (
      <GiftedChat
        messages={this.state.messages1}
        onSend={(message) => {
          Backend.sendMessage(message);
        }}
        user={{
          _id: Backend.getUid(),
        }}
      />
    );
  }

  componentDidMount() {
    Backend.loadMessages((message) => {
      this.setState((previousState) => {
        return {
          messages1: GiftedChat.append(previousState.messages1, message),
        };
      });
    });
  }
  componentWillUnmount() {
    Backend.closeChat();
  }
}
