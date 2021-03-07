import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import instagram from "./sreen/instagram"
import facebook from "./sreen/facebook"
import {createAppContainer} from "react-navigation"
import {createBottomTabNavigator} from "react-navigation-Tabs"


render(){
    return(<AppContainer/>)
}

const AppContainer=createAppContainer({
facebookScreen:facebook,instagramScreen:instagram
})

const BottomTabNavigator=createBottomTabNavigator(BottomTabNavigator)