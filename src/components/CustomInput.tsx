import { StyleSheet, Text, View, TextInput, type TextInputProps } from "react-native";
import React from "react";

type CustomInputProps = {
    onChange: (text: string) => void;
    name: string;
    error?: string | string[] | null;
    onBlur?: TextInputProps['onBlur'];
};



const CustomInput = ({ onChange, name, error, onBlur }: CustomInputProps) => {
    if(name === "password"){
    console.log({error, type: typeof error})
}

    return(
        <View style={styles.inputContainer}>
            <Text style={styles.label}>{name}</Text>
            <TextInput
              style={[styles.input, error && {borderColor: '#89382C'}]}
              placeholder={name}
              placeholderTextColor={'#717171'}
              onChangeText={(text) =>{onChange(text)}}
              onBlur={onBlur}
            />

            {
                error && typeof error === "string" && <Text style={styles.error}>{error}</Text>
                
            }
            {
                error && typeof error === "object" && error.map((error, index) => {
                   return <Text key={index} style={styles.error}>{error}</Text>
                
                })
            }
            
            
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
    },
    error: {
        color: '#89382C',
        marginVertical: -5
    }

})