import * as React from 'react';
import { Text, View, TouchableOpacity, Image, Dimensions } from "react-native";
import { styles } from "../style";

export default function Dashboard({ navigation, route }) {
  console.log(route);
  const rentIn = () => {navigation.navigate('Rent In');}
  const rentOut = () => {navigation.navigate('Rent Out');}
  return (
    <View style={styles.container}>
      <Image style={[styles.mxH100, styles.mb20]} source={require("../assets/logo.png")}/>
        <View style={styles.Row}>
            <TouchableOpacity style={[styles.BoxDash, styles.mb10]} onPress={rentIn}>
                <Text style={styles.btnText}>Add Car</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.BoxDash} onPress={() => navigation.navigate("OwnCarView")}>
            <Text style={styles.btnText}>show Cars</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.Row}>
            <TouchableOpacity style={styles.BoxDash} onPress={rentOut}>
            <Text style={styles.btnText}>Book Car</Text>
            
            </TouchableOpacity>
            <TouchableOpacity style={styles.BoxDash} onPress={() => navigation.navigate("BookingList")}>
            <Text style={styles.btnText}>View Bookings</Text>
            </TouchableOpacity>
        </View>

        <View style={styles.Row}>
          
        </View>
      
      <Image style={{width: Dimensions.get('window').width}} source={require("../assets/car.png")}/>
    </View>
  );
}
