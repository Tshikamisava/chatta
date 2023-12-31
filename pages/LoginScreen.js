import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity, TextInput, Alert } from "react-native";
import * as yup from 'yup';

export default function App(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const schema = yup.object().shape({
        email: yup.string().email('Enter a valid email').required('Email is required'),
        password: yup.string().required('Password is required')
    });

    const handleSubmit = async () => {
        try {
            await schema.validate({ email, password }, { abortEarly: false });
           
        } catch (error) {
            const validationErrors = error.inner.reduce((acc, err) => {
                acc[err.path] = err.message;
                return acc;
            }, {});
            
            console.log('Validation errors:', validationErrors);
    
            Alert.alert('Form error', 'Form has invalid inputs', [
                { text: 'OK', onPress: () => console.log('OK pressed') }
            ]);
        }
    }
    

    return (
        <View style={styles.container}>
            <View style={styles.topContainer}>
                <Text style={styles.appName}>Chatta</Text>
            </View>
            <View style={styles.bottomContainer}>
                <View style={styles.innerContainer}>
                    <View style={styles.inputContainer}>
                        <TextInput
                            style={styles.textInput}
                            placeholder="Email"
                            onChangeText={text => setEmail(text)}
                        />
                        <TextInput
                            style={styles.textInput}
                            placeholder="Password"
                            onChangeText={text => setPassword(text)}
                            secureTextEntry
                        />
                    </View>
                    <View style={styles.actionContainer}>
                        <TouchableOpacity
                            style={styles.actionButton}
                            onPress={()=> handleSubmit()}
                        >
                            <Text style={styles.signIn}>Sign In</Text>
                        </TouchableOpacity > 
                        <View style={styles.signUpOpt}>
                            <Text style={styles.noAccText}> No account?</Text>
                            <Text style={styles.signUpText} title="SignUp"
                            onPress={() => props.navigation.navigate('Register')}>
                              Sign Up</Text>
                        </View>
                        <View style={styles.forgotPasswordCont}>
                            <Text style={styles.forgotPasswordText}>Forgot Password</Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    paddingVertical: 80,
    padding: 80,
    alignItems: "center",
    backgroundColor: "#26394D",
  },
  topContainer: {
    flex: 1.2,
    justifyContent: "center",
    width: "100%",
    alignItems: "center",

  },
  appName: {
    fontFamily: "berkshire",
    fontSize: 54,
    color: "#FFF",
  },
  bottomContainer: {
    flex: 2.8,
    justifyContent: "center",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  innerContainer: {
    height: 320,
    backgroundColor: "#FFF",
    borderRadius: 25,
    width: 320,
    padding: 20,
  },
  inputContainer: {
   height: 120,
  },
  textInput: {
    borderRadius: 15,
    height: 46,
    borderColor: "#1EA0E5",
    borderWidth: 1,
    marginVertical: 10,
    padding: 10,
  },
  actionContainer: {
   height: 140,
   top: 20,
  },
  actionButton: {
    color:'#FFF',
    backgroundColor: "#1EA0E5",
    borderRadius: 15,
    height: 46,
    justifyContent: 'center',
    alignItems: 'center',
  },
  signIn: {
    color: '#FFF',
    fontSize: 17,
    fontWeight: 'bold'
  },
  signUpOpt: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,

  },
  noAccText: {

  },
  signUpText: {
    color: '#1EA0E5',
    fontSize: 16,
    fontWeight: 'bold',
    padding: 10
  },
  forgotPasswordCont: {
    alignItems: 'center',
  },
  forgotPassordText: {
    color: '#1EA0E5',
    fontSize: 16,
    fontWeight: 'bold'
  }
});
