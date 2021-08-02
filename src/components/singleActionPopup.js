import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import React from "react";
import RBSheet from "react-native-raw-bottom-sheet";
import AppColors from "../config/colors";
import LinearGradient from "react-native-linear-gradient";


const window = Dimensions.get("window");

const SingleActionPopup = ({ reference, title, content, buttonText }) => {

  return (
    <RBSheet
      ref={reference}
      //height={window.height * 0.4}
      openDuration={250}
      customStyles={{ container: styles.bottomSheetContainer }}>

      <LinearGradient
        style={styles.linearGradiant}
        start={{ x: 0, y: 0.5 }}
        end={{ x: 1, y: 0.5 }}
        colors={[AppColors.mariner, AppColors.bostonBlue]}>

        <View
          style={styles.container}>

          <Text style={styles.headerText}>{title}</Text>

          <Text style={styles.contentText}>{content}</Text>

          <TouchableOpacity
            style={styles.buttonLayout}>
            <View
              style={styles.buttonContainer}>

              <Text style={styles.buttonText}>{buttonText}</Text>
            </View>
          </TouchableOpacity>

        </View>


      </LinearGradient>

    </RBSheet>
  );
};


const styles = StyleSheet.create({

  bottomSheetContainer: {
    width: "100%",
    borderRadius: 15,
    backgroundColor: Colors.transparent,
  },

  linearGradiant: {
    flex: 1,
    width: "100%",
    borderRadius: 15,
  },

  container: {
    marginTop: 45,
    marginBottom: 40,
    marginStart: 20,
    marginEnd: 10,
  },

  headerText: {
    fontSize: 22,
    fontWeight: "500",
    color: Colors.white,
    alignSelf: "center",
  },

  contentText: {
    width: "75%",
    marginTop: 18,
    fontSize: 16,
    fontWeight: "300",
    color: Colors.white,
    textAlign: "center",
    alignSelf: "center",
  },

  buttonLayout: {
    height: 55,
    marginTop: 40,
    marginStart: 16,
    marginEnd: 16,
    marginBottom: window.height * 0.043,

  },

  buttonContainer: {
    flex: 1,
    justifyContent: "center",
    borderRadius: 5,
    height: "100%",
    width: "100%",
    backgroundColor: AppColors.pictonBlue,
  },

  buttonText: {
    fontSize: 16,
    fontWeight: "500",
    textAlign: "center",
    color: Colors.white,
    backgroundColor: "transparent",
  },

});


export default SingleActionPopup;


