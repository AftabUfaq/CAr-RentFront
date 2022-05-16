import * as React from 'react';
import { Text, View, TouchableOpacity, Image, Dimensions } from "react-native";
import { styles } from "../style";

export default function OwnCarView({ navigation }) {
  const Yes = () => {navigation.navigate('Categories');}
  const No = () => {navigation.navigate('Dashboard');}
  return (
    <View style={styles.container}>
        <Text style={styles.h1}>Driver Required?</Text>
        <View>
          <TouchableOpacity style={[styles.btn, styles.mb10]} onPress={Yes}>
            <Text style={styles.btnText}>Yes</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn} onPress={No}>
            <Text style={styles.btnText}>No</Text>
          </TouchableOpacity>
        </View>
        <Image style={{width: Dimensions.get('window').width}} source={require("../assets/darkcar.png")}/>
    </View>
  );
}
