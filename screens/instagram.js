import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

export default class App extends instagram{
    render(){
        return(
            <View style={{alignItems:'center',
            justifyContent:"center", flex:1,}}>
                welcome to instagram

            </View>
    )
    }
}