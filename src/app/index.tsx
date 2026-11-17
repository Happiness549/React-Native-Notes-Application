import { Text, View, StyleSheet } from "react-native";
import Register from "./Register";

export default function Index() {
  return (
    <View style={styles.container}>
      <Register/>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#010709",
    flex: 1,
    
  },
});
