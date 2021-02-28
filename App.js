import * as React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import android_studio_sites from "./screens/android_studio_sites";
import platform_screen from "./screens/platform_screen";
import react_native_sites from "./screens/react_native_sites";
import unity_sites from "./screens/unity_sites";
import java_sites from "./screens/java_sites";
import web_development_sites from "./screens/web_development_sites";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import Android_developers from "./screens/error_solvers/android_developers";
import Github from "./screens/error_solvers/github";
import Quora from "./screens/error_solvers/quora";
import React_Native_Dev from "./screens/error_solvers/React_native_dev";
import StackOverFlow from "./screens/error_solvers/StackOverFlow";
import Unity_Support from "./screens/error_solvers/unity_support";
import W3Schools from "./screens/error_solvers/W3Schools";
export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
var AppNavigator = createSwitchNavigator({
  platform_screen: platform_screen,
  android_studio_sites: android_studio_sites,
  react_native_sites: react_native_sites,
  unity_sites: unity_sites,
  java_sites: java_sites,
  web_development_sites: web_development_sites,
  android: Android_developers,
  github: Github,
  quora: Quora,
  react_dev: React_Native_Dev,
  stackoverflow: StackOverFlow,
  unity_support: Unity_Support,
  w3schools: W3Schools
});

const AppContainer = createAppContainer(AppNavigator);
