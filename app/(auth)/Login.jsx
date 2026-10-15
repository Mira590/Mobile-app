import ThemedText from "../../Component/ThemedText";
import { StyleSheet, TextInput } from "react-native";
import ThemedView from "../../Component/ThemedView";
import { Button } from "expo-router/build/react-navigation";

const Login = () => {
  return (
    <ThemedView style={styles.container}>
      <ThemedText title={true}>Login in Your Account</ThemedText>

      <TextInput
        style={styles.button}
        placeholder="Enter your email"
        placeholderTextColor="#888888"
      />
      <TextInput
        style={styles.button}
        placeholder="Enter your password"
        placeholderTextColor="#888888"
        secureTextEntry
      />
      <Button style={styles.loginButton}>Login</Button>
    </ThemedView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    width: 300,
    marginTop: 10,
    paddingHorizontal: 10,
    color: "#eee",
  },
  loginButton: {
    backgroundColor: "#fff",
    color: "#eee",
    width: 200,
    height: 40,
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },
});
