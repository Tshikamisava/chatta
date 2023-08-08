import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import ChatComponents from '../components/ChatComponents'
import ChatInputComponent from '../components/ChatInputComponent'

const ChatScreen = () => {
  return (
    <View style={styles.container}>
     <ChatComponents />
     <View style={styles.inputs}>
     <ChatInputComponent />
     </View>
    
    </View>
  )
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#26394D',
        flex: 1,
        overflow: 'hidden',
        paddingBottom: 60,
    },
    inputs: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        height: 60,
      
    }
})
export default ChatScreen