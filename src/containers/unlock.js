import React, { Component } from "react";

import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  Dimensions, ScrollView, Image, TouchableOpacity,
} from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import CustomGradientButton from "../components/gradiantButton";
import LinearGradient from "react-native-linear-gradient";
import { AuthContext } from "../context";


const window = Dimensions.get("window");


class UnlockScreen extends Component {

  static contextType = AuthContext;

  render() {

    const { login } = this.context

    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <LinearGradient
          style={styles.gradiantLayer}
          start={{ x: 0.5, y: 0 }}
          end={{ x: 0.5, y: 1 }}
          colors={["rgba(0, 51, 128, 1)", "rgba(73, 0, 167, 0.82)"]}>

          <View
            style={styles.contentLayer}>


            <TouchableOpacity
              style={styles.closeContainer}
              onPress={() => this.navigateToSignUp}>
              <Image
                source={require("../../assets/close_icon.png")}
                style={styles.closeImage} />

            </TouchableOpacity>

            <Text style={styles.headerText}>Unlock</Text>


            <ScrollView
              style={styles.scrollLayer}>

              <View>
                <View
                  style={styles.rowContainer}>

                  <Image
                    source={require("../../assets/circle_checked_icon.png")}
                    style={styles.checkedImage} />

                  <Text
                    style={styles.rowContentText}>
                    Lorem Ipsum is simply dummy text of
                    the printing and typesetting industry.</Text>

                </View>


                <View
                  style={styles.rowContainer}>

                  <Image
                    source={require("../../assets/circle_checked_icon.png")}
                    style={styles.checkedImage} />

                  <Text
                    style={styles.rowContentText}>
                    Lorem Ipsum is simply dummy text of
                    the printing and typesetting industry.
                    Lorem Ipsum has been the industry's
                    standard dummy text ever since the
                    1500s,</Text>

                </View>

                <View
                  style={styles.rowContainer}>

                  <Image
                    source={require("../../assets/circle_checked_icon.png")}
                    style={styles.checkedImage} />

                  <Text
                    style={styles.rowContentText}>
                    Lorem Ipsum is simply dummy text of
                    the printing and typesetting industry.</Text>

                </View>


                <View
                  style={styles.rowContainer}>

                  <Image
                    source={require("../../assets/circle_checked_icon.png")}
                    style={styles.checkedImage} />

                  <Text
                    style={styles.rowContentText}>
                    Lorem Ipsum is simply dummy text of
                    the printing and typesetting industry.
                    Lorem Ipsum has been the industry's
                  </Text>

                </View>

                <View
                  style={styles.rowContainer}>

                  <Image
                    source={require("../../assets/circle_checked_icon.png")}
                    style={styles.checkedImage} />

                  <Text
                    style={styles.rowContentText}>
                    Lorem Ipsum is simply dummy text of
                    the printing and typesetting industry.</Text>

                </View>


                <View
                  style={styles.rowContainer}>

                  <Image
                    source={require("../../assets/circle_checked_icon.png")}
                    style={styles.checkedImage} />

                  <Text
                    style={styles.rowContentText}>
                    Lorem Ipsum is simply dummy text of
                    the printing and typesetting industry.
                    Lorem Ipsum has been the industry's
                  </Text>

                </View>


              </View>

            </ScrollView>


            <View
              style={styles.bottomLayer}>


              <Text
                style={styles.daysFreeText}>
                Try 7 days for free
              </Text>

              <Text
                style={styles.amountPerYearText}>
                3,650.00 per year after FREE 7-days trial
              </Text>

              <CustomGradientButton
                text="Continue"
                marginTop={window.height * 0.03}
                marginBottom={window.height * 0.045}
                onPress={()=> login()}
              />
            </View>

          </View>

        </LinearGradient>
      </View>
    );
  }
}


const styles = StyleSheet.create({

  gradiantLayer: {
    width: "100%",
    height: "100%",
  },
  contentLayer: {
    flex: 1,
    marginStart: 24,
    marginEnd: 24,
    marginTop: window.height * 0.1,
  },
  headerText: {
    color: Colors.white,
    fontSize: 22,
    fontWeight: "700",
    alignSelf: "center",

  },
  closeContainer: {
    width: 24,
    height: 24,
    position: "absolute",
    right: 0,
    // alignSelf: "flex-end",

  },
  subHeaderText: {
    color: Colors.white,
    fontSize: 16,
    fontWeight: "400",
    marginTop: 6,
  },

  scrollLayer: {
    height: "100%",
    marginTop: window.height * 0.05,
  },

  rowContainer: {
    marginTop: 20,
    flexDirection: "row",
  },

  checkedImage: {
    resizeMode: "stretch",
    width: 22,
    height: 22,
  },

  rowContentText: {
    flex: 1,
    marginEnd: 12,
    marginStart: 16,
    fontSize: 16.5,
    fontWeight: "400",
    color: Colors.white,
    lineHeight: 19.2,
  },

  bottomLayer: {
    marginStart: 12,
    marginEnd: 12,
    alignItems: "center",
  },

  daysFreeText: {
    marginTop: 20,
    fontSize: 16,
    fontWeight: "500",
    color: Colors.white,
  },

  amountPerYearText: {
    marginTop: 20,
    fontSize: 14,
    fontWeight: "400",
    color: Colors.white,
  },

});

export default UnlockScreen;
