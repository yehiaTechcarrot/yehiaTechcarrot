import React, { Component, createRef } from "react";

import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Dimensions, ScrollView, Image, TouchableOpacity,
} from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import CustomInputText from "../components/inputText";
import CustomGradientButton from "../components/gradiantButton";
import LinearGradient from "react-native-linear-gradient";
import SingleActionPopup from "../components/singleActionPopup";


const window = Dimensions.get("window");


class ForgotPasswordScreen extends Component {

  constructor() {
    super();
    this.popupRef = createRef();
  }

  navigateToLogin = () => this.props.navigation.navigate("Login");

  showSuccessfullyMessagePopup = () => this.popupRef.current.open();


  render() {
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

              <TouchableOpacity
                style={styles.backButton}
                onPress={this.navigateToLogin}>

                <Image
                  width={24}
                  height={24}
                  source={require("../../assets/back_arrow.png")}>

                </Image>
              </TouchableOpacity>

              <ScrollView>


                <View
                  style={styles.contentLayer}>
                  <Text style={styles.headerText}>Forgot Password</Text>

                  <Text style={styles.subHeaderText}>
                    Enter the email associated with{"\n"}
                    your account
                    and we'll send an email{"\n"}
                    with instructions to reset your password</Text>

                  <CustomInputText
                    hint="Email Address"
                    marginTop={window.height * 0.062}
                  />

                  <CustomGradientButton
                    text="Submit"
                    marginTop={window.height * 0.024}
                    onPress={this.showSuccessfullyMessagePopup}
                  />

                </View>


              </ScrollView>


              <SingleActionPopup
                reference={this.popupRef}
                title={"Check your mail"}
                content={"We have sent a password recover instruction to your mail"}
                buttonText={"Ok"} />

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
  backButton: {
    height: 30,
    width: 30,
    marginStart: 20,
    marginTop: window.height * 0.08,
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
    marginTop: window.height * 0.18,
  },
  subHeaderText: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: "400",
    marginTop: window.height * 0.02,
    textAlign: "center",
  },

});

export default ForgotPasswordScreen;
