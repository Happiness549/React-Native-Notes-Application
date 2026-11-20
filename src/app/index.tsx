import { Text, View, StyleSheet } from "react-native";
import Landing from "./Landing";

export default function Index() {
  return (
    <View style={styles.container}>
      
      <Landing/>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#010709",
    flex: 1,
    
  },
});
