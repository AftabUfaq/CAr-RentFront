import * as React from 'react';
import { Text, View, TouchableOpacity, Image, ScrollView, Dimensions } from "react-native";
import { styles } from "../style";


export default function Detail({ navigation, route }) {
  let item = route.params.item
  
  return (
    <ScrollView>
      <View style={[styles.containerHead2, styles.pb20]}>
        <View>
            <View style={[styles.pt20, styles.mb20]}>
              <Image style={{ maxWidth: Dimensions.get('window').width, marginLeft: 'auto', marginRight: 'auto'}} source={require("../assets/lux.png")}/>
              <Text style={{...styles.p, fontSize:20, fontWeight:"bold", marginVertical:20}}>{item.name}</Text>
            </View>
            <View style={styles.catdetails}>
              <Text style={{height: 2, width: '100%', borderBottomWidth: 2, borderBottomColor : '#fff'}}></Text>

              <View style={styles.py20}>
                <View style={{flex: 1, justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row', paddingHorizontal: 20}}>
                  <Text style={styles.p}>Model Year</Text>
                  <Text style={styles.p}>{item.modal}</Text>
                </View>
              </View>

                <Text style={{height: 2,  width: '100%', borderBottomWidth: 2, borderBottomColor : '#fff'}}></Text>

              <View style={styles.py20}>
                <View style={{flex: 1, justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row', paddingHorizontal: 20}}>
                  <Text style={styles.p}>Transmission</Text>
                  <Text style={styles.p}>Automatic</Text>
                </View>
              </View>

                <Text style={{height: 2,  width: '100%', borderBottomWidth: 2, borderBottomColor : '#fff'}}></Text>

             
                <Text style={{height: 2,  width: '100%', borderBottomWidth: 2, borderBottomColor : '#fff'}}></Text>
              <View style={styles.py20}>
                <View style={{flex: 1, justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row', paddingHorizontal: 20}}>
                  <Text style={styles.p}>Make</Text>
                  <Text style={styles.p}>{item.make}</Text>
                </View>
              </View>
                <Text style={{height: 2,  width: '100%', borderBottomWidth: 2, borderBottomColor : '#fff'}}></Text>
              <View style={styles.py20}>
                <View style={{flex: 1, justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row', paddingHorizontal: 20}}>
                  <Text style={styles.p}>Color</Text>
                  <Text style={styles.p}>{item.color}</Text>
                </View>
              </View>
                <Text style={{height: 2,  width: '100%', borderBottomWidth: 2, borderBottomColor : '#fff'}}></Text>
            </View>
            
        </View>
         
      </View>
    </ScrollView>
  );
}
