import React, { Component } from "react";

import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Dimensions, ScrollView, Image,
} from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import CustomInputText from "../components/inputText";
import CustomGradientButton from "../components/gradiantButton";
import LinearGradient from "react-native-linear-gradient";
import { AuthContext } from "../context";



const window = Dimensions.get("window");

class LoginScreen extends Component {

  navigateToSignUp = () => this.props.navigation.navigate("SignUp");
  navigateToUnlock = () => this.props.navigation.navigate("Unlock");

  navigateToForgotPassword = () => this.props.navigation.navigate("ForgotPassword");


  static contextType = AuthContext;


  render() {

    const { login } = this.context

    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <ImageBackground
          source={require("../../assets/login_background.png")}
          style={styles.imageBackground}>
          <LinearGradient
            style={styles.fadedLayer}
            start={{ x: 0.5, y: 0 }}
            end={{ x: 0.5, y: 1 }}
            colors={["rgba(255,255,255,0.34)", "rgba(0,0,0,0.49)", "rgba(0,0,0,0.32)"]}>

            <LinearGradient
              style={styles.fadedLayer}
              start={{ x: 0.5, y: 0 }}
              end={{ x: 0.5, y: 1 }}
              colors={["rgba(8,8,12,0.79)", "rgba(0,0,0,0)", "rgba(0,0,0,0)"]}>

              <ScrollView>
                <View
                  style={styles.contentLayer}>
                  <Text style={styles.headerText}>Welcome back!</Text>

                  <Text style={styles.subHeaderText}>Please login to your account.</Text>

                  <CustomInputText
                    hint="Email Address"
                    marginTop={window.height * 0.036}
                  />

                  <CustomInputText
                    hint="Password"
                    marginTop={18}
                    showEyeIcon={true}
                  />

                  <Text
                    style={styles.forgotPasswordText}
                    onPress={this.navigateToForgotPassword}>
                    Forgot Password?</Text>

                  <CustomGradientButton
                    text="Login"
                    marginTop={window.height * 0.0344}
                    onPress={this.navigateToUnlock}
                   // onPress={()=> login()}
                  />

                  <Text
                    style={styles.haveAccountSentence}
                    onPress={this.navigateToSignUp}> Don’t have an account?{" "}
                    <Text style={styles.signUpText}>{" "}SIGN UP</Text>
                  </Text>


                </View>


                <ImageBackground
                  style={styles.blurLayout}
                  source={require("../../assets/login_blur.png")}>

                  <Text style={styles.signInWithText}>SIGN IN WITH</Text>

                  <View style={styles.socialLayout}>

                    <Image
                      style={styles.socialButton}
                      source={require("../../assets/facebook_icon.png")}
                      resizeMode="cover"
                    />

                    <Image
                      style={styles.socialButton}
                      source={require("../../assets/google_icon.png")}
                      resizeMode="cover"
                    />

                    <Image
                      style={styles.socialButton}
                      source={require("../../assets/apple_icon.png")}
                      resizeMode="cover"
                    />

                  </View>
                </ImageBackground>


              </ScrollView>

            </LinearGradient>


          </LinearGradient>
        </ImageBackground>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  imageBackground: {
    width: "100%",
    height: "100%",
    resizeMode: "stretch",
  },
  fadedLayer: {
    width: "100%",
    height: "100%",
  },
  contentLayer: {
    alignItems: "center",
    marginStart: 40,
    marginEnd: 40,
  },
  headerText: {
    color: Colors.white,
    fontSize: 22,
    fontWeight: "700",
    marginTop: window.height * 0.3,
  },
  subHeaderText: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: "400",
    marginTop: 6,
  },
  forgotPasswordText: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: "500",
    marginTop: window.height * 0.0344,
    alignSelf: "flex-end",
  },
  haveAccountSentence: {
    marginTop: window.height * 0.043,
    color: Colors.white,
    fontSize: 16,
    fontWeight: "400",

  },
  signUpText: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: "700",

  },
  blurLayout: {
    height: 110,
    width: "100%",
    alignItems: "center",
    marginTop: window.height * 0.0677,
    marginBottom: 30,
  },
  signInWithText: {
    color: Colors.white,
    fontSize: 14,
    fontWeight: "700",
    marginTop: 18,
  },
  socialLayout: {
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  socialButton: {
    width: 45,
    height: 45,
    marginStart: 10,
    marginEnd: 10,
    alignSelf: "center",
  },

});

export default LoginScreen;
