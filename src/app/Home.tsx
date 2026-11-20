import { View, Text, StyleSheet, Pressable } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';


export default function Home() {
    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Text style={styles.title}>Petal Notes!</Text>
                <TextInput style={styles.input}></TextInput>
            </View>

            <Pressable style={styles.button}>
            <Ionicons name="add" size={25} color="white" />
            </Pressable>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF3F7',
        padding: 20,
    },
    title: {
        fontSize: 30,
        color: '#CF2F6F',
        fontWeight: 'bold',
    },
    input: {
        borderRadius: 5,
        borderColor: '#BDBDBD',
        padding: 5,
        paddingHorizontal: 10,
        color: '#BDBDBD',
        borderWidth: 0.8,
    },
    button: {
    backgroundColor: "#CF2F6F",
    borderRadius: 25,
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    bottom: 120,
    right: 18,
  },
});