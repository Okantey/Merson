import React from "react"
import { SafeAreaView, Text, View, StyleSheet, TextInput } from "react-native"
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { FlatList } from "react-native"

const Landing = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.parent}>
      <View style={styles.status}>
        <View style={styles.mainContainer}>
          <View>
            <Text style={styles.textAndre}>Hello Andre,</Text>
            <Text>Your available balance</Text>
          </View>
          <View>
            <Text style={styles.balance}>$15,901</Text>
          </View>
        </View>
      </View>
      <View style={styles.mainArea}>
        <View style={styles.mainView}>
          <MaterialCommunityIcons name="bank-transfer" size={40} color="white" />
          <Text style={styles.mainText}>Transfer</Text>
        </View>
        <View style={styles.mainView}>
          <AntDesign name="totop" size={40} color="white" />
          <Text style={styles.mainText}>Top Up</Text>
        </View>
        <View style={styles.mainView}>
          <FontAwesome5 name="history" size={40} color="white" />
          <Text style={styles.mainText}>History</Text>
        </View>
      </View>
      <View>
        <Text style={styles.text}>Payment List</Text>
      </View>





      {/* grid content */}
      <View style={styles.mainOptions}>
        <View style={styles.mainView}>
          <FontAwesome name="bolt" size={24} color="black" />
          <Text style={styles.paymentListText}>Electricity</Text>
        </View>
        <View style={styles.mainView}>
          <AntDesign name="wifi" size={24} color="black" />
          <Text style={styles.paymentListText}>Internet</Text>
        </View>
        <View style={styles.mainView}>
          <AntDesign name="idcard" size={24} color="black" />
          <Text style={styles.paymentListText}>Voucher</Text>
        </View>
        <View style={styles.mainView}>
          <AntDesign name="medicinebox" size={24} color="black" />
          <Text style={styles.paymentListText}>Assurance</Text>
        </View>
        <View style={styles.mainView}>
          <AntDesign name="shoppingcart" size={24} color="black" />
          <Text style={styles.paymentListText}>Merchant</Text>
        </View>
        <View style={styles.mainView}>
          <AntDesign name="mobile1" size={24} color="black" />
          <Text style={styles.paymentListText}>Mobile Credit</Text>
        </View>
        <View style={styles.mainView}>
          <AntDesign name="filetext1" size={24} color="black" />
          <Text style={styles.paymentListText}>Bill</Text>
        </View>
        <View style={styles.mainView}>
          <AntDesign name="appstore-o" size={24} color="black" />
          <Text style={styles.paymentListText}>More</Text>
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  parent: {
    backgroundColor: "#ffffff",
    flex: 1,

  },

  mainContainer: {
    marginTop: 30,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingInline: 20,
  },

  textAndre: {
    fontFamily: "poppins-regular",
    fontSize: 25,
    marginBottom: 10,
  },
  balance: {
    fontSize: 40,
    fontFamily: "poppins-bold",

  },
  mainArea: {
    backgroundColor: "#85e0a3",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 30,
    marginInline: 20,
    paddingInline: 30,
    paddingBlock: 20,
    borderRadius: 20,
  },
  mainText: {
    color: "white",
    fontFamily: "poppins-bold",
    fontSize: 20,
  },
  mainView: {
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    fontFamily: "poppins-regular",
    fontSize: 20,
    paddingInline: 20,
    paddingTop: 30,
    fontWeight: "500"

  },

  paymentListText: {
    fontFamily: "poppins-regular",
    fontSize: 20,
  },
  mainOptions: {
    marginTop: 30,
    display: "grid",
    gridTemplateColumns: "repeat 3(1fr)",
    paddingInline: 20,
  }
})
export default Landing;