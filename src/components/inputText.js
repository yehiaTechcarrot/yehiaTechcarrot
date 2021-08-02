import React from "react";

import { Image, TextInput, View } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";


function CustomInputText(props) {

  return (

    <View style={{
      height: 55,
      width: "100%",
      marginTop: props.marginTop,
      padding: 24,
      paddingTop: 16,
      paddingBottom: 16,
      borderWidth: 1,
      borderRadius: 5,
      alignItems: "center",
      flexDirection: "row",
      justifyContent: "center",
      borderColor: Colors.white,
      backgroundColor: "rgba(255,255,255,0.3)",
    }}>

      <TextInput
        style={{
          flex: 1,
          marginEnd: 16,
          fontSize: 16,
          fontWeight: "300",
          color: Colors.white,
        }}
        selectionColor={Colors.white}
        placeholderTextColor={Colors.white}
        placeholder={props.hint}
      />

      {props.showEyeIcon ?
        <Image
          style={{
            padding: 10,
          }}
          width={24}
          height={24}
          source={require("../../assets/active_eye_password.png")} />
        : null}

    </View>

  );
}

export default CustomInputText;
