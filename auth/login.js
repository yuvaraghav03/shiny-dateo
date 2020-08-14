import StepIndicator from 'react-native-step-indicator';
import React, { Component,useState } from 'react';
import { Image ,StyleSheet,SafeAreaView,FlatList,Dimensions,Share,TouchableOpacity,Alert} from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body,Drawer,View,ListItem,Right,Radio, List,Title,ActionSheet,Item,Input,Form,Label} from 'native-base';
import * as Font from 'expo-font';
import { ScrollView } from 'react-native-gesture-handler';
import Display from 'react-native-display';
import * as firebase from 'firebase';
import ValidationComponent from 'react-native-form-validator';
const { width: screenWidth } = Dimensions.get('window');
import { Ionicons,FontAwesome5,MaterialCommunityIcons,Feather,SimpleLineIcons,Octicons,Fontisto,FontAwesome,Entypo,AntDesign} from '@expo/vector-icons';
import {
  Avatar,
  TouchableRipple,
  Switch
} from 'react-native-paper';
export default class Login extends React.Component{
    constructor(props){
        super(props);
        this.state = { email: '',password: '',isLoading: false, errorMessage:null,userimage:null};
    }
    state={
        loading:true,
      }
      userLogin = () => {
        if(!this.state.email || !this.state.password) {
          Alert.alert('Enter details to signin!')
        } else {
          this.setState({
            isLoading: true
          })
          firebase
          .auth()
          .signInWithEmailAndPassword(this.state.email, this.state.password)
          .then((res) => {
            console.log(res)
            console.log('User logged-in successfully!')
            this.setState({isLoading: false})
            this.props.navigation.navigate('homecomponent',{screen:'Home'});
          })
          .catch(error => this.setState({ errorMessage: error.message }))
        }
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
<Text style={{color:'white',fontSize:25,fontWeight:'bold',textAlign:'center'}}> Welcome back {'\n'} sign in to get back your Account </Text>
   <Content>
<Card style={styles.card}>
<Text style={{color:'white',fontSize:25,fontWeight:'bold',textAlign:'center'}}> SIGN IN </Text>
<CardItem style={{backgroundColor:'black'}}></CardItem>
<Form  ref="form"  >
          <Item floatingLabel>
            <Label style={styles.fieldtitle} >Email Address</Label>
            <Input style={styles.fieldinput} onChangeText={(email) => this.setState({email})} value={this.state.email}  />
            
          </Item>
          <Item  floatingLabel>
            <Label style={styles.fieldtitle}>Password</Label>
            <Input style={styles.fieldinput}onChangeText={(password) => this.setState({password})} value={this.state.password}  />
          
          </Item>
  {this.state.errorm && <Text style={styles.error}>{this.state.errorm}</Text>}
          <Item stackedLabel style={styles.submission}>
            <Button style={styles.submit}  onPress={this.userLogin} ><Text style={styles.submittext}>sign in</Text></Button>
          </Item>
          <Item style={styles.fieldtitl} >
      <Label style={styles.fieldtitle}> Already a user? </Label>
      <TouchableOpacity ><Text style={styles.signup} onPress={()=>this.props.navigation.navigate('signup')} >Sign up</Text></TouchableOpacity>
      </Item>
      </Form>
      </Card>
      </Content>
</Container>
        );
    }
}
const styles = StyleSheet.create({
  Container: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    padding: 35,
    backgroundColor: 'black'
  },
inputStyle: {
    width: '100%',
    marginBottom: 15,
    paddingBottom: 15,
    alignSelf: "center",
    borderColor: "#ccc",
    borderBottomWidth: 1
  },
  loginText: {
    color: '#3740FE',
    marginTop: 25,
    textAlign: 'center'
  },
  preloader: {
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
  },
  screen: {
    flex:1,
    justifyContent:'center',
    backgroundColor:'red',
    textAlign:'center',
    },
    logo:{
        width:200,
        height:200,
        alignSelf:"center",
    },
    card:{
      marginTop:110,
      backgroundColor:'black',

    },
    fieldtitle:{
      color:'white',
    },
    fieldinput:{
      color:'white'
    },
    submission:{
      marginTop:15,
      borderColor:null,
    },
    submit:{
  backgroundColor:'#5F7',
  borderRadius:26,
  width:170,
  justifyContent:'center',
  alignSelf:'center'
    },
    submittext:{
  color:'black',
  textTransform:'capitalize',
    },
    signup:{
      color:'yellow',
      fontSize:20,
      fontStyle:'italic'
    },
    error:{
      color:'red',
      fontWeight:'bold',
      fontSize:24,
    }
});