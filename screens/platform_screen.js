import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

import MyHeader from "../components/myHeader";
import { RFValue } from "react-native-responsive-fontsize";

export default class Platforms extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 0.12 }}>
          <MyHeader title="Error Solver" />
        </View>
        <View
          style={{
            alignItems: "center",
            flex: 0.88,
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <TouchableOpacity
            style={[styles.button]}
            title={"Android Studio"}
            onPress={() => {
              this.props.navigation.navigate("android_studio_sites");
            }}
          >
            <Text style={styles.registerButtonText}>Android Studio Sites</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.button, { marginTop: 30 }]}
            title={"Unity Errors"}
            onPress={() => {
              this.props.navigation.navigate("unity_sites");
            }}
          >
            <Text style={styles.registerButtonText}>Unity Errors</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.button, { marginTop: 30 }]}
            title={"React Native Errors"}
            onPress={() => {
              this.props.navigation.navigate("react_native_sites");
            }}
          >
            <Text style={styles.registerButtonText}>React Native Errors</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.button, { marginTop: 30 }]}
            title={"Unity Errors"}
            onPress={() => {
              this.props.navigation.navigate("java_sites");
            }}
          >
            <Text style={styles.registerButtonText}>Java Errors</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.button, { marginTop: 30 }]}
            title={"React Native Errors"}
            onPress={() => {
              this.props.navigation.navigate("web_development_sites");
            }}
          >
            <Text style={styles.registerButtonText}>HTML / CSS Errors</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  },
  button: {
    width: "75%",

    height: RFValue(60),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: RFValue(50),
    backgroundColor: "#329d9c",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 16
  },

  Bbutton: {
    width: "30%",

    height: RFValue(60),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: RFValue(50),
    backgroundColor: "#205072",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 16
  },

  registerButtonText: {
    fontSize: RFValue(23),
    fontWeight: "bold",
    color: "#fff"
  }
});
