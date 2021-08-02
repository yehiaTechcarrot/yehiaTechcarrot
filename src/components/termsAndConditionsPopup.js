import {
  Dimensions,
  Image, ScrollView,
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

const TermsAndConditionsPopup = ({ reference }) => {

  return (
    <RBSheet
      ref={reference}
      height={(window.height * 2) / 3}
      openDuration={250}
      customStyles={{ container: styles.bottomSheetContainer }}>

      <LinearGradient
        style={styles.linearGradiant}
        start={{ x: 0, y: 0.5 }}
        end={{ x: 1, y: 0.5 }}
        colors={[AppColors.mariner, AppColors.bostonBlue]}>

        <View
          style={styles.container}>
          <View
            style={styles.headerView}>
            <Text
              style={styles.termsAndConditionsText}>Terms and Condition</Text>

            <TouchableOpacity
              style={styles.closeContainer}
              onPress={() => reference.current.close()}>
              <Image
                source={require("../../assets/close_icon.png")}
                style={styles.closeImage} />

            </TouchableOpacity>

          </View>

          <ScrollView>

            <View>
              <Text
                style={styles.termsTitle}>Terms Title</Text>

              <Text
                style={styles.termsContentText}>
                Lorem Ipsum is simply dummy text of the printing
                and typesetting industry.{"\n \n"}
                Lorem Ipsum has been the industry's standard
                dummy text ever since the 1500s, when an
                unknown printer took a galley of type and
                scrambled it to make a type specimen book.</Text>

              <Text
                style={styles.conditionTitle}>Condition Title</Text>

              <View
                style={styles.rowConditionContainer}>

                <View
                  style={styles.whiteBox} />

                <Text
                  style={styles.conditionContentText}>
                  Lorem Ipsum is simply dummy text of the
                  printing and typesetting industry.</Text>

              </View>


              <View
                style={styles.rowConditionContainer}>

                <View
                  style={styles.whiteBox} />

                <Text
                  style={styles.conditionContentText}>
                  Lorem Ipsum is simply dummy text of the
                  printing and typesetting industry.</Text>

              </View>

              <View
                style={styles.rowConditionContainer}>

                <View
                  style={styles.whiteBox} />

                <Text
                  style={styles.conditionContentText}>
                  Lorem Ipsum is simply dummy text of the
                  printing and typesetting industry.</Text>

              </View>


            </View>
          </ScrollView>


          <TouchableOpacity
            style={styles.buttonLayout}>
            <View
              style={styles.buttonContainer}>

              <Text style={styles.buttonText}>Accept</Text>
            </View>
          </TouchableOpacity>

        </View>


      </LinearGradient>

    </RBSheet>
    //  </View>
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
    flex: 1,
    marginTop: 30,
    marginBottom: 24,
    marginStart: 20,
    marginEnd: 10,
  },

  headerView: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  closeContainer: {
    width: 35,
    height: 35,
  },

  closeImage: {
    resizeMode: "stretch",
    width: 18,
    height: 18,

  },

  termsAndConditionsText: {
    fontSize: 17,
    fontWeight: "500",
    color: Colors.white,
  },

  termsTitle: {
    fontSize: 18,
    marginTop: 8,
    fontWeight: "700",
    color: Colors.white,
  },

  termsContentText: {
    marginEnd: 20,
    fontSize: 14,
    marginTop: 8,
    fontWeight: "400",
    color: "rgba(255,255,255,0.7)",
    lineHeight: 20,
  },

  conditionTitle: {
    fontSize: 16,
    marginTop: 16,
    fontWeight: "700",
    color: Colors.white,
  },

  rowConditionContainer: {
    marginTop: 16,
    flexDirection: "row",
    alignItems: "center",
  },

  whiteBox: {
    width: 8,
    height: 8,
    marginStart: 16,
    backgroundColor: Colors.white,
  },

  conditionContentText: {
    flex: 1,
    marginEnd: 16,
    marginStart: 16,
    fontSize: 14,
    fontWeight: "400",
    color: "rgba(255,255,255,0.7)",
  },

  buttonLayout: {
    height: 55,
    marginTop: 24,
    marginStart: 16,
    marginEnd: 16,
    marginBottom: 8,
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


export default TermsAndConditionsPopup;


