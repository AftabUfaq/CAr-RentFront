import * as React from 'react';
import { Text, View, TouchableOpacity, Image, ScrollView, Dimensions } from "react-native";
import { styles } from "../style";

export default function Confirm({ navigation }) {
  const Map = () => {navigation.navigate('Map');}
  return (
    <ScrollView>
      <View style={[styles.containerHead2, styles.pb20]}>
        <View>
            <View style={[styles.pt20, styles.mb20]}>
              <Image style={{ maxWidth: Dimensions.get('window').width, marginLeft: 'auto', marginRight: 'auto'}} source={require("../assets/lux.png")}/>
              <Text style={styles.p}>Car Name</Text>
            </View>
            <View style={[styles.catdetails, styles.mb20]}>
              <View style={styles.py20}>
                <Text style={styles.h2}>Delivery:</Text>
                <Text style={styles.p}>University Road Academy Town, Peshawar</Text>
              </View>
            </View>
            <View style={styles.catdetails}>
                <Text style={{height: 2, width: '100%', borderBottomWidth: 2, borderBottomColor : '#fff'}}></Text>
            
              <View style={styles.py20}>
                <Text style={styles.h2}>Summary</Text>
              </View>

                <Text style={{height: 2, width: '100%', borderBottomWidth: 2, borderBottomColor : '#fff'}}></Text>
            
              <View style={styles.py20}>
                <View style={{flex: 1, justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row', paddingHorizontal: 20}}>
                  <Text style={styles.p}>Rent/Day</Text>
                  <Text style={styles.p}>Rs.4000</Text>
                </View>
              </View>

                <Text style={{height: 2,  width: '100%', borderBottomWidth: 2, borderBottomColor : '#fff'}}></Text>
            
              <View style={styles.py20}>
                <View style={{flex: 1, justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row', paddingHorizontal: 20}}>
                  <Text style={styles.p}>Rented For</Text>
                  <Text style={styles.p}>2 Days</Text>
                </View>
              </View>
                <Text style={{height: 2,  width: '100%', borderBottomWidth: 2, borderBottomColor : '#fff'}}></Text>
              <View style={styles.py20}>
                <View style={{flex: 1, justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row', paddingHorizontal: 20}}>
                  <Text style={styles.p}>Total</Text>
                  <Text style={styles.p}>Rs.8000</Text>
                </View>
              </View>
                <Text style={{height: 2,  width: '100%', borderBottomWidth: 2, borderBottomColor : '#fff'}}></Text>
            </View>
        </View>
          <TouchableOpacity onPress={Map} style={[styles.btn, styles.mt20]}>
              <Text style={styles.btnText}>Confirm</Text>
          </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
