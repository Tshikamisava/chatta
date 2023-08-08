import React from 'react'
import { TouchableOpacity, StyleSheet, TextInput, Text,  View } from 'react-native'

export default function RegisterScreen({navigation}) {
   
  return (
   <View style={styles.container}>
        <View style={styles.topContainer}>
            <Text style={styles.appName}>Chatta</Text>
        </View>
        <View style={styles.bottomContainer}>
            <View style={styles.innerContainer}>
            <View style={styles.inputContainer}>
            <TextInput style={styles.textInput} placeholder="Email" />
            <TextInput style={styles.textInput} placeholder="Name" />
            <TextInput style={styles.textInput} placeholder="Password" />
            <TextInput style={styles.textInput} placeholder="Confirm Password" />
            </View><br></br><br></br><br></br><br></br><br></br><br></br>
            <View style={styles.actionContainer}>
            <TouchableOpacity style={styles.actionButton}>
              <Text style={styles.signUp}>Sign Up</Text>
            </TouchableOpacity>
                </View>
                <View style={styles.registeredSec}>
                    <Text style={styles.registeredText}>Registered?</Text>
                    <Text style={styles.signInText} 
                        onPress={() => navigation.navigate('Login')}
                    >Sign In</Text>
                </View>
            </View>
            </View>
            
     </View>
  
  )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: '#26394D',
        paddingVertical: 80,
        alignItems: 'center',
    },
    topContainer: {
        flex: 1.2,
        justifyContent: 'center',
        alignItems: 'center',
    
    },
    appName: {
        fontSize: 60,
        fontWeight: 'bold',
        color: '#FFF',
        fontFamily: 'berkshire',
    },
    bottomContainer: {
        flex: 2.8,
        justifyContent: 'center',
        minHeight: 420,
    },
    innerContainer: {
        height: 420,
        backgroundColor: "#FFF",
        borderRadius: 25,
        width: 320,
        padding: 20,
    },
    inputContainer: {
        flex: 3,
        padding: 10
       
    },
    textInput: {
        height: 46,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: '#1EA0E5',
        padding: 10,
        marginVertical: 10
    },
    actionContainer: {
        height: 140,
        top: 80,
        
    },
    actionButton: {
        color:'#FFF',
        backgroundColor: "#1EA0E5",
        borderRadius: 15,
        height: 46,
        justifyContent: 'center',
        alignItems: 'center',
        
        
    } ,
    signUp: {
        color: '#FFF',
        fontSize: 17,
        fontWeight: 'bold',
    },
    registeredSec: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    registeredText: {
        fontSize: 16,
    },
    signInText: {
        color: '#1EA0E5',
        fontWeight: 'bold',
        fontSize: 16,
        padding: 10

    },
        
})
