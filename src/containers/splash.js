import React from "react";

import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  Dimensions,
} from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";


const window = Dimensions.get("window");

const SplashScreen = ({ navigation }) => {


  setTimeout(function() {

    navigation.navigate("SignUp");
  }, 2000);

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <ImageBackground
        source={require("../../assets/splash_background.png")}
        style={styles.imageBackground}>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            top: window.height * 0.095,
          }}>
          <Image
            source={require("../../assets/splash_header_image.png")}
            style={styles.headerImage}
          />
          <Text style={styles.headerText}>Vent it out</Text>
          <Text style={styles.contentText}>
            A life-changing personal approach
          </Text>

        </View>

      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  imageBackground: {
    width: "100%",
    height: "100%",
    resizeMode: "stretch",
  },
  headerImage: {
    resizeMode: "stretch",
    width: window.height * 0.3,
    height: window.height * 0.3,
  },
  headerText: {
    top: 20,
    color: Colors.white,
    fontSize: 36,
    fontWeight: "700",
  },
  contentText: {
    top: 30,
    color: Colors.white,
    fontSize: 17.5,
    fontWeight: "400",
    lineHeight: 21,
  },
});

export default SplashScreen;
