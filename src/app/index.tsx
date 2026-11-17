import { Text, View, StyleSheet } from "react-native";
import Login from "./Login";

export default function Index() {
  return (
    <View style={styles.container}>
      <Login/>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#010709",
    flex: 1,
    
  },
});
