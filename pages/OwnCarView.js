import * as React from 'react';
import { Text, View, TouchableOpacity,StyleSheet, Image, ScrollView } from "react-native";
let URI = "https://images.unsplash.com/photo-1532974297617-c0f05fe48bff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80"
export default function Vehicles({ navigation }) {
    const [vechiles , setVechiles] = React.useState([])
    React.useEffect(() => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };

          fetch("https://rentacarmobileapp.herokuapp.com/vechiles", requestOptions)
            .then(response => response.json())
            .then(result => {
               setVechiles(result.data)
            })
            .catch(error => console.log('error', error));
    },[])

    const Details = (item) => {
        navigation.navigate('Detail',{item:item});
    }
  return (
    <ScrollView>
      <View style={styles.containerHead}>
        <Text style={styles.h1}>Your Cars</Text>
        {
            vechiles.map((item, index) => {
                if(item.userid === "627fdeefef18466f790991d8"){
                  return(
                    <View key={`${index}`} style={{borderColor:"#000",  overflow:"hidden",
                    borderRadius:10, borderWidth:1, margin:10,}} >
                    <TouchableOpacity key={`${index}`} onPress={() => Details(item)} style={styles.cat}>
                        <Image style={{minHeight:150, width:100,}}
                          source={{uri:URI}}/>
                        <View style={{paddingLeft:20,}} >
                          <Text style={styles.p}>CarName: {item.name}</Text>
                          <Text style={styles.p}>Make:{item.make}</Text>
                          <Text style={styles.p}>Modal:{item.modal}</Text>
                          <Text style={styles.p}>Color: {item.color}</Text>
                          <View style={{flexDirection:"row"}}>
                          <TouchableOpacity  
                          style={{
                            width:100,
                            justifyContent:"center",
                            alignItems:"center",
                            paddingVertical:5,
                            margin:10,
                            borderRadius:20,
                            backgroundColor:"green",
                            alignSelf:"center"
                            }} >
                             <Text style={styles.p2}>Add Package</Text>
                          </TouchableOpacity>
                          <TouchableOpacity  
                          onPress={() => alert("Cannt Delete Car Now")}
                          style={{
                            width:100,
                            justifyContent:"center",
                            alignItems:"center",
                            paddingVertical:5,
                            margin:10,
                            borderRadius:20,
                            backgroundColor:"red",
                            alignSelf:"center"
                            }} >
                             <Text style={styles.p2}>Delete</Text>
                          </TouchableOpacity>
                          </View>
                       
                        </View>
    
                  </TouchableOpacity>
    
    
                  </View>
                )
                }else{
                  return null
                }
              
        })}


      </View>
    </ScrollView>
  );
}


const styles = StyleSheet.create({
    containerHead:{
        marginTop:30,
        flex:1,
    },
    h1:{
        fontWeight:"bold",
        marginTop:30,
        fontSize:28,
        textAlign:"center",
        color:"#000"
    },
    cat:{

        flexDirection:"row",

        flex:1,

        alignItems:"center",
        overflow:"hidden",
        borderRadius:10,

    },
    p:{
        fontSize:12,
        fontWeight:"bold",
        color:"#000"
    },
    p2:{
      fontSize:12,
      fontWeight:"bold",
      color:"#fff"
  }
})