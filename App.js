import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Welcome from './screen/welcome';
import Notified from './screen/Notified';
import Send_photos from './screen/sendphotos';
import Chat_privately from './screen/chat'
import Login from './auth/login';
import Signup from './auth/signup';
import HomeComponent from './Dashboard/Home';
import ProfileComponent from './Dashboard/Profile';
import Settings from './Dashboard/settings';
import * as firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';
import { Example } from './Dashboard/Message';

const stack = createStackNavigator();
export default class App extends React.Component{
  constructor(props){
    super(props);
    this.state={loading:true,user:null}
  }
  Welcomecomponent=()=>{
    return(
      <stack.Navigator headerMode="none" initialRouteName='welcome'>
      <stack.Screen name="welcome" component={Welcome} />
        <stack.Screen name="notified" component={Notified} />
        <stack.Screen name="send" component={Send_photos} />
        <stack.Screen name="chat" component={Chat_privately} />
        <stack.Screen name="signin" component={Login} />
        <stack.Screen name="signup" component={Signup} />
      </stack.Navigator>
    );
  }
  Homecomponent=()=>{
    return(
<stack.Navigator headerMode="none" >
  <stack.Screen name="Home"  component={HomeComponent} />
  <stack.Screen name="profile"  component={ProfileComponent} />
  <stack.Screen name='settings' component={Settings} />
  <stack.Screen name='message' component={Example} />
</stack.Navigator>
    );
  }
  render(){
    if (this.state.loading) {	
      return (	
        <>
       
        </>	
      )	
    }
    return(
<NavigationContainer>

  <stack.Navigator headerMode="none">
  {this.state. user!=null ? (
      <stack.Screen name="homecomponent" component={this.Homecomponent} />
  
  ):(
<stack.Screen name="welcomecomponent" component={this.Welcomecomponent} />
  )
  }
  </stack.Navigator>
</NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({

});
