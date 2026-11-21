import { SafeAreaView } from 'react-native-safe-area-context'
import { Text, StyleSheet, TextInput,ScrollView, Pressable, View, KeyboardAvoidingView, StatusBar } from 'react-native'
import { useState, useEffect } from 'react'
import { useRouter } from "expo-router";
import CustomInput from '@/components/CustomInput';
import { validateInput } from '../../utils/inputValidation';
import { ValidationResult } from '../../utils/inputValidation';
import asyncStorage from '@react-native-async-storage/async-storage'

type Errors = {
    firstName?: ValidationResult;
    surname?: ValidationResult;
    email?: ValidationResult;
    password?: ValidationResult;
};


export default function Register (){
     const router = useRouter();

    const [firstName, setFirstName] = useState<string>('');
    const [surname, setSurname] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [errors, setErrors] = useState<Errors>({});
    const [message, setMessage] = useState<string>('');
    useEffect(() =>{
        
    }, [])

    
    const onHandleSubmit = async() => {
      try {
        await asyncStorage.setItem('reg', JSON.stringify({firstName,surname, email, password}));
        setMessage('Registration successful! You can now login.');
      } catch (error) {
        setMessage('Registration failed. Please try again.');
      }
      

    }

    const handleOnGetData = async () => {
        const result = await asyncStorage.getItem('reg');

        if (result !== null) {
            const data = JSON.parse(result);
            console.log(data);
        }
    };


    const handleInput = (stateName: keyof Errors, type: string, value: string) => {
    setErrors(prev => ({
        ...prev,
        [stateName]: validateInput(type, value)
    }));
};

 
    return(
    <SafeAreaView style={styles.container}>
        <KeyboardAvoidingView behavior='padding'>
             <ScrollView contentContainerStyle={styles.scrollView}>
               <View style={styles.pinkCircle} />
               <View style={styles.purpleCircle} />
                <Text style={styles.formTitle}>Registration Form</Text>
                <CustomInput name={'Name'} 
                onChange={setFirstName}
                onBlur={() => handleInput('firstName', 'string', firstName)}
                error={errors?.firstName?.error ?? ""}/>
                
                <CustomInput 
                name={'Surname'} 
                onChange={setSurname}
                onBlur={() => handleInput('surname', 'string', surname)}
                error={errors?.surname?.error ?? ""}
                />

                <CustomInput
                    name="Email"
                    onChange={setEmail} 
                    onBlur={() => handleInput('email', 'string', email)}
                    error={errors?.email?.error ?? ""}
                />

                <CustomInput
                    name="Password"
                    onChange={setPassword}
                    onBlur={() => handleInput('password', 'password', password)}
                    error={errors?.password?.error || errors?.password?.error }   
                />
                
                
                <Pressable style={styles.button} onPress={onHandleSubmit}> 
                    <Text style={styles.buttonText}>Submit</Text>
                </Pressable>
                <Text>{message}</Text>

                 <Pressable  onPress={() => router.push("/Login")} >
                                   <Text >Don't have an account? </Text>
                                   <Text style={styles.texts}>Login</Text>  
                              </Pressable>
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
  label:{
    color: '#BDBDBD'
  },
  
  button: {
    backgroundColor: '#D92E72',
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
    flexDirection: 'row'
  },
  texts: {
    color: '#D92E72'
  }
});