import React, { useContext, useState } from "react";
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from "react-native";
import InputField from "../Components/Shared/InputField";
import WideButton from "../Components/Shared/WideButton";
import AuthContext from "../Contexts/AuthContext";
import { loginUser } from "../Services/AuthService";

const Login = (props) => {
  const { width, height } = useWindowDimensions();
  const [username, setUsername] = useState("ivaldi");
  const [password, setPassword] = useState("testtest");
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const authContext = useContext(AuthContext);

  const login = async () => {
    setIsLoading(true);
    setError(null);
    if (username.trim().length === 0 || password.trim().length === 0) {
      console.log("asdasd");
      setError("Please fill in all fields");
      setIsLoading(false);
      return;
    }
    setIsLoading(true);
    const response = await loginUser(username, password).catch((err) => {
      console.log(err);
    });
    if (response === "success") {
      authContext.setIsLoggedIn(true);
    } else {
      setError("Invalid credentials");
      setIsLoading(false);
    }
    setIsLoading(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="white" />
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? 0 : 50}
      >
        <ScrollView
          contentContainerStyle={{
            alignItems: "center",
            alignSelf: "center",
            justifyContent: "center",
            flex: 1,
          }}
        >
          <InputField
            placeholder={"Username"}
            value={username}
            onChangeText={(text) => {
              setUsername(text);
            }}
            style={{ marginBottom: 20 }}
            autoCapitalize={"none"}
            autoComplete="off"
          />

          <InputField
            placeholder={"Password"}
            value={password}
            onChangeText={(text) => {
              setPassword(text);
            }}
            autoCapitalize={"none"}
            secureTextEntry={true}
          />
          {error ? (
            <View style={styles.errorContainer}>
              <Text style={styles.errorTextStyle}>{error}</Text>
            </View>
          ) : null}
          <WideButton
            title={"Login"}
            isLoading={isLoading}
            style={styles.buttonStyle}
            onPress={login}
          />
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  buttonStyle: { marginTop: 70 },
  logoStyle: {
    resizeMode: "contain",
    marginBottom: 40,
    marginTop: 60,
  },
  upperContent: {
    width: "100%",
    paddingHorizontal: 20,
    alignItems: "center",
    backgroundColor: "red",
    alignSelf: "center",
    justifyContent: "center",
  },
  errorContainer: { width: "100%", alignItems: "flex-start" },
  errorTextStyle: { color: "red" },
});

export default Login;
