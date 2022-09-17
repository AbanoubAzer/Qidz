import React from "react";
import { StyleSheet } from "react-native";
import { Input } from "react-native-elements";

const InputField = (props) => {
  return (
    <Input
      {...props}
      placeholder={props.placeholder}
      value={props.value}
      onChangeText={props.onChangeText}
      style={[props.textStyle ? props.textStyle : {}]}
      placeholderTextColor="#ABB4BD"
      inputContainerStyle={styles.textInputContainerStyle}
      containerStyle={[props.style ? props.style : {}]}
      secureTextEntry={props.secureTextEntry}
      autoCorrect={false}
      labelStyle={styles.labelStyle}
    />
  );
};

const styles = StyleSheet.create({
  textInputStyle: {
    borderColor: "black",
    borderWidth: 1,
  },
  textInputContainerStyle: {
    width: "100%",
    borderBottomColor: "rgba(171, 180, 189, 0.3)",
  },
  labelStyle: { fontSize: 14, fontWeight: "normal", textAlign: "left" },
});

export default InputField;
