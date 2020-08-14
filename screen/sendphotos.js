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
export default class Send_photos extends React.Component{
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
    <Text style={{color:'white',fontSize:30,fontWeight:'bold'}}> Send Photos </Text>
    <Entypo name="instagram" size={150} color="red" />
        <Text style={{color:'white',fontSize:20,fontStyle:"italic",textAlign:'center'}}>Have fun with your matches by sending photos and videos to each other</Text>
        
<View style={{margin:0,paddingLeft:screenWidth-80,position:'absolute',bottom:50}}>
  <TouchableOpacity onPress={()=>this.props.navigation.navigate('chat')} >
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