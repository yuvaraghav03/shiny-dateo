
import React, { Component, useState } from 'react';
import { Image, StyleSheet, SafeAreaView, FlatList, Dimensions, Share, TextInput, ScrollView, ImageBackground } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Drawer, View, ListItem, Right, Radio, List, Title, ActionSheet, Item, Input, DeckSwiper } from 'native-base';
import * as Font from 'expo-font';
const { width: screenWidth, height: screenHeight } = Dimensions.get('window');
import { Ionicons, FontAwesome5, MaterialCommunityIcons, Feather, SimpleLineIcons, Octicons, Fontisto, FontAwesome, Entypo, AntDesign, EvilIcons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Avatar } from 'react-native-elements';
import { Col, Row, Grid } from 'react-native-easy-grid';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';
import { BottomSheet } from 'react-native-btr';
import * as firebase from 'firebase';
export default class ProfileComponent extends React.Component {
    constructor(props) {
        super(props);
    }
    state = {
        loading: true,
        search_bar_enabled: false,
        visible: false,
        Avatar:null,
    }

    async componentDidMount() {
        await Font.loadAsync({
            'Roboto': require('native-base/Fonts/Roboto.ttf'),
            'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
            ...Ionicons.font,
        })
        this.setState({ loading: false })
    }
    getPermissionAsync = async () => {
        if (Constants.platform.android) {
          const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
          if (status !== 'granted') {
            alert('Sorry, we need camera roll permissions to make this work!');
          }
        }
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
            this.setState({Avatar:result.uri});
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
            this.setState({ Avatar:result.uri });
          }
    
          console.log(result);
        } catch (E) {
          console.log(E);
        }
      }
    toggling = () => {
        this.setState({ search_bar_enabled: !this.state.search_bar_enabled });
    }
    _toggleBottomNavigationView = () => {
        //Toggling the visibility state of the bottom sheet
        this.setState({ visible: !this.state.visible });
    };

    render() {
        if (this.state.loading) {
            return (
                <Container></Container>
            );
        }
        return (
            <Container style={{ backgroundColor: 'black' }}>
                <View>
                    {this.state.search_bar_enabled == false ? (
                        <>
                            <Header style={{ backgroundColor: 'red' }}>
                                <Left>
                                    <Button transparent onPress={() => this.props.navigation.navigate('Home')}>
                                        <Icon name='home' type='FontAwesome' />
                                    </Button>
                                </Left>
                                <Body style={{ justifyContent: 'center', alignSelf: 'center', alignContent: 'center', alignItems: 'center' }}>
                                    <Title>My profile</Title>
                                </Body>
                                <Right>
                                    <Button transparent onPress={this.toggling} >
                                        <Icon name='search' />
                                    </Button>
                                    <Button transparent >
                                        <Icon name='share' />
                                    </Button>
                                    <Button transparent onPress={this._toggleBottomNavigationView}>
                                        <Icon name='plus' type='AntDesign' color='white' />
                                    </Button>
                                </Right>
                            </Header>
                        </>

                    ) : (
                            <Header searchBar rounded style={{ backgroundColor: '#221f3b' }}>
                                <Item>
                                    <Icon name="ios-search" />
                                    <Input placeholder="What you are looking for?" clearButtonMode='always'
                                        onChangeText={this.search} value={this.state.searchText} autoCapitalize='none' autoCorrect={false} />
                                    <Button transparent enable={this.state.enable} onPress={this.toggling}>
                                        <Entypo name="cross" size={26} color="black" />
                                    </Button>
                                </Item>
                                <Button transparent>
                                    <Text>Search</Text>
                                </Button>
                            </Header>
                        )
                    }
                </View>

                <ScrollView style={{ flex: 1 }}>
                    <ImageBackground source={{ uri: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.0mLf8E6P9v9qKhRs6O04XwHaEK%26pid%3DApi&f=1' }} style={{ width: screenWidth, height: 300, flex: 0.2 }} >
                        <Text style={{ position: 'absolute', fontSize: 25, fontWeight: 'bold', fontStyle: 'italic', color: 're' }}>Wim kelly</Text>
                    </ImageBackground>
                    <View style={{ flex: 0.8 }}>
                        <Text style={{ color: 'white', fontSize: 25, fontWeight: 'bold' }}>My photos</Text>
                        <Grid>
                            <Col style={{ margin: 5 }}>
                                <Row style={{ margin: 2 }}>
                                    <Image source={{ uri: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.Lz3Q4C53d66NeJxn9TSuVgHaLH%26pid%3DApi&f=1' }} style={{ width: "100%", height: 300, }} />
                                </Row>
                                <Row style={{ margin: 2 }}>
                                    <Image source={{ uri: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.8DSw8EXOFvGjzzOAVc7gsAHaNK%26pid%3DApi&f=1' }} style={{ width: "100%", height: 300, }} />
                                </Row>
                            </Col>
                            <Col style={{ margin: 5, }}>
                                <Row style={{ margin: 2 }}>
                                    <Image source={{ uri: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.BCeKJOsE4wPlYrBbu7D0dQHaKe%26pid%3DApi&f=1' }} style={{ width: "100%", height: "100%", }} />
                                </Row>
                                <Row style={{ margin: 2 }}>
                                    <Image source={{ uri: this.state.Avatar }} style={{ width: "100%", height: '100%', }} />
                                </Row>
                            </Col>

                        </Grid>
                    </View>

                </ScrollView>
                <View style={{ backgroundColor: 'red', }}>
                    <ListItem style={{ alignSelf: 'center' }}>
                        <Button style={{ alignSelf: 'center', justifyContent: 'center', alignContent: 'center' }} onPress={()=>{
                             firebase.auth().signOut();
                        }} >
                            <Text style={{ color: 'white', fontSize: 20, textAlign: 'center', textTransform: 'capitalize' }}> Logout </Text>
                        </Button>
                    </ListItem>
                    <View >
                        <ListItem style={{ flexDirection: "row", margin: 5 }}>
                            <Left>
                                <FontAwesome name="user-secret" size={24} color="white" style={{ margin: 5 }} />
                                <Text style={{ color: 'white' }}>Account Details</Text>
                            </Left>



                            <Right>
                                <AntDesign name="rightcircle" size={24} color="white" />
                            </Right>
                        </ListItem>
                        
                        <ListItem style={{ flexDirection: "row", margin: 5 }}>

                            <Left>
                            <Button transparent onPress={()=>this.props.navigation.navigate('settings')}>
                                <Feather name="settings" size={24} color="white" style={{ margin: 5 }} />
                                <Text style={{ color: 'white' ,textTransform:'capitalize'}}>Settings</Text>
                              </Button>
                            </Left>



                            <Right>
                            <Button transparent onPress={()=>this.props.navigation.navigate('settings')}>

                                <AntDesign name="rightcircle" size={24} color="white" />
                                </Button>
                            </Right>
                           
                        </ListItem>
                      
                        <ListItem style={{ flexDirection: "row", margin: 5 }}>
                            <Left>
                                <SimpleLineIcons name="call-out" size={24} color="white" style={{ margin: 5 }} />
                                <Text style={{ color: 'white' }}>Contact</Text>
                            </Left>



                            <Right>
                                <AntDesign name="rightcircle" size={24} color="white" />
                            </Right>
                        </ListItem>
                    </View>
                </View>
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
                            <Button onPress={this._pickImagefromCamera} style={{ backgroundColor: 'red', width: screenWidth - 50, justifyContent: 'center' }}>
                                <Text style={{ color: 'white', textAlign: "center" }}>turn on camera</Text>
                            </Button >

                            <Button onPress={this._pickImagefromGallery} style={{ backgroundColor: 'red', marginTop: 20, width: screenWidth - 50, justifyContent: 'center' }}>
                                <Text style={{ color: 'white', textAlign: 'center' }}>open gallery</Text>
                            </Button>
                        </View>
                    </CardItem>
                </BottomSheet>
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

