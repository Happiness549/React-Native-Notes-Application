import { useRouter } from "expo-router";
import { Text, StyleSheet, TextInput,ScrollView, Pressable, View, KeyboardAvoidingView, StatusBar } from 'react-native'
import { useState, useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import CustomInput from "@/components/CustomInput";
import { validateInput } from "../../utils/inputValidation";
import asyncStorage from '@react-native-async-storage/async-storage'


export default function Login (){
    const router = useRouter();

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [message, setMessage] = useState<string>('');
    const [errors, setErrors] = useState({
        email: "",
        password: "",
    });

    useEffect(() =>{
        
    }, [])

    const handleInput = (stateName: keyof typeof errors, type: string, value: string) => {
    const result = validateInput(type, value);

        setErrors((prev) => ({
            ...prev,
            [stateName]: result.error ?? "",
        }));
    };

    const handleLogin = async () => {
    try {
        const result = await asyncStorage.getItem('reg');

        if (result !== null) {
            const user = JSON.parse(result);

            if (email === user.email && password === user.password) {
                router.replace('/Home');
            } else {
                setMessage('Invalid email or password.');
            }
        } else {
            setMessage('No registered user found.');
        }
    } catch (error) {
        setMessage('Something went wrong.');
    }
};

    
    return(
    <SafeAreaView style={styles.container}>
        <KeyboardAvoidingView behavior='padding'>
             <ScrollView contentContainerStyle={styles.scrollView}>
                <View style={styles.pinkCircle} />
                <View style={styles.purpleCircle} />
                <Text style={styles.formTitle}>Welcom back </Text> 
                
                
                <CustomInput
                    name="Email"
                    onChange={setEmail}
                    onBlur={() => handleInput('email', 'email', email)}
                    error={errors.email}
                />
                <CustomInput
                    name="Password"
                    onChange={setPassword}
                    onBlur={() => handleInput('password', 'password', password)}
                    error={errors.password}
                />
                
                
                <Pressable style={styles.button} onPress={handleLogin}> 
                    <Text style={styles.buttonText}>Submit</Text>
                </Pressable>
                <Text>{message}</Text>

                <View style={styles.buttons}>
                    <Pressable  onPress={() => router.push("/Register")} >
                      <Text>New here? </Text>
                      <Text style={styles.texts}>Create an account</Text>  
                    </Pressable>
                </View>
                

              
                <StatusBar/>

            </ScrollView>    
        </KeyboardAvoidingView>
    </SafeAreaView>
    )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF4F7",
    flex: 1,
    paddingHorizontal: 20,  
  },
  pinkCircle: {
    position: 'absolute',
    width: 290,
    height: 290,
    borderRadius: 150,
    backgroundColor: '#FCE1ED',
    top: -30,
    left: -80,
  },

  purpleCircle: {
    position: 'absolute',
    width: 220,
    height: 220,
    borderRadius: 120,
    backgroundColor: '#F0E5FA',
    top: 125,
    right: -80,
  },
  scrollView: {
    gap: 15,
    paddingVertical: 20,


  },
  formTitle: {
    fontSize: 36,
    marginVertical: 10,
    color: '#D92E72'
  },
  inputContainer: {
    gap: 5
  },
  input:{
    borderRadius: 0.8,
    borderColor: '#BDBDBD',
    padding: 5,
    paddingHorizontal: 10,
    color: '#BDBDBD',
    borderWidth: 0.8
  },
  button: {
    backgroundColor: '#D52E72',
    padding: 15,
    marginTop: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    textTransform: 'uppercase'
  },
  buttons: {
    display: 'flex',
  },
  texts: {
    color: '#D92E72',
     fontWeight: 'bold',
  }
});