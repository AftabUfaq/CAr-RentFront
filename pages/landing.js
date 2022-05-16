import * as React from 'react';
import { StyleSheet, Text, Image, View, TouchableOpacity, Dimensions } from "react-native";
import { styles } from "../style";
export default function Landing({ navigation }) {
  const signIn = () => {navigation.navigate('Sign In');}
  const signUp = () => {navigation.navigate('Sign Up');}
  return (
    <View style={styles.container}>
        <Image style={[styles.mxH100, styles.mb20]} source={require("../assets/logo.png")}/>
        <View>
            <TouchableOpacity style={[styles.btn, styles.mb10]} onPress={signIn}>
                <Text style={styles.btnText}>Sign In</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn} onPress={signUp}>
            <Text style={styles.btnText}>Sign Up</Text>
            </TouchableOpacity>
        </View>
        <Image style={{width: Dimensions.get('window').width}} source={require("../assets/car.png")}/>
    </View>
  );
}
