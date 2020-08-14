import React, { Component } from 'react';
import {
  ImageBackground,
  SafeAreaView, StyleSheet, Dimensions, FlatList, TextInput, AsyncStorage, Alert, TouchableOpacity
} from 'react-native';
import { Container, Header, Content, Item, Input, Button, Text, View, Thumbnail, Card, Form, Label, CardItem, ActionSheet } from 'native-base';
import * as Font from 'expo-font';
import ValidationComponent from 'react-native-form-validator';
import { Ionicons } from '@expo/vector-icons';
import { ListItem, Avatar as Avatarr, Tooltip, Paragraph, Caption } from 'react-native-elements';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';
import { BottomSheet } from 'react-native-btr';
import * as firebase from 'firebase';
'use strict';
// import {Actions} from 'react-native-router-flux';
const { width: screenWidth } = Dimensions.get('window');
export default class Signuppage extends ValidationComponent {
  constructor(props) {
    super(props);
    this.state = {
      user:{
      email: "",
      pass: '',
      username: '',
      number: '',
      usn: '',
      avatar: null
      },
      errorm: null,
    };
  }

  state = {
    loading: true,
    visible: false,
  }
  getPermissionAsync = async () => {
    if (Constants.platform.ios) {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== 'granted') {
        alert('Sorry, we need camera roll permissions to make this work!');
      }
    }
  };
  componentDidMount() {
    this.getPermissionAsync();
  }
  _toggleBottomNavigationView = () => {
    //Toggling the visibility state of the bottom sheet
    this.setState({ visible: !this.state.visible });
  };
  _pickImagefromCamera = async () => {

    try {
      let result = await ImagePicker.launchCameraAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
      if (!result.cancelled) {
        this.setState({ user:{...this.state.user, avatar:result.uri} });
      }

      console.log(result);
    } catch (E) {
      console.log(E);
    }
  };
  _pickImagefromGallery = async () => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
      if (!result.cancelled) {
        this.setState({ user:{...this.state.user, avatar:result.uri} });
      }

      console.log(result);
    } catch (E) {
      console.log(E);
    }
  }
  onSignupPress = async () => {
      if (!this.state.user.avatar) {
          return(
alert('user avatar cannot be as empty as like that')
          );
      }
    firebase
    .auth()
    .createUserWithEmailAndPassword(this.state.user.email, this.state.user.pass)
    .then((res) => {
        res.user.updateProfile({
          username: this.state.user.username,
          number:this.state.user.number,
          userPhoto:this.state.user.avatar
        })
        console.log('User registered successfully!')
        this.setState({user:null})
        this.props.navigation.navigate('signin')
      })
    .catch((error) => {
        alert(error)
});
    this.props.navigation.navigate('signup');
  }
  async componentDidMount() {
    await Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    })
    this.setState({ loading: false })
  }
  onloginpress = () => {
    this.props.navigation.navigate('signin');
  }
  render() {
    if (this.state.loading) {
      return (
        <Container></Container>
      );
    }
    return (
      <Container style={styles.screen}>
        <Content>
          <Card style={styles.card}>
          <Text style={{color:'white',fontSize:25,fontWeight:'bold',textAlign:'center'}}> SIGN UP </Text>

            <CardItem style={{ backgroundColor: '#0E043B' }}></CardItem>
            <Avatarr
              rounded
              size={200}
              onAccessoryPress={this._toggleBottomNavigationView}
              showAccessory
              source={{
                uri: this.state.user.avatar
              }}
              containerStyle={{ backgroundColor: "#2D4A76", justifyContent: "center", alignSelf: 'center',marginTop:10 }}
            />
            <BottomSheet
              visible={this.state.visible}
              //setting the visibility state of the bottom shee
              onBackButtonPress={this._toggleBottomNavigationView}
              //Toggling the visibility state on the click of the back botton
              onBackdropPress={this._toggleBottomNavigationView}
            //Toggling the visibility state on the clicking out side of the sheet
            >
              <CardItem style={styles.bottomNavigationView}>
                <View
                  style={{
                    flex: 1,
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                  }}>
                  <Text style={{ padding: 20, fontSize: 25, color: "white", fontWeight: 'bold' }}>
                    Select one
              </Text>
                  <Button onPress={this._pickImagefromCamera} style={{ backgroundColor: 'red',width:screenWidth-50,justifyContent:'center' }}>
                    <Text style={{ color: 'white',textAlign:"center" }}>turn on camera</Text>
                  </Button >

                  <Button onPress={this._pickImagefromGallery} style={{ backgroundColor: 'red', marginTop: 20,width:screenWidth-50,justifyContent:'center' }}>
                    <Text style={{ color: 'white',textAlign:'center' }}>open gallery</Text>
                  </Button>
                </View>
              </CardItem>
            </BottomSheet>
            <Form ref="form"  >
              <Item floatingLabel>
                <Label style={styles.fieldtitle} >Username</Label>
                <Input style={styles.fieldinput} onChangeText={(username) => this.setState({user:{...this.state.user,username}})} value={this.state.user.username} />
              </Item>

              <Item floatingLabel>
                <Label style={styles.fieldtitle} >Email Address</Label>
                <Input style={styles.fieldinput} onChangeText={(email) => this.setState({user:{...this.state.user,email}})} value={this.state.user.email} />
              </Item>
                  <Item floatingLabel>
                    <Label style={styles.fieldtitle} >Phone Number</Label>
                    <Input style={styles.fieldinput} onChangeText={(number) => this.setState({user:{...this.state.user,number}})} value={this.state.user.number}  />
               </Item>
                  
              <Item floatingLabel>
                <Label style={styles.fieldtitle}>Password</Label>
                <Input style={styles.fieldinput} onChangeText={(pass) => this.setState({user:{...this.state.user,pass}})} value={this.state.user.pass} />
              </Item>
              {this.state.errorm && <Text style={styles.error}>{this.state.errorm}</Text>}
              <Item stackedLabel style={styles.submission}>
                <Button style={styles.submit} onPress={this.onSignupPress} ><Text style={styles.submittext}>sign up</Text></Button>
              </Item>
              <Item style={styles.fieldtitl} >
                <Label style={styles.fieldtitle}> Already a user? </Label>
                <TouchableOpacity><Text style={styles.signup} onPress={this.onloginpress} >Sign in</Text></TouchableOpacity>
              </Item>
            </Form>
          </Card>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'black',
    textAlign: 'center',
  },
  logo: {
    width: 200,
    height: 200,
    alignSelf: "center",
  },
  card: {
    marginTop: 150,
    backgroundColor: 'black'
  },
  fieldtitle: {
    color: 'white',
  },
  fieldinput: {
    color: 'white'
  },
  submission: {
    marginTop: 15,
    borderColor: null,
  },
  submit: {
    backgroundColor: '#5F7',
    borderRadius: 26,
    width: 170,
    justifyContent: 'center',
    alignSelf:'center',
  },
  submittext: {
    color: 'black',
    textTransform: 'capitalize',
  },
  signup: {
    color: 'yellow',
    fontSize: 20
  },
  error: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: 24,
  },
  MainContainer: {
    flex: 1,
    margin: 2,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: Platform.OS === 'ios' ? 20 : 0,
    backgroundColor: '#E0F7FA',
  },
  bottomNavigationView: {
    backgroundColor: '#0E043B',
    width: '100%',
    height: 250,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 35
  },
});

