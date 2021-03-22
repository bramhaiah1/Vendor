import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation'
import Login from'./Screens/Login'
import forgotPassword from'./Screens/Forgotpassword'
import Switch from'./Screens/switch'
import Modal from'./Screens/modal'
import loc from './Screens/loc'

const AppNavigator = createStackNavigator({
  LoginScreen: {
    screen: Login,
    navigationOptions: ({ navigation }) => ({      
    headerShown:false,
  }),
  
  },
  location: {
    screen: loc,
    navigationOptions: ({ navigation }) => ({      
    headerShown:false,
  }),},
  Modal1: {
    screen: Modal,
    navigationOptions: ({ navigation }) => ({      
    headerShown:false,
  }),},
  forgot: {
    screen:forgotPassword,
    navigationOptions: ({ navigation }) => ({
headerTitle:"FORGOT PASSWORD" , 
headerTintColor:"#fff" ,   
headerStyle: {
backgroundColor: '#ffa500'
},
    }),
  },
  switch: {
    screen:Switch,
    navigationOptions: ({  }) => ({
      headerTitleStyle: { 
        textAlign:"center", 
        flex:1 
    },
headerTitle:"Service Status" , 
headerTintColor:"#fff" ,  
headerLeft:"", 
headerStyle: {
backgroundColor: '#ffa500',

}
    }),
  },
  
})

const AppContainer = createAppContainer(AppNavigator);
export default AppContainer
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
