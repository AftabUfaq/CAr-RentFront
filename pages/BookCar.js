import * as React from 'react';
import { Text, View, TouchableOpacity,TextInput, Image, ScrollView, Dimensions } from "react-native";

import { styles } from "../style";


export default function BookthisCar({ navigation, route }) {
  let item = route.params.item
 
  const [packages , setPackages] = React.useState([])
  const [dataandtime , setDateAndTIME] = React.useState("")
  React.useEffect(() => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  };

    fetch("https://rentacarmobileapp.herokuapp.com/packages", requestOptions)
      .then(response => response.json())
      .then(result => {   if(result.status){
            setPackages(result.data)
          }else{
            alert("Error in Geting Packges")
          }
      })
      .catch(error => {
        alert("Error in Geting Packges")
      });
  },[])

  const BookingCar = (item2) => {
    if(dataandtime.length === 0){
      alert("Enter Date and Time")
      return
    }
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    var raw = JSON.stringify({
      "packageid":item2._id,
      "userid": "627fdeefef18466f790991d8",
      "car_owner_id": item.userid,
      "vehicleid": item._id,
      "status": "requested",
      "payment": "paid",
      "date": dataandtime
    });

      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      };

      fetch("https://rentacarmobileapp.herokuapp.com/bookings", requestOptions)
        .then(response => response.json())
        .then(result => {
          if(result.status){
            alert("Booking Done")
          }else{
            alert("Some Errir")
          }
        })
        .catch(error => {
          alert("Some Error")
        });
  }
  return (
    <ScrollView>
      <View style={[styles.containerHead2, styles.pb20]}>
        <View>
            <View style={[styles.pt20,styles.mb20,{borderRadius:10,width:Dimensions.get("screen").width-20, borderWidth:2}]}>
              <Image style={{ maxWidth: Dimensions.get('window').width, marginLeft: 'auto', marginRight: 'auto'}} source={require("../assets/lux.png")}/>
              <Text style={{...styles.p, fontSize:14, fontWeight:"bold", marginVertical:2}}>{item.name},{item.make}</Text>
              <Text style={{...styles.p, fontSize:14, fontWeight:"bold", marginVertical:2}}>{item.modal},{item.color}</Text>
             
            </View>
            <Text style={{...styles.p, fontSize:14, fontWeight:"bold", marginVertical:2}}>Click on  Package to Book</Text>

            <TextInput style={styles.input}
        
                    placeholder="Date And Time"
                    placeholderTextColor="#ffffffc6"
                    value={dataandtime}
                    onChangeText={(password) =>setDateAndTIME(password)}
                  
                    blurOnSubmit={true}
                />
            {packages.map((item, index) => {
              return(
                <TouchableOpacity 
                  onPress={() => BookingCar(item)}
                key={`${index}`} style={{backgroundColor:"#fff", marginVertical:10,padding:20, borderRadius:10}} >
                    <Text style={{...styles.p, color:"#000"}} >Name:{item.name}</Text>
                    <Text style={{...styles.p, color:"#000"}} >Duration{item.duration}</Text>
                    <Text style={{...styles.p, color:"#000"}} >Price:{item.price} PKR</Text>
                </TouchableOpacity>
              )
            })}
        </View>
    
      </View>
      
    </ScrollView>
  );
}
