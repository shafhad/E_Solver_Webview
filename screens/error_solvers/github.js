import { StatusBar } from "expo-status-bar";
import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Modal,
  ScrollView,
  TextInput
} from "react-native";
import { WebView } from "react-native-webview";

import MyHeader from "../../components/myHeader";
import { RFValue } from "react-native-responsive-fontsize";

// <View style={{ alignItems: "center" }}>
//   <WebView source={{ uri: "github.com" }} />
//
//
// </View>

export default class Github extends Component {
  constructor() {
    super();
    this.state = {
      isVisible: false
    };
  }

  render() {
    return (
      <View
        style={{
          flex: 1
        }}
      >
        <View style={{ flex: 0.12 }}>
          <MyHeader title={"Github"} />
        </View>
        <View style={{ flex: 0.76 }}>
          <WebView
            source={{ uri: "https://github.com/" }}
            style={{ height: "100%" }}
          />
        </View>
        <View
          style={{ flex: 0.12, alignItems: "center", justifyContent: "center" }}
        >
          <TouchableOpacity
            style={[styles.Bbutton, { marginTop: 30 }]}
            title={"React  Errors"}
            onPress={() => {
              this.props.navigation.navigate("platform_screen");
            }}
          >
            <Text style={styles.registerButtonText}>Back</Text>
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
  },
  profileContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  title: {
    fontSize: 60,
    fontWeight: "300",
    // fontFamily:'AvenirNext-Heavy',
    color: "#32867d"
  },
  loginBox: {
    width: 300,
    height: 35,
    borderBottomWidth: 1.5,
    borderColor: "#32867d",
    fontSize: 20,
    marginBottom: 20,
    marginTop: 5
  },
  buttonContainer: {
    flex: 1
  },
  modalContainer: {
    flex: 1,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffff",
    marginRight: 30,
    marginLeft: 30,
    marginTop: 80,
    marginBottom: 80
  },
  formTextInput: {
    width: "90%",
    height: RFValue(45),
    padding: RFValue(10),
    borderWidth: 1,
    borderRadius: 2,
    borderColor: "grey",
    paddingBottom: RFValue(10),
    marginLeft: RFValue(20),
    marginBottom: RFValue(14)
  },
  registerButton: {
    width: "85%",
    height: RFValue(50),
    marginTop: RFValue(20),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: RFValue(3),
    backgroundColor: "#32867d",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 8
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 16,
    marginTop: RFValue(10)
  },
  cancelButton: {
    width: 200,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 5
  }
});
