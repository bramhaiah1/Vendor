import React, { useState,useEffect,useCallback } from "react";
import { View, Switch,TouchableOpacity,ActivityIndicator,FlatList,Alert,ScrollView, StyleSheet,Text,Image ,BackHandler,Dimensions} from "react-native";
import { withNavigation } from 'react-navigation';
import axios from "axios"
const { width: WIDTH, height: HEIGHT  } = Dimensions.get("window");
import {scale, verticalScale, moderateScale} from "./style"
import Modal from "./modal"
import AsyncStorage from '@react-native-community/async-storage';
import Service from "./service";
const App = (props) => {
  var data3=[];
  const [menu, setMenu] = useState([]);
  const [comment, setComment] = useState('');


  const [isLoaded, setIsLoaded] = useState(true);
 const  _keyExtractor = (item) => `product_${item.id}`;

 const _renderItem = ({item}) => (
  
  
    <Service item={ item } />
  );
   useEffect(() => {
    //loadDataOnlyOnce(); 
    const handler = BackHandler.addEventListener(
      'hardwareBackPress',
      handleValidateClose,
    );
    handleValidateClose1;
  
    fectchdata();
    setTimeout(() => {
      setIsLoaded(false);
    }, 3000);
    async function fectchdata(){
   const ID= await AsyncStorage.getItem("IDTOKEN1");
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

  console.log(JSON.stringify(response.data));
  //alert(JSON.stringify(response.data))
  var a=JSON.stringify(response.data[0].ID)
       // this.data3=response.data;
       setMenu(response.data);
//alert(menu)
      //  alert("deed"+this.data3)
 await AsyncStorage.setItem('id1', a);
})
.catch(function (error) {
  console.log(error);
});

    
    }
   // return () => handler.remove();
  }, [handleValidateClose]);
  const handleValidateClose1=useCallback(()=>{alert("aaa")})
  const handleValidateClose = useCallback(() => {
    console.log(comment);
    Alert.alert("Hold on!", "Are you sure you want Exit WhyWaitFix?", [
      {
        text: "Cancel",
        onPress: () => null,
        style: "cancel"
      },
      { text: "YES", onPress: () => BackHandler.exitApp() }
    ]);    return true;
  }, [comment]);
  const [isEnabled, setIsEnabled] = useState(false);
  const [isEnabled1, setIsEnabled1] = useState(false);

  const Logout = async() =>{ 
    const ID= await AsyncStorage.getItem("IDTOKEN1");
    var c='Bearer '
  var data1={
    "token":ID
  }
  
  var config = {
    method: 'get',
    url: 'http://staging.webdesigntexas.us/whywaitfix-jp/wp-json/custom-plugin/logout',
    headers: { 
      'Authorization': c+ID,
      'Cookie': 'wordpress_admin_logged_in=1'

    },
    
  };
  var a=JSON.stringify(config)
  //alert(a)
  axios(config)
  .then( async function (response) {
    await AsyncStorage.removeItem("IDTOKEN1");
    await AsyncStorage.removeItem("id1");
    console.log(JSON.stringify(response.data));
    Alert.alert("Hold on!","Sign out Sucess!!!", [
      
      { text: "OK", onPress: () =>     props.navigation.navigate("LoginScreen")
    }
    ]);
    
         
  })
  .catch(function (error) {
    console.log(error);
  });
  
      
    
   
    


    
  }
  const toggleSwitch = async() =>{ 
    
    try{
    var value =  await AsyncStorage.getItem('id1');
    
      if(!isEnabled){
   // alert("Online"+value)
//alert(value)
    axios.post("http://staging.webdesigntexas.us/whywaitfix-jp/wp-json/custom-plugin/single-post/?id="+value+"").then(async resp => { 
    var b=await JSON.stringify(resp.data.message)  
    alert(b)}).catch(error=>{
      alert(error)
    })

}else{
        alert("Offline")

    }
  
     }
      catch(exception){

        alert(exception)
      }
    
     setIsEnabled(previousState => !previousState)  
    }
      
  
  return (
<View style={{height:'100%',width:'100%', backgroundColor:'#fff'}}>
{
isLoaded? <Modal/>
:
    <View style={styles.container}>
          
         
        <ScrollView>
      <View style={{alignContent:"center",left:scale(20),top:verticalScale(10)}}>
     
       
      {isLoaded?null:<FlatList
               data={menu}
              // data={   [{ id: 1,name:"Plumbing"},{ id: 5,name:"Plumbing"},{ id: 6,name:"Plumbing"},{ id: 7,name:"Plumbing"},{ id: 2,name:"Electrical"},{ id: 3,name:"Carpentry"},{ id: 4,name:"Decorating"}]}
        
         style={{ flexGrow: 0 }}
         keyExtractor={ _keyExtractor }
         renderItem={ _renderItem }
        />}
      </View>
      </ScrollView>  
       <Image
        style={{
          height: "40%",
          width: "70%",
         alignItems:"center",
         left:scale(80),
         top:verticalScale(-70)
        }}
        source={require("../assets/why.png")}
      ></Image>
           <View style={{alignContent:"center",top:verticalScale(-80)}}>

       <TouchableOpacity  onPress={Logout}  style={{  width:verticalScale(500) ,left:scale(60) ,
  justifyContent: "center",borderRadius:10,
 backgroundColor:"#ffa500",height:verticalScale(100)}}>
        

        <Text style={styles.text}>SIGN OUT</Text>
      </TouchableOpacity>
      </View>
      </View>}


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    
  },
  btnLogin: {

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
  text: {
    color: "#fff",
    
    fontSize: 20,
    textAlign: "center",
    fontWeight: "bold",
  },
  
});

export default withNavigation(App);