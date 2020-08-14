import StepIndicator from 'react-native-step-indicator';
import React, { Component,useState } from 'react';
import { Image ,StyleSheet,SafeAreaView,FlatList,Dimensions,Share,TouchableOpacity} from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body,Drawer,View,ListItem,Right,Radio, List,Title,ActionSheet,Item,Input} from 'native-base';
import * as Font from 'expo-font';
import { ScrollView } from 'react-native-gesture-handler';
import Display from 'react-native-display';
const { width: screenWidth } = Dimensions.get('window');
import { Ionicons,FontAwesome5,MaterialCommunityIcons,Feather,SimpleLineIcons,Octicons,Fontisto,FontAwesome,Entypo,AntDesign} from '@expo/vector-icons';
import {
  Avatar,
  TouchableRipple,
  Switch
} from 'react-native-paper';
export default class Welcome extends React.Component{
    constructor(props){
        super(props);
    }
    state={
        loading:true,
      }
      async componentDidMount() {
        await Font.loadAsync({
          'Roboto': require('native-base/Fonts/Roboto.ttf'),
          'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
          ...Ionicons.font,
        })
        this.setState({ loading: false })
      }
    render(){
        if (this.state.loading) {
            return (
              <Container></Container>
            );
          }
        return(
<Container style={styles.Container}>
<Text style={{color:'white',fontSize:30,fontWeight:'bold'}}>Get a Date</Text>
<Image source={{uri:'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.jVxxT0Kwi0IyNrD0QgU44QHaHa%26pid%3DApi&f=1'}} style={{width:'100%',height:"100%",flex:0.38,}}/>
<Text style={{color:'white',fontSize:20,fontStyle:"italic",textAlign:'center'}}>Find your Perfect match</Text>
<View style={{margin:0,paddingLeft:screenWidth-80,position:'absolute',bottom:50}}>
  <TouchableOpacity onPress={()=>this.props.navigation.navigate('notified')} >
<MaterialCommunityIcons name="arrow-right-circle" size={60} color="white" />
</TouchableOpacity>
</View>
</Container>
        );
    }
}
const styles = StyleSheet.create({
Container:{
  justifyContent:'center',
  alignContent:'center',
  alignItems:'center',
  flex:1,
  backgroundColor:'black'
}
});