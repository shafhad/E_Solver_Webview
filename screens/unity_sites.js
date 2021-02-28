import { StatusBar } from 'expo-status-bar';
import React, { Component } from "react";
import {StyleSheet, Text, View, TouchableOpacity, } from 'react-native';

import MyHeader from "../components/myHeader";
import { RFValue } from "react-native-responsive-fontsize";


export default class Unity_sites extends Component{

    render(){
        return(
            <View style={{ flex: 1 }}>
            <View style={{ flex: 0.1 }}>
              <MyHeader title="Unity Errors"/>
            </View>
                <View style={{ alignItems: "center" }}>
            
                  <TouchableOpacity
                    style={[styles.button, { marginTop: 30 }]}
                    title={"Github"}
                    onPress={() => {
                      this.props.navigation.navigate('github');
                    }}
                  >
                    <Text
                      style={styles.registerButtonText}
                    >
                      Github
                    </Text>
                  </TouchableOpacity>


                  <TouchableOpacity
                    style={[styles.button, { marginTop: 30 }]}
                    title={"Unity Errors"}
                    onPress={() => {
                      this.props.navigation.navigate('stackoverflow');
                    }}
                  >
                    <Text
                      style={styles.registerButtonText}
                    >
                      StackOverFlow
                    </Text>
                  </TouchableOpacity>


                  <TouchableOpacity
                    style={[styles.button, { marginTop: 30 }]}
                    title={"React Native Errors"}
                    onPress={() => {
                      this.props.navigation.navigate('unity_support');
                    }}
                  >
                    <Text
                      style={styles.registerButtonText}
                    >
                      Unity Support
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={[styles.Bbutton, { marginTop: 30 }]}
                    title={"React  Errors"}
                    onPress={() => {
                      this.props.navigation.navigate('platform_screen');
                    }}
                  >
                    <Text
                      style={styles.registerButtonText}
                    >
                      Back
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
    
        )

    }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
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
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 16,
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
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 16,
  },

  registerButtonText: {
    fontSize: RFValue(23),
    fontWeight: "bold",
    color: "#fff"
  },
  
});
