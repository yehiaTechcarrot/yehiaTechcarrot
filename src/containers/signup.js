import React, { Component, createRef } from "react";

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
import TermsConditionsCheckBox from "../components/termsCheckBox";
import TermsAndConditionsPopup from "../components/termsAndConditionsPopup";


const window = Dimensions.get("window");

class SignUpScreen extends Component {


  constructor() {
    super();
    this.termsPopupRef = createRef();
  }

  state = {
    termsAccepted: false,
  };

  handleCheckBox = () => this.setState({ termsAccepted: !this.state.termsAccepted });

  showTermsConditionsPopup = () => this.termsPopupRef.current.open();

  navigateToLogin = () => this.props.navigation.navigate("Login");


  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <ImageBackground
          source={require("../../assets/signup_background.png")}
          style={styles.imageBackground}>
          <View style={styles.fadedLayer}>
            <ScrollView>
              <View
                style={{
                  alignItems: "center",
                  marginStart: 40,
                  marginEnd: 40,
                }}>
                <Text style={styles.headerText}>SIGN UP</Text>

                <CustomInputText
                  hint="Name"
                  marginTop={55}
                />

                <CustomInputText
                  hint="Email Address"
                  marginTop={18}
                />

                <CustomInputText
                  hint="Password"
                  marginTop={18}
                  showEyeIcon={true}
                />

                <CustomInputText
                  hint="Select Gender"
                  marginTop={18}
                />

                <CustomInputText
                  hint="Select your country"
                  marginTop={18}
                />

                <CustomGradientButton
                  text={"Create Account"}
                  marginTop={28}
                  //onPress={this.navigateToLogin}
                />

                <Text
                  style={styles.haveAccountSentence}
                  onPress={this.navigateToLogin}>
                  Have an account?{" "}
                  <Text style={styles.signInText}>{" "}SIGN IN</Text>
                </Text>

                <View style={styles.termsConditionsLayout}>
                  <TermsConditionsCheckBox
                    selected={this.state.termsAccepted}
                    onPress={this.handleCheckBox}
                  />
                  <Text style={styles.termsConditionsText}> I agree to{" "}
                    <Text
                      onPress={this.showTermsConditionsPopup}
                      style={{ textDecorationLine: "underline" }}>terms & conditions</Text>
                  </Text>
                </View>

              </View>

              <ImageBackground
                style={styles.blurLayout}
                source={require("../../assets/signup_blur.png")}>

                <Text style={styles.signUpWithText}>SIGN UP WITH</Text>

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

            <TermsAndConditionsPopup reference={this.termsPopupRef} />


          </View>
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
    backgroundColor: "rgba(0,0,0,0.3)",
  },
  headerText: {
    color: Colors.white,
    fontSize: 22,
    fontWeight: "700",
    marginTop: window.height * 0.11,
  },
  haveAccountSentence: {
    marginTop: 25,
    color: Colors.white,
    fontSize: 16,
    fontWeight: "400",

  },
  signInText: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: "700",

  },
  termsConditionsLayout: {
    marginTop: 20,
    flexDirection: "row",
  },
  termsConditionsText: {
    marginStart: 10,
    fontSize: 16,
    fontWeight: "400",
    color: Colors.white,
  },
  blurLayout: {
    height: 110,
    width: "100%",
    alignItems: "center",
    marginTop: 24,
    marginBottom: 30,
  },
  signUpWithText: {
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

export default SignUpScreen;
