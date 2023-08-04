import React, { useState } from "react";
import { SafeAreaView, View, StyleSheet, Text, TextInput, TouchableOpacity, Image, Button } from "react-native-web";
import logo from "../images/merson.png"
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

const Home = ({ navigation }) => {
  const handleNavigation = () => {
    navigation.navigate("Verify")
  }
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleInputChange = () => {

  }


  return (
    <SafeAreaView style={styles.parent}>
      <View>
        <Image source={{ uri: logo }} />
      </View>
      <View style={styles.inputView}>
        <TextInput style={styles.textInput} placeholder="Your email" />
      </View>
      <View style={styles.inputView}>
        <TextInput style={styles.textInput} placeholder="Password" />
      </View>
      <View style={styles.textView}>
        <TouchableOpacity style={styles.buttonView} onPress={handleNavigation}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.prompt}>
        <Text style={styles.promptText}>New to Wpay? <Text style={styles.signup}>Signup.</Text> </Text>
      </View>
      {/* social media signin */}

      <View style={styles.socialContainer}>
        <Text style={{ textAlign: "center", fontSize: 20, marginBottom: 20, fontFamily: "poppins-regular" }}>or continue with</Text>
        <TouchableOpacity style={styles.socials}>
          <Entypo name="facebook-with-circle" size={45} color="blue" />
          <Text style={styles.socialText}>Login with Facebook</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.socials}>
          <AntDesign name="google" size={45} color="black" />
          <Text style={styles.socialText}>Login with Google</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView >
  );
};

const styles = StyleSheet.create({
  parent: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",

  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },

  inputView: {
    marginTop: 20,
    paddingInline: 20,
    width: "100%",

  },

  textView: {
    marginTop: 20,
    paddingInline: 20,
    width: "100%",


  },
  textInput: {
    width: "100%",
    height: 50,
    marginBlock: 2,
    paddingBlock: 20,
    borderBottomWidth: 1,
    borderBottomColor: "lightgray",
    boxShadow: "rgba(0,0,0,0.5)",
    fontSize: 20,
    fontWeight: "300",
    outline: "none",
    fontFamily: "poppins-regular",
    outlineStyle: 'none'

  },
  buttonView: {
    paddingInline: 20,
    paddingBlock: 20,
    width: "100%",
    backgroundColor: "#14ae5c",
    marginTop: 10,
    textAlign: "center",
    borderRadius: 10,

  },
  buttonText: {
    textAlign: "center",
    color: "white",
    fontSize: 20,
    fontWeight: "800",
    fontFamily: "poppins-regular"
  },
  prompt: {
    marginTop: 20
  },
  promptText: {
    fontSize: 15,

  },
  signup: {
    fontWeight: "bold",
    fontSize: 18,
    color: "#009951",
    borderBottomWidth: 2,
    borderBottomColor: "#009951",
    fontFamily: "poppins-regular"
  },
  socialContainer: {
    width: "100%",
    paddingInline: 20,
    marginTop: 30,


  },
  socials: {
    width: "100%",
    borderWidth: 1,
    borderColor: "lightgray",
    flexDirection: "row",
    justifyContent: "flex-start",
    paddingLeft: 20,
    paddingBlock: 10,
    borderRadius: 10,
    alignItems: "center",
    gap: 10,
    marginBlock: 8,

  },
  socialText: {
    fontSize: 20,
    fontFamily: "poppins-regular",
  }

})

export default Home;
