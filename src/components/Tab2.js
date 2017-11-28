import React from 'react';
import {View,StyleSheet,Component} from 'react-native';
import { Container, Header, Content, List, ListItem, Thumbnail, Text, Body } from 'native-base';


 class Tab2 extends React.Component {



    render(){
  return(
    <View>
<Container>
<Content>
          <List>
            <ListItem>
              <Thumbnail square size={80} source={{ uri: 'https://slimages.macysassets.com/is/image/MCY/products/1/optimized/8840871_fpx.tif?bgc=255,255,255&wid=224&qlt=90,0,0&layer=comp&op_sharpen=0&resMode=bicub&op_usm=0.7,1.0,0.5,0&fmt=jpeg' }} />
              <Body>
                <Text>Sankhadeep</Text>
                <Text note>Its time to build a difference . .</Text>
              </Body>
            </ListItem>
          </List>
        </Content>
        </Container>
      
      
  </View>
  );
}
}

export default Tab2;