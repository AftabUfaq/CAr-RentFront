import * as React from 'react';
import { Text, View, TouchableOpacity,StyleSheet, Image, ScrollView } from "react-native";
let URI = "https://images.unsplash.com/photo-1532974297617-c0f05fe48bff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80"
export default function BookingList({ navigation }) {
    const [vechiles , setVechiles] = React.useState([])
    React.useEffect(() => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
          };

          fetch("https://rentacarmobileapp.herokuapp.com/bookings", requestOptions)
            .then(response => response.json())
            .then(result => {
               setVechiles(result.data)
            })
            .catch(error => console.log('error', error));
    },[])

   

  return (
    <ScrollView>
      <View style={styles.containerHead}>
       
        {
            vechiles.map((item, index) => {
              console.log(item);
              return(
              
                <View 
                  style={{borderColor:"#000",  overflow:"hidden",
                    borderRadius:10, borderWidth:1, margin:10,}} >
                <TouchableOpacity key={`${index}`}  style={styles.cat}>
                    <Image style={{minHeight:150, width:100,}}
                      source={{uri:URI}}/>
                    <View style={{paddingLeft:20,}} >
                      <Text style={{...styles.p, color:"#000"}}>Status: {item.status}</Text>
                      <Text style={styles.p}>Payment:{item.payment}</Text>
                      <Text style={styles.p}>Date:{item.date}</Text>
                    
          
                    </View>

              </TouchableOpacity>
              </View>
             
            )
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
        fontSize:14,
        fontWeight:"bold",
        color:"#000"
    }
})