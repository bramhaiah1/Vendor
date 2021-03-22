import React, { useState,useEffect } from "react";
import { View, Switch, StyleSheet,Text,ActivityIndicator } from "react-native";
import {scale, verticalScale, moderateScale} from "./style"
import { withNavigation } from 'react-navigation';
import AsyncStorage from '@react-native-community/async-storage';

import axios from 'axios'

const App = (props) => {
  const [isEnabled1, setIsEnabled1] = useState(true);
  const [ID2,setID] = useState({ value: "", error: "" });
  useEffect(() => {
    if(isEnabled1)
    {
    if(item.post_status==='publish'){
      
         setIsEnabled(true);
    
       }}
  })
  const [loader, setloader1] = useState(true);

  const [isEnabled, setIsEnabled] = useState(false);
  // const [geolocation_lat, geolocation_lat1] = useState({ value: "", error: "" });
  // const [geolocation_long, geolocation_long1] = useState({ value: "", error: "" });
  // const [geolocation_formatted_address, geolocation_formatted_address1] = useState({ value: "", error: "" });
  // const [geolocation_street_number, geolocation_street_number1] = useState({ value: "", error: "" });
  // const [ geolocation_street, geolocation_street1] = useState({ value: "", error: "" });
  // const [geolocation_city, geolocation_city1] = useState({ value: "", error: "" });
  // const [geolocation_state_short, geolocation_state_short1] = useState({ value: "", error: "" });
  // const [geolocation_state_long, geolocation_state_long1] = useState({ value: "", error: "" });
  // const [geolocation_postcode, geolocation_postcode1] = useState({ value: "", error: "" });
  // const [geolocation_country_short, geolocation_country_short1] = useState({ value: "", error: "" });
  // const [geolocation_country_long, geolocation_country_long1] = useState({ value: "", error: "" });
  // const [geolocated,geolocated1] = useState({ value: "", error: "" });
  // const [_job_location,_job_location1] = useState({ value: "", error: "" });
  


  
   
 
  const { item } = props;
  
const a=JSON.stringify(item)
const toggleSwitch = async(props) =>{ 
  setloader1(true)
  setID({ value: item.ID, error: "" })  
 // alert(ID2.value)
  const ID= await AsyncStorage.getItem("IDTOKEN1");
  //alert(loader)

  navigator.geolocation.getCurrentPosition(
    position => {
        const latitude = JSON.stringify(position.coords.latitude);
        const longitude = JSON.stringify(position.coords.longitude);
        var Api="AIzaSyDsUWTPe8w0XzwTwAVuINAEkrAnRMP4Z-c";

        fetch('https://maps.googleapis.com/maps/api/geocode/json?address=' + position.coords.latitude + ',' + position.coords.longitude + '&key=' + Api)
        .then(async(response) => response.json())
        .then(async(responseJson) => {
          
           //geolocation_lat1({ value: latitude, error: "" })
           //geolocation_long1({ value: longitude, error: "" })
          // geolocation_formatted_address1({ value: responseJson.results[0].formatted_address, error: "" })
          // geolocation_street_number1({ value: '2', error: "" })
         //  geolocation_street1({ value: responseJson.results[0].address_components[0].long_name, error: "" })
         //  geolocation_city1({ value: responseJson.results[0].address_components[1].long_name, error: "" })
           //geolocation_state_short1({ value: responseJson.results[0].address_components[3].short_name, error: "" })
        //   geolocation_state_long1({ value: responseJson.results[0].address_components[3].long_name, error: "" })
          // geolocation_postcode1({ value: responseJson.results[1].address_components[0].long_name, error: "" })
         //  geolocation_country_short1({ value: responseJson.results[1].address_components[3].short_name, error: "" })
           //geolocation_country_long1({ value: responseJson.results[1].address_components[3].long_name, error: "" })
          // geolocated1({ value: '1', error: "" })
         //  _job_location1({ value: responseJson.results[0].formatted_address, error: "" })
 
           try{
   
            var value =JSON.stringify(item.ID)
            var c='Bearer '
          var data1={
            "token":ID
          }
          var data={
            "geolocation_lat": latitude,   
          
             "geolocation_long": longitude,
             "geolocation_formatted_address": responseJson.results[0].formatted_address,
             "geolocation_street_number": "1",
             "geolocation_street":responseJson.results[0].address_components[0].long_name,
             "geolocation_city":responseJson.results[0].address_components[1].long_name,
             "geolocation_state_short":responseJson.results[0].address_components[3].short_name,
             "geolocation_state_long":responseJson.results[0].address_components[3].long_name,
             "geolocation_postcode":responseJson.results[1].address_components[0].long_name,
             "geolocation_country_short": responseJson.results[1].address_components[3].short_name,
             "geolocation_country_long":responseJson.results[1].address_components[3].long_name,
             "geolocated":"2",
             "_job_location":responseJson.results[0].formatted_address,
             "post_id":value
          
          
          }
          console.log(JSON.stringify(data))
          var config = {
            method: 'post',
            url: "http://staging.webdesigntexas.us/whywaitfix-jp/wp-json/custom-plugin/update-address/",
              headers: { 
              'Cookie': 'wordpress_admin_logged_in=1', 
            },
            data : data
          };
          
            //alert(value)
          //    if(!isEnabled){
           // alert("Online"+value)
          //alert(value)
          axios(config)
          .then( async function (response) {
          
           // alert(JSON.stringify(response.data));
          
            
            var c='Bearer '
          var data1={
            "token":ID
          }
          var data={id:value}
          var config = {
            method: 'post',
            url: 'http://staging.webdesigntexas.us/whywaitfix-jp/wp-json/custom-plugin/single-post/',
            headers: { 
              'Authorization': c+ID
            },
            data : data
          };
          
            //alert(value)
          //    if(!isEnabled){
           // alert("Online"+value)
          //alert(value)
          axios(config)
          .then( async function (response) {
            var c='Bearer '
          var data1={
            "token":ID
          }
          var data=''
          var config = {
            method: 'post',
            url: 'http://staging.webdesigntexas.us/whywaitfix-jp/wp-json/custom-plugin/post/',
            headers: { 
              'Authorization': c+ID
            },
            data : data
          };
          var a=JSON.stringify(config)
          //alert(a)
          axios(config)
          .then( async function (response) {
          
            //console.log(JSON.stringify(response.data));
            //alert(JSON.stringify(response.data))
            var a=JSON.stringify(response.data)
            for (const item1 of response.data) {
              if (item1.ID === item.ID) {
              //  alert(item1.post_status)
                setIsEnabled1(false)
                setloader1(false)

          if(item1.post_status==="publish"){
            setIsEnabled(true);
          
          }else{
            setIsEnabled(false);
          
          }
          
               // return item.link;
              }
            }
            
           // alert(a)
                 // this.data3=response.data;
                 //setMenu(response.data);
          //alert(menu)
                //  alert("deed"+this.data3)
           //await AsyncStorage.setItem('id1', a);
          })
          .catch(function (error) {
            console.log(error);
            setloader(false)
          });
          })
                 // this.data3=response.data;
                 //setMenu(response.data);
                 //alert(a)
                //  alert("deed"+this.data3)
           //await AsyncStorage.setItem('id1', a);
          })
          .catch(function (error) {
            setloader(false)

            console.log(error);
          });
          
          
              
             }
              catch(exception){
                setloader(false)

                alert(exception)
              }
            



})
       
    },
    error => Alert.alert(error.message),
    { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
);
setloader(false)

  }
 
 
  return (
    <View style={styles.container}>
        {
            a==='{}'? <View style={{alignContent:"center",alignItems:"center" ,top:scale(-10)}}>
                <Text style={{color:"#ffa500", fontSize: 20,textAlign:"left",
          fontWeight: "bold",}}>No Service List Added Yet</Text>
            </View>:<View >
            {
              (ID2.value===item.ID&&loader)?<View style={{top:scale(25),right:scale(40),
                    alignItems: 'flex-end',
                    justifyContent: 'center',}}>
                        <ActivityIndicator
                    animating={true}
                    color="blue"
                    size="large"
                    style={{margin: 1}}
                    /></View>:<View><Switch   style=      {{right:verticalScale(20),top:scale(20)}}
      
      
              trackColor={{ false: "#767577", true: "#81b0ff" }}
              thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
              ios_backgroundColor="#3e3e3e"
              onValueChange={toggleSwitch}
              value={isEnabled}
            /></View>}
             <Text style={{color:"#ffa500", fontSize: 20,textAlign:"left",top:scale(-30),
          fontWeight: "bold",paddingRight:verticalScale(120)}}>{item.post_name}</Text>
          </View>
          
        }
       </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

export default App;