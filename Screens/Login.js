import React, {Component } from "react";
 import { Platform, StyleSheet, View, Text,  ImageBackground,ActivityIndicator, ScrollView,SafeAreaView,Dimensions,
 Image, TouchableOpacity, Alert } from 'react-native';
 import { FontAwesome } from "@expo/vector-icons";
 import { createStackNavigator, createAppContainer } from "react-navigation";
 const { width: WIDTH, height: HEIGHT  } = Dimensions.get("window");
 import {scale, verticalScale, moderateScale} from "./style"
 import AsyncStorage from '@react-native-community/async-storage';
import Modal from "./modal"

import axios from "axios"
 import { Avatar, Button, Card, Title, Paragraph,TextInput } from 'react-native-paper';

 export default class Myapp extends Component
{ 
   constructor(){  
     super();  
     this.state={  
     isVisible : true,
     hidePassword: false,
     loader:false,
     loading:true,
     Email:'',
     password:'' 
      }
 
  }  
  setPasswordVisibility = () => {
    this.setState({ hidePassword: !this.state.hidePassword });
}
   Hide_Splash_Screen=()=>{  
    this.setState({   
      isVisible : false   
    });  
  }  
   APICALL=async()=>{
    this.setState({ loader: true })

   var data= {
      "username": this.state.Email,//eve.holt@reqres.in
      "password":this.state.password//cityslicka
  }



  var config = {
    method: 'post',
    url: 'http://staging.webdesigntexas.us/whywaitfix-jp//wp-json/jwt-auth/v1/token',
    
    data : data
  };
  

     axios(config).then( async resp => {
 
  var a=JSON.stringify(resp.data.token)
//alert(a)
  await AsyncStorage.setItem('IDTOKEN1',resp.data.token);

    this.setState({   
      Email : ""  ,
      password:""
  
    });   
    this.setState({ loader: false })

   this.props.navigation.navigate("location")
    
  }).catch(error=>{
    this.setState({ loader: false })

    alert("Login credentials are not correct")
  })

  
 

    
  }

  async componentDidMount(){  

    
      const value = await AsyncStorage.getItem('IDTOKEN1');

      if (value !== null) {
        // We have data!!
       // alert(value);
        this.props.navigation.navigate("switch");


      } else {
        this.setState({ loading: false })

      }
    
    var that = this;  
    setTimeout(function(){  
      that.Hide_Splash_Screen();  
    }, 5000);  

   }  
   
    render()  
    {  
      
        let Splash_Screen = (  
             <View style={styles.SplashScreen_RootView}>  
                 <View style={styles.SplashScreen_ChildView}> 
                       <ImageBackground source={require("../assets/Capture.jpeg")}      style={{width:"100%", height: '100%', resizeMode:'stretch'}} />  
                </View>  
             </View> )  
             const screenHeight = Dimensions.get('window').height
         return(  
           
        
<View style={{height:'100%',width:'100%', backgroundColor:'#fff'}}>
{  
                  (this.state.isVisible === true) ? Splash_Screen :(this.state.loader)?<View style={{top:173,
                    alignItems: 'center',
                    justifyContent: 'center',}}>
                        <ActivityIndicator
                    animating={true}
                    color="blue"
                    size="large"
                    style={{margin: 1}}
                    /></View>:
                  <View style={styles.MainContainer}> 
                <ScrollView >

                   <Image source={require("../assets/Capture1.jpeg")}     
                    style={{ width:verticalScale(601),
                  height:verticalScale(350), resizeMode: 'contain'}} /> 
                  <Card style={styles.card}>
                 <View style={{alignItems:"center"}}>
                 <Image
        style={{

          height: verticalScale(250),
          width: verticalScale(250),
top:verticalScale(-10)
        }}
        source={require("../assets/why.png")}
      ></Image>
                 </View>
                 
      <View style={{top:verticalScale(-20)}}>
        
        <Text style={styles.phone}>Email</Text>
  
          <TextInput       
    textContentType="emailAddress"
            keyboardType="email-address"
            placeholder={""}
            value={this.state.Email}
            onChangeText={(text) => this.setState({ Email: text })}

            style={styles.textBox}
             />
                <Text style={styles.pass}>Password</Text>
  <View>
            <TextInput 
            onChangeText={(text) => this.setState({ password: text })}
            value={this.state.password}

            secureTextEntry={this.state.hidePassword} 
            style={styles.textBox1} />
              <View style={{top: verticalScale(-30),alignItems:"flex-end",marginLeft:scale(600),
      right:scale(70),
      elevation:10}} >
             <TouchableOpacity  onPress={this.setPasswordVisibility}>
            <FontAwesome name={(this.state.hidePassword)? 'eye' : 'eye-slash'} size={24} color="black" />
            </TouchableOpacity></View>
             </View>
           
             </View>
            
            
         
          <View style={styles.forgotPassword}>
          <TouchableOpacity style={styles.forgotPassword1}
            onPress={() => this.props.navigation.navigate("forgot")}
          >
            <Text >Forgot Password?</Text>
          </TouchableOpacity>
        </View>
        <View style={{alignItems:"center",top:verticalScale(70)}}> 
        <TouchableOpacity  style={{    justifyContent: "center",borderRadius:10,
 paddingRight:scale(90),paddingLeft:scale(90),backgroundColor:"#ffa500",height:verticalScale(100)}}
      
         onPress={this.APICALL}
  >
          <Text style={styles.text}>SIGN IN</Text>
        </TouchableOpacity></View>
       
  
                  </Card>
                  <Text style={styles.text}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            
              
            </Text>
            
           
                  </ScrollView>
              </View>      
                } 
               
            
        
          </View>
        
              
            
              );  
    }  
}  
 const styles = StyleSheet.create(  
{  
    MainContainer:  
    {         

        flex: 1, 
               



    },  
   
   
    SplashScreen_RootView:  
    {  
        justifyContent: 'center',  
        flex:1,  
          
        position: 'absolute',  
        width: '100%',  
        height: '100%',  

      },  
   
    SplashScreen_ChildView:  
    {  
       
        width: '100%',
        height: '100%',
    
    },  
  
  

    
    btneye: {
      top: verticalScale(-30),
      left:scale(220),
      elevation:10
    },
    btnLogin: {
     
      // backgroundColor: "#432577",
      backgroundColor:"#ffa500"  ,
          justifyContent: "center",
      marginTop: 30,
      borderRadius:10,
alignItems:"center"    ,
alignContent:"center",
      borderBottomWidth: 1,
      borderColor:"#fff",
      borderStyle: "solid",
      borderWidth: 2,
      width: 180,
    
      height: 50,
    },
    label1: {
        position: "absolute",
        marginTop:30,
        marginLeft:180,
      //color: "darkblue",
     alignItems:"flex-end"
  
  
    },
    
      text: {
        color: "#fff",
        fontSize: 20,
        textAlign: "center",
        fontWeight: "bold",
      },
   
    textBoxContainer: {
      position: 'relative',
      alignSelf: 'stretch',
      justifyContent: 'center',
    },
    card:{

      shadowColor: "#000",
      margin: "4%" ,
     top:verticalScale(-140),
      elevation:9,
      shadowOpacity: 0.12,
      shadowRadius: 30,
    
      height:"80%",

    },
    phone:{
      marginLeft:scale(35),
      fontSize:20,
      top:verticalScale(70),

color:"#ffa500"
    },
    pass:{
      marginLeft:scale(35),
      fontSize:20,
      top:verticalScale(70),
      color:"#ffa500"
    },
    textBox: {
      elevation: 6,
      paddingLeft:10,
      paddingRight:50,
      margin:scale(32),
      top:verticalScale(60),
  width:verticalScale(490),
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
     
    textBox1: {
      margin: scale(32) ,
      elevation: 6,
      paddingLeft:10,

      paddingRight:30,
      top:verticalScale(60),
  width:verticalScale(490),
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
    touachableButton: {
      position: 'absolute',
      right: 9,
      height: 40,
      width: 35,
      padding: 2,
      bottom:-70,
      shadowColor: '#000',
   shadowOffset: { width: 0, height: 2 },
   shadowOpacity: 0.5,
   shadowRadius: 2,
   elevation: 6,
     
    },
    
    label: {
      fontSize: 26,
      color: "#808080",
      fontWeight: "bold",
      right: -89,
      bottom: 40,
      position: "absolute",
    },
    forgotPassword1: {     

  },
  forgotPassword:{
    width: "100%",

    alignItems: "flex-end",
   top:verticalScale(20),
   right:scale(50)
  },
  scrollView: {
    height: '20%',
    width: '80%',
    margin: 20,
    alignSelf: 'center',
    padding: 20,
    borderWidth: 5,
    borderRadius: 5,
    borderColor: 'black',
    backgroundColor: 'lightblue'
  }, 
});