import React from "react";


import { TouchableOpacity, Image, StyleSheet } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";


function TermsConditionsCheckBox({ selected, onPress }) {

  TouchableOpacity.defaultProps = { activeOpacity: 0.7 };

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}>

      {selected ?
        <Image
          style={{
            alignSelf: "center",
          }}
          width={10}
          height={7}
          source={require("../../assets/check.png")}
          resizeMode="stretch"
        /> : null
      }

    </TouchableOpacity>
  );
}


const styles = StyleSheet.create({
  container: {
    width: 18,
    height: 18,
    padding: 0,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: Colors.white,
    color: Colors.white,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(255,255,255,0.3)",
  },

});

export default TermsConditionsCheckBox;
