import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { darkGray } from "../../Theme/colors";
import Icon from "react-native-vector-icons/AntDesign";
import MaterialIcon from "react-native-vector-icons/MaterialIcons";

const ScreenTitle = ({
  title,
  logout,
  backButton,
  onBackPress,
  titleStyle,
  titleHidden,
  onLogoutPress,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.leftContainer}>
        {logout && !backButton ? <View style={{ width: 28 }} /> : null}
        {backButton ? (
          <Pressable style={styles.iconContainer} onPress={onBackPress}>
            <Icon name={"left"} size={20} />
          </Pressable>
        ) : null}
      </View>
      <Text
        style={[
          styles.titleStyle,
          titleStyle ? titleStyle : {},
          titleHidden && { color: "transparent" },
        ]}
      >
        {title}
      </Text>

      <View style={styles.rightContainer}>
        {backButton && !logout ? <View style={{ width: 28 }} /> : null}
        {logout ? (
          <Pressable onPress={onLogoutPress} hitSlop={5}>
            <MaterialIcon name="logout" size={28} color={darkGray} />
          </Pressable>
        ) : null}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  titleStyle: {
    fontSize: 26,
    fontWeight: "bold",
    color: darkGray,
    flexWrap: "wrap",
    marginBottom: 10,
    marginTop: 15,
    maxWidth: 220,
    textAlign: "center",
  },
  leftContainer: {
    justifyContent: "center",
    marginLeft: 15,
  },
  rightContainer: {
    justifyContent: "center",
    marginRight: 15,
  },
  iconContainer: { width: 28, height: 28 },
});
export default ScreenTitle;
