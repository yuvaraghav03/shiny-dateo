import StepIndicator from 'react-native-step-indicator';
import React, { Component, useState } from 'react';
import { Image, StyleSheet, SafeAreaView, FlatList, Dimensions, Share, TouchableOpacity, Alert } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Drawer, View, ListItem, Right, Radio, List, Title, ActionSheet, Item, Input } from 'native-base';
import * as Font from 'expo-font';
import { ScrollView } from 'react-native-gesture-handler';
import Display from 'react-native-display';
const { width: screenWidth } = Dimensions.get('window');
import { Ionicons, FontAwesome5, MaterialCommunityIcons, Feather, SimpleLineIcons, Octicons, Fontisto, FontAwesome, Entypo, AntDesign } from '@expo/vector-icons';
import {
    Avatar,
    TouchableRipple,
    Switch
} from 'react-native-paper';
import SettingsList from 'react-native-settings-list';

export default class Settings extends React.Component {
    constructor() {
        super();
        this.onValueChange = this.onValueChange.bind(this);
        this.state = { switchValue: false };
    }
    render() {
        var bgColor = 'red';
        return (
            <View style={{ backgroundColor: 'black', flex: 1 }}>
                <View style={{ borderBottomWidth: 1, backgroundColor: 'red', borderColor: '#c8c7cc' }}>
                    <Text style={{ alignSelf: 'center', marginTop: 30, marginBottom: 10, fontWeight: 'bold', fontSize: 20, color: 'white' }}>Settings</Text>
                </View>
                <View style={{ backgroundColor: '#EFEFF4', flex: 1 }}>
                    <SettingsList borderColor='#c8c7cc' defaultItemSize={50}>
                        <SettingsList.Header headerStyle={{ marginTop: 15, margin: 10 }} headerText='Discovery' />
                        <SettingsList.Item
                            icon={
                                <Icon name='eye' color='red' style={{ color: 'white', margin: 10, backgroundColor: 'blue', padding: 4 }} />
                            }
                            hasSwitch={true}
                            switchState={this.state.switchValue}
                            switchOnValueChange={this.onValueChange}
                            hasNavArrow={false}
                            title='Show me on tinder'
                        />

                        <SettingsList.Header headerStyle={{ marginTop: 15, padding: 10 }} headerText='Push Notifications' />
                        <SettingsList.Item
                            icon={
                                <Icon name='new' color='red' style={{ color: 'white', margin: 10, backgroundColor: 'green', padding: 4 }} type='Entypo' />
                            }
                            hasSwitch={true}
                            switchState={this.state.switchValue}
                            switchOnValueChange={this.onValueChange}
                            hasNavArrow={false}
                            title='New Matches'
                            onPress={() => Alert.alert('Route To Notifications Page')}
                        />
                        <SettingsList.Item
                            icon={
                                <Icon name='chat' color='red' style={{ color: 'white', margin: 10, backgroundColor: 'red', padding: 4 }} type='Entypo' />
                            }
                            hasSwitch={true}
                            switchState={this.state.switchValue}
                            switchOnValueChange={this.onValueChange}
                            hasNavArrow={false}
                            title='Messages'
                            onPress={() => Alert.alert('Route To Control Center Page')}
                        />
                        <SettingsList.Item
                            icon={
                                <Icon name='heart' color='red' style={{ color: 'white', margin: 10, backgroundColor: 'orange', padding: 4 }} type='Entypo' />
                            }
                            hasSwitch={true}
                            switchState={this.state.switchValue}
                            switchOnValueChange={this.onValueChange}
                            hasNavArrow={false}
                            title='Super likes'
                            onPress={() => Alert.alert('Route To Do Not Disturb Page')}
                        />
                        <SettingsList.Item
                            icon={
                                <Icon name='trending-up' color='red' style={{ color: 'white', margin: 10, backgroundColor: 'black', padding: 4 }} type='Feather' />
                            }
                            hasSwitch={true}
                            switchState={this.state.switchValue}
                            switchOnValueChange={this.onValueChange}
                            hasNavArrow={false}
                            title='Top Likes'
                            onPress={() => Alert.alert('Route To Do Not Disturb Page')}
                        />
                        <SettingsList.Header headerStyle={{ marginTop: 15, padding: 10 }} headerText='Gender' />
                        <SettingsList.Item

                            icon={
                                <Icon name='male' color='red' style={{ color: 'white', margin: 10, backgroundColor: '#6D4B73', padding: 4 }} type='FontAwesome' />
                            }
                            hasSwitch={false}
                            switchState={this.state.switchValue}
                            switchOnValueChange={this.onValueChange}
                            hasNavArrow={false}
                            title='Male'
                            onPress={() => Alert.alert('Route To General Page')}
                        />
                        <SettingsList.Item
                            icon={
                                <Icon name='female' color='red' style={{ color: 'white', margin: 10, backgroundColor: '#6A6010', padding: 4 }} type='FontAwesome' />
                            }
                          
                            switchState={this.state.switchValue}
                            switchOnValueChange={this.onValueChange}
                            hasNavArrow={false}
                            title='Female'
                            onPress={() => Alert.alert('Route To Display Page')}
                        />
                        <SettingsList.Header headerStyle={{ marginTop: 15, padding: 10 }} headerText='Maximum Distance' />
                        <SettingsList.Item

                            title='Support'
                            onPress={() => Alert.alert('Route To General Page')}
                        />
                        <SettingsList.Item

                            title='Privacy Policy'
                            onPress={() => Alert.alert('Route To Display Page')}
                        />
                    </SettingsList>
                </View>
            </View>
        );
    }
    onValueChange(value) {
        this.setState({ switchValue: value });
    }

}
const styles = StyleSheet.create({
    Container: {
        backgroundColor: 'black'
    }
});

