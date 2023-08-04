import React from "react"
import { Text, View, TouchableOpacity, StyleSheet } from "react-native"

const Button = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <View>
        <Text>Login</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "14ae5c",
  },
})


export default Button;