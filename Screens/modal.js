
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,ActivityIndicator } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation'
import { withNavigation } from 'react-navigation';
import React, { useState,useEffect } from "react";

const APP=(props)=> {
    useEffect(() => {

    setTimeout(function(){  
        props.navigation.navigate("switch");

      }, 5000);  
    })
  return (<View style={{top:173,
  alignItems: 'center',
  justifyContent: 'center',}}>
      <ActivityIndicator
  animating={true}
  color="blue"
  size="large"
  style={{margin: 1}}
  /></View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor:"black",
    justifyContent: 'center',
  },
});
export default withNavigation(APP)