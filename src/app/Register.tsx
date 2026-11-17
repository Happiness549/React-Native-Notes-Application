import { SafeAreaView } from 'react-native-safe-area-context'
import { Text, StyleSheet, TextInput,ScrollView, Pressable, View, KeyboardAvoidingView, StatusBar } from 'react-native'
import { useState, useEffect } from 'react'
import { useRouter } from "expo-router";
import CustomInput from '@/components/CustomInput';

export default function Register (){
     const router = useRouter();

    const [name, setName] = useState<string>('');
    const [surname, setSurname] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    useEffect(() =>{
        
    }, [])

    return(
    <SafeAreaView style={styles.container}>
        <KeyboardAvoidingView behavior='padding'>
             <ScrollView contentContainerStyle={styles.scrollView}>
                <Text style={styles.formTitle}>Registration Form</Text>
                <CustomInput name={'Name'} onChange={setName}/>
                <CustomInput name={'Surname'} onChange={setSurname}/>
                <CustomInput name={'Email'} onChange={setEmail}/>
                <CustomInput name={'Password'} onChange={setPassword}/>
                
                
                <Pressable style={styles.button}> 
                    <Text style={styles.buttonText}>Submit</Text>
                </Pressable>

                 <Pressable  onPress={() => router.push("/Login")} >
                                   <Text style={styles.text}>Don't have an account? </Text>
                                   <Text style={styles.texts}>Sign up</Text>  
                              </Pressable>
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