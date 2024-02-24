import React from "react";
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  SafeAreaView,
  StatusBar,
  Image,
} from "react-native";
import colors from "../components/colors";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
    padding: 8,
  },
  elvTopLeft: {
    color: "#fff",
    marginTop: -5,
    marginLeft: 20,
    fontSize: 10,
  },
  topView: {
    marginTop: 200,
  },
  header: {
    justifyContent: "center",
    textAlign: "center",
    marginTop: 150,
  },
  row1: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 350,
    height: 50,
    margin: 10,
    borderRadius: 10,
    shadowOpacity: 0.4,
    backgroundColor: colors.brown,
  },
  row2: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 350,
    height: 50,
    margin: 10,
    borderRadius: 10,
    shadowOpacity: 0.4,
    backgroundColor: colors.green,
  },
  row3: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 350,
    height: 50,
    margin: 10,
    borderRadius: 10,
    shadowOpacity: 0.4,
    backgroundColor: colors.purple,
  },
  logo: {
    width: 310,
    height: 45,
    marginLeft: 30,
    // justifyContent: "center",
    // textAlign: "center",
    // alignItems: "center",
  },
  button: {
    justifyContent: "center",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    color: colors.white,
  },
});
export default () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Text style={styles.elvTopLeft}>ELEVATED</Text>
      <TouchableOpacity style={styles.header}>
        <Image style={styles.logo} source={require("../assets/logo.png")} />
      </TouchableOpacity>
      <View style={styles.topView}>
        <TouchableOpacity
          onPress={() => alert("GET GREEN!")}
          style={styles.row1}
        >
          <Text style={styles.button}>GET GREEN</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => alert("FINAL TALENT")}
          style={styles.row2}
        >
          <Text style={styles.button}>FINAL TALENT</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => alert("WELCOME BACK")}
          style={styles.row3}
        >
          <Text style={styles.button}>WELCOME BACK</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
