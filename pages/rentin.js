import * as React from 'react';
import { Text, View, TouchableOpacity, TextInput, ScrollView, KeyboardAvoidingView } from "react-native";
import { styles } from "../style";
// import ImgPick from '../components/cnicpicker'

class RentIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      carName:"Lembogeni",
      carModel: "2022",
      transmission: "2023",
      city: "",
      driverAvail: "gren",
      ownerName: "",
      carImage: ""
    };
  }

  registeration = () => {
    let {carName,carModel,transmission,driverAvail} =  this.state
    if(carName.length ==0 || carModel.length ==0 || transmission.length ==0 || driverAvail == 0){
      alert("Required fil;ed Missing");
      return
    }
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      "userid": "627fdeefef18466f790991d8",
      "color":driverAvail,
      "modal": carModel,
      "make": transmission,
      "name":carName
    });

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch("https://rentacarmobileapp.herokuapp.com/vechiles", requestOptions)
      .then(response => response.json())
      .then(result => {
        console.log(result);
        if(result.status){
            alert("Car Added SuccessFully.")
        }else{
          alert("Error In Addingf")
        }
      })
      .catch(error =>  alert("Error In Adding"));
    }
  render() {
    return (
      <ScrollView>
        <KeyboardAvoidingView >
          <View style={styles.containerLogin}>
            <Text style={[styles.h1, styles.mb20]}>
              Add New Car
            </Text>
            <View style={styles.mb20}>
                <TextInput
                style={[styles.input, styles.mb10]}
                placeholderTextColor="#ffffffc6"
                value={this.state.carName}
                onChangeText={(carName) => this.setState({ carName })}
                placeholder="Car Name*"
                blurOnSubmit={true}
                />
                <TextInput
                style={[styles.input, styles.mb10]}
                placeholderTextColor="#ffffffc6"
                value={this.state.carModel}
                onChangeText={(carModel) => this.setState({ carModel })}
                placeholder="Car Model*"
                blurOnSubmit={true}
                />
                <TextInput
                style={[styles.input, styles.mb10]}
                placeholderTextColor="#ffffffc6"
                value={this.state.transmission}
                onChangeText={(transmission) => this.setState({ transmission })}
                placeholder="Car Make*"
                blurOnSubmit={true}
                />

                <TextInput
                style={[styles.input, styles.mb10]}
                placeholderTextColor="#ffffffc6"
                value={this.state.driverAvail}
                onChangeText={(driverAvail) => this.setState({ driverAvail })}
                placeholder="Car Color*"
                blurOnSubmit={true}
                />

            </View>
            <TouchableOpacity onPress={this.registeration} style={[styles.btn, styles.mb20]}>
               <Text style={styles.btnText}>Submmit</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={this.onPressHandler} style={[styles.btn, styles.mb20]}>
               <Text style={styles.btnText}>View your Cars Listing</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    );
  }
  onPressHandler = () => {
    this.props.navigation.navigate("Vehicles");
  }

}



export default RentIn;
