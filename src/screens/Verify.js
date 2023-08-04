import React from 'react'
import { SafeAreaView, View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { TextInput } from 'react-native-web'
import { AntDesign } from '@expo/vector-icons';

const Verify = () => {

  return (
    <SafeAreaView style={
      {
        flex: 1,
      }
    }>
      <View style={{
        flex: 1,
        backgroundColor: "#009951",
        paddingInline: 20,
      }}>
        <Text style={{
          fontFamily: "poppins-regular",
          fontSize: 25,
          color: "#fff",
          marginTop: 20
        }}>Enter phone number to receive a pin code to signup.</Text>
        <View style={styles.inputView}>
          <View style={{
            flex: 1,
            flexDirection: "row",
            alignItems: "center",
            borderBottomWidth: 1,
            borderBlockColor: "white"
          }}>
            <AntDesign name="flag" size={30} color="" />
            <TextInput style={styles.inputOne} placeholder="+1" />
          </View>
          <TextInput style={styles.inputTwo} type="number" placeholder="(480) 555-0103" />
        </View>
        <TouchableOpacity style={styles.sendCode}>
          <Text style={styles.sendCodeText}>Send Code</Text>
        </TouchableOpacity>
        <View style={styles.inputZone}>

        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  inputView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: 20,
    marginBlock: 40,
  },
  inputOne: {
    width: 20,
    fontSize: 26,
    color: "white",
    fontFamily: "poppins-regular"
  },
  inputTwo: {
    borderBottomWidth: 1,
    borderBottomColor: "white",
    fontSize: 26,
    width: "80%",
    color: "white",
    fontFamily: "poppins-regular"
  },

  sendCode: {
    width: "100%",
    height: 60,
    backgroundColor: "#85e0a3",
    color: "white",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
  sendCodeText: {
    color: "white",
    fontSize: 25,
    fontFamily: "poppins-regular",

  }

})

export default Verify