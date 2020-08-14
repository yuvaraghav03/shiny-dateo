
import React, { Component, useState } from 'react';
import { Image, StyleSheet, SafeAreaView, FlatList, Dimensions,  TextInput, ScrollView, ImageBackground, } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Drawer, View, ListItem, Right, Radio, List, Title, ActionSheet, Item, Input, DeckSwiper } from 'native-base';
import * as Font from 'expo-font';
const { width: screenWidth, height: screenHeight } = Dimensions.get('window');
import { Ionicons, FontAwesome5, MaterialCommunityIcons, Feather, SimpleLineIcons, Octicons, Fontisto, FontAwesome, Entypo, AntDesign, EvilIcons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Avatar } from 'react-native-elements';
import * as Linking from 'expo-linking';
console.disableYellowBox = true;
const cards = [
    {
        Name: 'Gasto Glay',
        Education: "University of San Fransisco",
        id: '1',
        image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.rHOFOV_uuVcfZ7tFq5FUiwHaFj%26pid%3DApi&f=1",
        location: '5 miles away'
    },
    {
        Name: 'Mary 24',
        Education: "Stanford University",
        image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.jGzUYBpufxx8KNJm-Gi7qgHaEK%26pid%3DApi&f=1",
        location: '8 miles away',
        id: '2',
    },
    {
        Name: 'Anna ',
        Education: "University of Hilarious",
        image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.lQIFNTT6jrwCDbCixMQ8tQHaLG%26pid%3DApi&f=1",
        location: '3 miles away',
        id: '3',
    },
    {
        Name: 'Binny hadge',
        Education: "University of Natuive",
        image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.explicit.bing.net%2Fth%3Fid%3DOIP.sN6RYdTcJKuatC942eUb-QHaLH%26pid%3DApi&f=1",
        location: '7 miles away',
        id: '4',
    },
    {
        Name: 'Ria glastoke',
        Education: "University of Clayius",
        image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.mVqCZb4qkArxR9LAN9bKQwHaG7%26pid%3DApi&f=1",
        location: '6 miles away',
        id: '5',
    },
];
export default class HomeComponent extends React.Component {
    constructor(props) {
        super(props);
    }
    state = {
        loading: true,
        search_bar_enabled: false,
        isPressed: false,
        data: null,
        indexnum: null,
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
    rendering({ Name, image, Education, location, }) {
        return (
            <ScrollView>
                <Card style={{ elevation: 3, borderRadius: 100, marginTop: 10, borderColor: 'yellow' }} onPress={() => {
                    this.setState({data:this.state.data[this.state.indexnum].index})

                }}>
                    <CardItem cardBody style={{ borderRadius: 50 }}>
                        <ImageBackground style={{ height: screenHeight - 200, flex: 0.8, width: screenWidth }} source={{ uri: image }} >
                            <View style={{ position: 'absolute', bottom: 20 }}>
                                <Text style={{ color: 'white', fontSize: 25, fontStyle: "italic", }}> {Name} </Text>
                                <View style={{ flexDirection: 'row', margin: 10 }}>
                                    <FontAwesome5 name="user-graduate" size={22} color="white" />
                                    <Text style={{ color: 'white', fontSize: 16, fontStyle: "italic", textAlign: 'center' }}> {Education} </Text>
                                </View>
                                <View style={{ flexDirection: 'row', margin: 5 }}>
                                    <EvilIcons name="location" size={26} color="white" />
                                    <Text style={{ color: 'white', fontSize: 16, fontStyle: "italic", textAlign: 'center' }}> {location} </Text>
                                </View>
                            </View>
                        </ImageBackground>
                    </CardItem>
                    <CardItem style={{ backgroundColor: 'black' }}>
                        <Left>
                            <TouchableOpacity>
                                <Avatar rounded icon={{ name: 'eye', color: 'black',type:'font-awesome' }} size={80} iconStyle={{ color: 'black' }}
                                    overlayContainerStyle={{ backgroundColor: 'red' }} containerStyle={{ flex: 2, marginLeft: 20, backgroundColor: 'red' }}>
                                </Avatar>
                            </TouchableOpacity>

                        </Left>
                        <Left>
                            <TouchableOpacity >
                                <Avatar rounded icon={{ name: 'share', color: 'black', type: 'font-awesome' }} size={80} iconStyle={{ color: 'black' }}
                                    overlayContainerStyle={{ backgroundColor: 'red' }} containerStyle={{ flex: 2, marginLeft: 20, backgroundColor: 'red' }}></Avatar>
                            </TouchableOpacity>
                        </Left>

                        <Left>

                            <TouchableOpacity>

                                <Avatar rounded icon={{ name: 'heart', color: 'black', type: 'font-awesome' }} size={80}
                                    iconStyle={{ color: 'black' }} overlayContainerStyle={{ backgroundColor: 'red' }}
                                    containerStyle={{ flex: 2, marginLeft: 20, backgroundColor: 'red' }}
                                ></Avatar>
                            </TouchableOpacity>
                        </Left>





                    </CardItem>
                </Card>
            </ScrollView>
        );
    }
    async componentDidMount() {
        await Font.loadAsync({
            'Roboto': require('native-base/Fonts/Roboto.ttf'),
            'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
            ...Ionicons.font,
        })
        this.setState({ loading: false })
    }
    toggling = () => {
        this.setState({ search_bar_enabled: !this.state.search_bar_enabled });
    }
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
                                    <Button transparent onPress={() => this.props.navigation.navigate('profile')} >
                                        <Icon name='user-circle-o' type='FontAwesome' />
                                    </Button>
                                </Left>
                                <Body style={{ justifyContent: 'center', alignSelf: 'center', alignContent: 'center', alignItems: 'center' }}>
                                    <Title>Date Me</Title>
                                </Body>
                                <Right>
                                    <Button transparent onPress={this.toggling} >
                                        <Icon name='search' />
                                    </Button>
                                    <Button transparent >
                                        <Icon name='share' />
                                    </Button>
                                    <Button transparent >
                                        <Icon name="android-messages" type='MaterialCommunityIcons' color='white' onPress={()=>this.props.navigation.navigate('message')} />
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

                <DeckSwiper
                    ref={(c) => this._deckSwiper = c}
                    dataSource={cards}
                    keyExtractor={item => item.id}
                    key={index => {
                        this.setState({ indexnum: index })
                    }}
                    renderItem={this.rendering}
                    extraData={this.state.indexnum}
                />
            </Container>
        );

    }
}

const styles = StyleSheet.create({

});