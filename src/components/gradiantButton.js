
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import AppColors from "../config/colors";
import { Colors } from "react-native/Libraries/NewAppScreen";


function CustomGradientButton(props) {

  TouchableOpacity.defaultProps = { activeOpacity: 0.7 };

  return (
      <TouchableOpacity
        style={{
          height: 55,
          width: '100%',
          marginTop: props.marginTop,
          marginBottom: props.marginBottom,
        }}
      onPress={props.onPress}>
        <LinearGradient
          style={styles.linearGradient}
          start={{ x: 0, y: 0.5 }}
          end={{ x: 1, y: 0.5 }}
          colors={[ AppColors.mariner, AppColors.bostonBlue, AppColors.pictonBlue]} >

          <Text style={styles.text}>{props.text}</Text>
        </LinearGradient>
      </TouchableOpacity>
  );
}

const styles = StyleSheet.create({

  linearGradient: {
    flex: 1,
    justifyContent: "center",
    borderRadius: 5,
    height: '100%',
    width: '100%',
  },
  text: {
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'center',
    color: Colors.white,
    backgroundColor: 'transparent',
  },
});

export default CustomGradientButton;
