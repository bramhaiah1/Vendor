import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  Image,
  TextInput
} from "react-native";
import {scale, verticalScale, moderateScale} from "./style"

// import { TextInput } from 'react-native-gesture-handler';
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
const { width: WIDTH } = Dimensions.get("window");
import { FontAwesome } from "@expo/vector-icons";
import { Component } from "react";

const LoginScreen = ({ errorText, navigation, ...props }) => {
  const [show, setshow] = React.useState(false);
  const [visible, setVisible] = React.useState(true)
  const [email, setEmail] = useState({ value: "", error: "" });
  const [password, setPassword] = useState({ value: "", error: "" });
  const [name, setName] = useState({ value: "", error: "" });
  //const [press, showPass] = useState(true);




  const _onSignUpPressed = async () => {
    navigation.navigate("product")

    
  };





  return (
    <View style={styles.container}>
      <Image
        style={{
          height: "50%",
          width: "70%",
         alignItems:"center",
         left:scale(80),
         top:verticalScale(90)
        }}
        source={require("../assets/forgot.jpg")}
      ></Image>
            <Text style={styles.phone1}>Enter Email</Text>
            <View >
            <TextInput       
  textContentType="emailAddress"
          keyboardType="email-address"
          placeholder={""}
          style={styles.textBox} /></View>
    
    <View style={{alignContent:"center",top:verticalScale(80)}}>

<TouchableOpacity    style={{  width:verticalScale(500) ,left:scale(60) ,
justifyContent: "center",borderRadius:10,
backgroundColor:"#ffa500",height:verticalScale(100)}}>
 

 <Text style={styles.text}>RESET PASSWORD</Text>
</TouchableOpacity>
</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  phone1:{
    marginLeft:scale(29),
    fontSize:20,
    top:verticalScale(60),

color:"#ffa500"
  },
  textBox: {
    margin: "3%" ,
    elevation: 6,
    paddingLeft:20,

    paddingRight:50,
    top:verticalScale(60),
width:verticalScale(570),
    fontSize: 22,
    height: verticalScale(80),
    backgroundColor: '#fff',
  // backgroundColor:"#FFFF",
borderRadius:10,
  color: 'black',
  borderColor:"#fff",
  borderBottomWidth : 2,
  borderBottomColor:"#ffa500",
  fontSize:20
  },
  
  
 
  btneye: {
    position: "absolute",
    top: 20,
    right: 37,
  },
  btnLogin: {
    margin: "3%" ,

    // backgroundColor: "#432577",
    backgroundColor:"#ffa500"  ,
        justifyContent: "center",
    marginTop: 30,
    borderRadius:10,
    top: 80,
    borderBottomWidth: 1,
    borderColor:"#fff",
    borderStyle: "solid",
    borderWidth: 2,
    width: "95%",
  
    height: 50,
  },
  
  label1: {
      position: "absolute",
      marginTop:30,
      marginLeft:180,
    //color: "darkblue",
   alignItems:"flex-end"


  },
  phone:{
    marginLeft:15,
fontSize:20,
    top:66,
color:"#ffa500"
  },
  label1: {
      position: "absolute",
      marginTop:30,
      marginLeft:180,
    color: "darkblue",
   alignItems:"flex-end"


  },
  text: {
    color: "#fff",
    
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",
  },
  
  label: {
    fontSize: 26,
    color: "#ffff",
    fontWeight: "bold",
    right: -89,
    bottom: 40,
    position: "absolute",
  },
  container2: {
    fontSize: 30,
    bottom: 280,
    position: "absolute",
  },
  textlabel: {
    position: "absolute",
    alignItems:"center",
    left:115,
    fontFamily: "sans-serif",

  },
  forgotPassword: {
    width: "100%",
    alignItems: "flex-end",
    marginBottom: 24,
    top: -25,
    right: 10
  },
});
export default LoginScreen;
