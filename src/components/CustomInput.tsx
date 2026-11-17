import { StyleSheet, Text, View, TextInput } from "react-native";
import React from "react";

type CustomInputProps = {
    onChange: (text: string) => void;
    name: string;
};

const CustomInput = ({ onChange, name }: CustomInputProps) => {

    return(
        <View style={styles.inputContainer}>
            <Text style={styles.label}>{name}</Text>
            <TextInput
              style={styles.input}
              placeholder={name}
              placeholderTextColor={'#717171'}
              onChangeText={(text) =>{onChange(text)}}
            />
            
        </View>
    )
}

export default CustomInput

const styles = StyleSheet.create({
    inputContainer: {
        gap: 5
    },
    label: {
        color: '#BDBDBD'
    },
    input: {
        borderRadius: 5,
        borderColor: '#BDBDBD',
        padding: 5,
        paddingHorizontal: 10,
        color: '#BDBDBD',
        borderWidth: 0.8,
    }

})