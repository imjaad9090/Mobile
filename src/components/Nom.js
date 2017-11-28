import React from 'react';
import { Text,View,TouchableOpacity,Image,StatusBar} from 'react-native';
import {Actions} from 'react-native-router-flux';

import { Container, Header,Footer,FooterTab,Button,Right,Left, Content, Tab,List, ListItem,TabHeading, Thumbnail, Body,Tabs,Title,Icon } from 'native-base';
import Tab1 from './Tab1';
import Tab2 from './Tab2';
import  Chat from './Chat';
import ChatCS from './ChatCS';
import ChatDPT from './ChatDPT';


 class Nom extends React.Component {

render() {
  return(
    

<Container>
        
<StatusBar
     barStyle="light-content"
   />
 
   <Header style={{backgroundColor:'#3046c0'}}>
     <Body>
            <Title style={{alignSelf:'center',marginLeft:50}}>Unichat</Title>      
     </Body>
     <Right style={{marginRight:4}}><TouchableOpacity><Icon style={{color:'#ffffff'}} name='menu' />
     </TouchableOpacity> 
          </Right>
   </Header>
<Tabs 
        tabStyle={{height:40}}
        tabBarUnderlineStyle={{backgroundColor:'#ecf0f1'}}
        >

          <Tab 
          heading="Public"
          tabStyle={{backgroundColor: '#3052C0'}} textStyle={{color: '#fff'}} activeTabStyle={{backgroundColor: '#3052C0'}} activeTextStyle={{color: '#fff', fontWeight: 'bold'}}
          > 
          <Chat />
          </Tab>

          <Tab 
          heading="Chats"
          tabStyle={{backgroundColor: '#3052C0',height:40}} textStyle={{color: '#fff'}} activeTabStyle={{backgroundColor: '#3052C0'}} activeTextStyle={{color: '#fff', fontWeight: 'bold'}}
          > 
          <Container>
<Content>
<List style={{marginTop:4}}>
<ListItem avatar >
  <Left>
    <Thumbnail source={require("../Img/trevor.jpg")} />
  </Left>
  <Body>
    <Text style={{fontWeight:'bold'}}>Trevor Noah</Text>
    <Text note>How we gonna pull that heist man</Text>
  </Body>
  
</ListItem>

<ListItem avatar >
  <Left>
    <Thumbnail source={require("../Img/lana.jpg")} />
  </Left>
  <Body>
    <Text style={{fontWeight:'bold'}}>Lana Ray</Text>
    <Text note>We are stardust here forever..</Text>
  </Body>
  
</ListItem>

<ListItem avatar >
  <Left>
    <Thumbnail source={require("../Img/eminem.jpg")} />
  </Left>
  <Body>
    <Text style={{fontWeight:'bold'}}>Eminem </Text>
    <Text note>Love the way you lie</Text>
  </Body>
  
</ListItem>
</List>
        </Content>
        </Container>
          </Tab>

          <Tab heading="Groups"
          tabStyle={{backgroundColor: '#3052C0'}} textStyle={{color: '#fff'}} activeTabStyle={{backgroundColor: '#3052C0'}} activeTextStyle={{color: '#fff', fontWeight: 'bold'}}>

          <Container>
<Content>
<List style={{marginTop:4}}>
<ListItem avatar onPress={() => Actions.chatcs()}>
  <Left>
    <Thumbnail source={require("../Img/cs.jpg")} />
  </Left>
  <Body>
    <Text style={{fontWeight:'bold'}}>Computer Science</Text>
    <Text note>Tap to chat with cs..</Text>
  </Body>
  
</ListItem>

<ListItem avatar onPress={() => Actions.chatdpt()}>
  <Left>
    <Thumbnail source={require("../Img/dpt.jpg")} />
  </Left>
  <Body>
    <Text style={{fontWeight:'bold'}}>Physical Therapy</Text>
    <Text note>Tap to chat with dpt..</Text>
  </Body>
  
</ListItem>
</List>
        </Content>
        </Container>

          </Tab>
          
        </Tabs>




</Container>
      

    
  );
}




}

export default Nom;
