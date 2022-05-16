import * as React from 'react';
import { Text, View, TouchableOpacity, TextInput } from "react-native";
import { styles } from "../style";
class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "engr1.aftabufaq@gmamil.com",
      password: "123456",
    };
  }
  render() {
    return (
        <View style={styles.containerLogin}>
            <Text style={styles.h1}>Sign In</Text>
            <Text style={[styles.p, styles.mb20]}>Welcome to you were missed.</Text>
            <View style={styles.mb20}>
                <TextInput  style={[styles.input, styles.mb10]}
                placeholder="Email"
                onSubmitEditing={this._submit}
                autoCapitalize="none"
                keyboardType="email-address"
                textContentType="emailAddress"
                blurOnSubmit={true}
                placeholderTextColor="#ffffffc6"
                // maxLength={11}
                value={this.state.email}
                onChangeText={(email) => this.setState({ email })}
                />
                <TextInput style={styles.input}
                    secureTextEntry={true}
                    placeholder="Password"
                    placeholderTextColor="#ffffffc6"
                    value={this.state.password}
                    onChangeText={(password) => this.setState({ password })}
                    onSubmitEditing={this._submit}
                    blurOnSubmit={true}
                />
            </View>
            <TouchableOpacity style={[styles.btn, styles.mb20]} onPress={this.login}>
                <Text style={styles.btnText}>Sign In</Text>
            </TouchableOpacity>
          <Text style={[styles.p, styles.mb10]}>Don't have an account? </Text>
          <TouchableOpacity onPress={this.signUp}>
              <Text style={[styles.p, styles.bold]}>Sign Up</Text>
          </TouchableOpacity>
        </View>
    );
  }
  signUp = () => {
    this.props.navigation.navigate("Sign Up");
  }
  login = () => {
    var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "role": "custommer",
  "email":this.state.email,
  "password": this.state.password
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("https://rentacarmobileapp.herokuapp.com/login", requestOptions)
  .then(response => response.json())
  .then(result =>{
    if(result.status){
      this.props.navigation.navigate("Dashboard", {user:result.data});
    }else{
      alert("Some Error")
    }
  })
  .catch(error => console.log('error', error));

  };


}


export default SignIn;
