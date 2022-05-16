import * as React from 'react';
import { Text, View, TouchableOpacity, Image, ScrollView } from "react-native";
import { styles } from "../style";

export default function Categories({ navigation }) {
  const Listing = () => {navigation.navigate('Vehicles');}
  return (
    <ScrollView>
      <View style={styles.containerHead}>
        <Text style={styles.h1}>Categories</Text>
          <TouchableOpacity onPress={Listing} style={styles.cat}>
            <Image style={{ maxWidth: '100%', marginHorizontal: 'auto'}} source={require("../assets/lux.png")}/>
            <Text style={styles.p}>Luxury Class</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={Listing} style={styles.cat}>
            <Image style={{ maxWidth: '100%', marginHorizontal: 'auto'}} source={require("../assets/eco.png")}/>
            <Text style={styles.p}>Economic Class</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={Listing} style={styles.cat}>
            <Image style={{ maxWidth: '100%', marginHorizontal: 'auto'}} source={require("../assets/coach.png")}/>
            <Text style={styles.p}>Coaches</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={Listing} style={styles.cat}>
            <Image style={{ maxWidth: '100%', marginHorizontal: 'auto'}} source={require("../assets/bus.png")}/>
            <Text style={styles.p}>Bus Service</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={Listing} style={[styles.cat, styles.mb20]}>
            <Image style={{ maxWidth: '100%', marginHorizontal: 'auto'}} source={require("../assets/plan.png")}/>
            <Text style={styles.p}>Plan Your Trip</Text>
          </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
