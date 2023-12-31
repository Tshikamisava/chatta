import { FlatList, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Entypo } from '@expo/vector-icons';

export default function ChatComponents() {
    const userID = 'LuckyH5345';
    
    const texts = [
        {
            text: 'Hi there', userID: userID
        },
        {
            text: 'why here', userID: 'assdgtdg4435'
        },
        {
            text: 'Why are we here?', userID: userID
        },
        {
            text: 'what is with this darkness?', userID: 'assdgtdg4435'
        },
        {
            text: 'Woah is me', userID: userID
        },
        {
            text: 'When is everything is done', userID: userID
        },
        {
            text: 'I think i need more money. This is not it, i cant be broke for such long', userID: 'assdgtdg4435'
        },
    ];
    
    const renderItem = ({item, index}) => {
        return (
            <View>
                <View style={[
                    styles.contentHolder,
                    item.userID === userID ? styles.rightContent : styles.leftContent,
                    texts[index-1]?.userID === item.userID ? { marginBottom: -5,} : null
                ]}>
                <View style={[
                    styles.textBox,
                    item.userID === userID ? styles.rightText : styles.leftText,
                    texts[index-1]?.userID === item.userID ? {  borderRadius: 15} : null
                ]}>
                    <Text style={styles.text}>{item.text}</Text>
                </View>
                <View style={styles.timeSent}>
                    <Text style={styles.whiteText}>1:36 PM</Text>
                    {
                       item.userID === userID && ( <>
                            <Entypo name="dot-single" color="#FFF" size={16} />
                            <Text style={styles.whiteText}>Sent</Text>
                        </>)
                    }
                </View>
                </View>
               
            </View>
        );
    };
    
    return (
        <View style={styles.container}>
            <FlatList
                data={texts}
                renderItem={renderItem}
                contentContainerStyle={{flexDirection: 'column-reverse'}}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    contentHolder: {
        width: 280,
        marginVertical: 10,
    },
    textBox: {
        padding: 10,
        width: 280,
       // margin: 10,
    },
    text: {
        color: '#EBEBEB',
        fontSize: 15,
    },
    rightContent: {
        alignSelf: 'flex-end'
    },
    rightText: {
        borderRadius: 15,
        borderBottomRightRadius: 0,
        backgroundColor: '#3F5973',
      
    },
    leftText: {
        borderRadius: 15,
        borderBottomLeftRadius: 0,
        backgroundColor: '#1EA0E5',
    },
    timeSent: {
        flexDirection: 'row',
        alignSelf: 'flex-end',
    },
    whiteText: {
        color: "#E4E4E4",
        fontSize: 12
    }
});
