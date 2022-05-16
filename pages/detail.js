import * as React from 'react';
import { Text, View, TouchableOpacity, Image, ScrollView, Dimensions } from "react-native";
import { styles } from "../style";
import SelectDropdown from 'react-native-select-dropdown'

export default function Detail({ navigation }) {
  const countries = ["1 day", "2 days", "3 days", "4 days"];
  const Confirm = () => {navigation.navigate('Confirm');}
  return (
    <ScrollView>
      <View style={[styles.containerHead2, styles.pb20]}>
        <View>
            <View style={[styles.pt20, styles.mb20]}>
              <Image style={{ maxWidth: Dimensions.get('window').width, marginLeft: 'auto', marginRight: 'auto'}} source={require("../assets/lux.png")}/>
              <Text style={styles.p}>Car Name</Text>
            </View>
            <View style={styles.catdetails}>
              <Text style={{height: 2, width: '100%', borderBottomWidth: 2, borderBottomColor : '#fff'}}></Text>

              <View style={styles.py20}>
                <View style={{flex: 1, justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row', paddingHorizontal: 20}}>
                  <Text style={styles.p}>Model Year</Text>
                  <Text style={styles.p}>2021</Text>
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

              <View style={styles.py20}>
                <View style={{flex: 1, justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row', paddingHorizontal: 20}}>
                  <Text style={styles.p}>Pickup City</Text>
                  <Text style={styles.p}>Peshawar</Text>
                </View>
              </View>
                <Text style={{height: 2,  width: '100%', borderBottomWidth: 2, borderBottomColor : '#fff'}}></Text>
              <View style={styles.py20}>
                <View style={{flex: 1, justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row', paddingHorizontal: 20}}>
                  <Text style={styles.p}>Driver Availability</Text>
                  <Text style={styles.p}>With/Without Driver</Text>
                </View>
              </View>
                <Text style={{height: 2,  width: '100%', borderBottomWidth: 2, borderBottomColor : '#fff'}}></Text>
              <View style={styles.py20}>
                <View style={{flex: 1, justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row', paddingHorizontal: 20}}>
                  <Text style={styles.p}>Owner Name</Text>
                  <Text style={styles.p}>Haris Ahmed</Text>
                </View>
              </View>
                <Text style={{height: 2,  width: '100%', borderBottomWidth: 2, borderBottomColor : '#fff'}}></Text>
            </View>
            <SelectDropdown
              data={countries}
              buttonStyle={[styles.btn1]}
              buttonTextStyle={styles.btnText}
              defaultButtonText="Select Days"
              dropdownBackgroundColor="#000"
              rowTextStyle= {{color: '#fff'}}
              onSelect={(selectedItem, index) => {
                console.log(selectedItem, index)
              }}
              buttonTextAfterSelection={(selectedItem, index) => {
                // text represented after item is selected
                // if data array is an array of objects then return selectedItem.property to render after item is selected
                return selectedItem
              }}
              rowTextForSelection={(item, index) => {
                // text represented for each item in dropdown
                // if data array is an array of objects then return item.property to represent item in dropdown
                return item
              }}
            />
        </View>
          <TouchableOpacity onPress={Confirm} style={[styles.btn, styles.mt20]}>
              <Text style={styles.btnText}>Next</Text>
          </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
