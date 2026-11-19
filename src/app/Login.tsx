import { useRouter } from "expo-router";
import { Text, StyleSheet, TextInput,ScrollView, Pressable, View, KeyboardAvoidingView, StatusBar } from 'react-native'
import { useState, useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import CustomInput from "@/components/CustomInput";
import { validateInput } from "../../utils/inputValidation";



export default function Login (){
    const router = useRouter();

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
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

    
    return(
    <SafeAreaView style={styles.container}>
        <KeyboardAvoidingView behavior='padding'>
             <ScrollView contentContainerStyle={styles.scrollView}>
                <Text style={styles.formTitle}>Registration Form</Text> 
                
                <CustomInput
                    name="Email"
                    onChange={setEmail}
                    onBlur={() => handleInput('email', 'email', email)}
                    error={errors.email}
                />
                <CustomInput
                    name="Password"
                    onChange={setPassword}
                    onBlur={() => handleInput('password', 'string', password)}
                    error={errors.password}
                />
                
                
                <Pressable style={styles.button}> 
                    <Text style={styles.buttonText}>Submit</Text>
                </Pressable>
                <View style={styles.buttons}>
                    <Pressable  onPress={() => router.push("/Register")} >
                      <Text style={styles.text}>Don't have an account? </Text>
                      <Text style={styles.texts}>Sign up</Text>  
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
    backgroundColor: "#010709",
    flex: 1,
    paddingHorizontal: 20,  
  },
  scrollView: {
    gap: 15,
    paddingVertical: 20,


  },
  formTitle: {
    fontSize: 36,
    marginVertical: 10,
    color: '#BDBDBD'
  },
  inputContainer: {
    gap: 5
  },
  label:{
    color: '#BDBDBD'
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
    backgroundColor: '#306A6B',
    padding: 15,
    marginTop: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: '#BDBDBD',
    textAlign: 'center',
    textTransform: 'uppercase'
  },
  buttons: {
    display: 'flex',
    flexDirection: 'row'
  },
  text: {
    color: '#BDBDBD'
  },
  texts: {
    color: '#306A6B'
  }
});