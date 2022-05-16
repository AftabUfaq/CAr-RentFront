import * as React from 'react';
import { Text, View, TouchableOpacity, TextInput, ScrollView, KeyboardAvoidingView } from "react-native";
import { styles } from "../style";


class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pname: "",
      cnic: "",
      email: "",
      number: "",
      password: "",
    };
  }
  render() {
    return (
      <ScrollView>
        <KeyboardAvoidingView >
          <View style={styles.containerLogin}>
            <Text style={[styles.h1, styles.mb20]}>
              Sign Up
            </Text>
            <View style={styles.mb20}>
                <TextInput
                  style={[styles.input, styles.mb10]}
                  placeholderTextColor="#ffffffc6"
                  value={this.state.pname}
                  onChangeText={(pname) => this.setState({ pname })}
                  placeholder="Name*"

                  blurOnSubmit={true}
                />
                <TextInput
                  style={[styles.input, styles.mb10]}
                  placeholderTextColor="#ffffffc6"
                  value={this.state.cnic}
                  onChangeText={(cnic) => this.setState({ cnic })}
                  placeholder="CNIC*"

                  blurOnSubmit={true}
                />
                <TextInput
                  style={[styles.input, styles.mb10]}
                  placeholderTextColor="#ffffffc6"
                  value={this.state.email}
                  onChangeText={(email) => this.setState({ email })}
                  placeholder="Email*"
                  autoCapitalize="none"
                  keyboardType="email-address"
                  textContentType="emailAddress"

                  blurOnSubmit={true}
                />
                <TextInput
                style={[styles.input, styles.mb10]}
                value={this.state.number}
                placeholderTextColor="#ffffffc6"
                onChangeText={(number) => this.setState({ number })}
                placeholder="Number*"
                textContentType="telephoneNumber"
                keyboardType="numeric"
                maxLength={11}

                blurOnSubmit={true}
                />
                <TextInput
                style={styles.input}
                value={this.state.password}
                placeholderTextColor="#ffffffc6"
                onChangeText={(password) => this.setState({ password })}
                secureTextEntry={true}
                placeholder="Password*"

                blurOnSubmit={true}
                />

            </View>
            <TouchableOpacity onPress={this.registeration} style={[styles.btn, styles.mb20]}>
            <Text style={styles.btnText}>Register</Text>
            </TouchableOpacity>
            <Text style={[styles.p, styles.mb10]}>Already have an account? </Text>
            <TouchableOpacity onPress={this.onPressHandler}>
                <Text style={[styles.p, styles.bold]}>Sign In</Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    );
  }
  onPressHandler = () => {
    this.props.navigation.navigate("Sign In");
  }
  registeration = () => {
    var pname=this.state.pname;
    var cnic=this.state.cnic;
    var email=this.state.email;
    var number=this.state.number;
    var password=this.state.password;
    if(pname.length==0 || cnic.length==0 || number.length==0 || password.length==0){
      alert("Required Field Is Missing");
    }
    else{
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      var raw = JSON.stringify({
        "nameuser": pname,
        "cnic": cnic,
        "mobile":number,
        "type": "custommer",
        "email": email,
        "profile_pic": "https://www.whatsappimages.in/wp-content/uploads/2022/02/Beautiful-Stylish-girls-dp-Pics-Wallpaper-scaled.jpg",
        "password": password
      });

      var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
      };

      fetch("https://rentacarmobileapp.herokuapp.com/users", requestOptions)
        .then(response => response.json())
        .then(result => {
          if(result.status){
            this.props.navigation.navigate("Dashboard", {user:result.data})
          }else{
            alert("Error Message" , result.error)
          }
        })
        .catch(error => {
          alert("Some Erroor")
        });
      };
    }
}



export default SignUp;
