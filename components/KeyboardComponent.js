import { View, Text, StyleSheet, TouchableOpacity, Image, Dimensions, TextInput } from 'react-native';
import EmojiPicker, { EmojiKeyboard } from 'rn-emoji-keyboard';
import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native-gesture-handler';
import { EvilIcons, Ionicons, MaterialIcons } from '@expo/vector-icons';

const KeyboardComponent = ({ isBoardVisible, handleGif, handleEmoji }) => {
    const [emoji, setEmoji] = useState('');
    const [showEmoBoard, setShowEmoBoard] = useState(false);
    const [gifs, setGifs] = useState([]);
    const [showSearchInput, setShowSearchInput] = useState(false);
    const [showGifBoard, setShowGifBoard] = useState(true);
    //const [selectedGif, setSelectedGif] = useState('');
    const [query, setQuery] = useState('')

    const captureEmoji = (ev) => {
        console.log(ev);
        setEmoji(ev.emoji);
    };
    //console.log(selectedGif);
    useEffect(() => {
        fetch('https://api.giphy.com/v1/gifs/trending?api_key=fCGXYN6uGrho7kuwLJW4VqrM99thweBN&q=')
            .then(res => res.json())
            .then(res => {
                console.log(res);
                setGifs(res.data);
            });
    }, []);
    
    useEffect(() => {
        fetch('https://api.giphy.com/v1/gifs/search?api_key=fCGXYN6uGrho7kuwLJW4VqrM99thweBN&q='+query)
                .then(res => res.json())
                .then(res => {
                    setGifs(res.data)
                })
    }, [query])
    return (
        <>
            {isBoardVisible && (
                <View style={styles.container}>
                    {
                    showEmoBoard && (
                        <EmojiKeyboard
                            onEmojiSelected={handleEmoji}
                            enableSearchBar
                            styles={{
                                container: {
                                    borderRadius: 0,
                                },
                            }}
                        />
                    )}
                    {showGifBoard && (
                        <FlatList
                            data={gifs}
                            numColumns={3}
                            renderItem={(item) => (
                                <View style={styles.gifCont}>
                                    <TouchableOpacity
                                        onPress={() => handle(item.item.images.original.url)}
                                    >
                                        <Image
                                            source={{ uri: item.item.images.original.url }}
                                            style={styles.gif}
                                        />
                                    </TouchableOpacity>
                                </View>
                            )}
                        />
                    )}

                    {!showSearchInput ? (
                        <View style={styles.keyboardToggle}>
                            <View style={styles.searchIcon}>
                                <TouchableOpacity onPress={() => setShowSearchInput(true)}>
                                    <MaterialIcons name="search" size={24} color={'white'} style={[styles.icon]} />
                                </TouchableOpacity>
                            </View>
                            <TouchableOpacity onPress={() => { setShowEmoBoard(true); setShowGifBoard(false); }}>
                                <MaterialIcons name="emoji-emotions" size={24} color={'white'} style={styles.icon} />
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => { setShowEmoBoard(false); setShowGifBoard(true); }}>
                                <MaterialIcons name="gif" size={24} color={'white'} style={styles.icon} />
                            </TouchableOpacity>
                        </View>
                    ) : (
                        <View style={styles.keyboardToggle}>
                           <TextInput placeholder="Search" style={styles.input} onChangeText={text => setQuery(text)} />

                            <View style={styles.closeIcon}>
                                <TouchableOpacity onPress={() => setShowSearchInput(false)}>
                                    <EvilIcons name="close" size={24} color="rgb(230, 230, 230)" />
                                </TouchableOpacity>
                            </View>
                        </View>
                    )}
                </View>
            )}
        </>
    );
};

export default KeyboardComponent;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        maxHeight: '40%',
    },
    keyboardToggle: {
        height: 50,
        flexDirection: "row",
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    searchIcon: {
        position: 'absolute',
        left: 0,
    },
    icon: {
        margin: 10,
    },
    gifCont: {
        height: 110,
        padding: 5,
        width: '33%',
    },
    gif: {
        height: 100,
        width: (Dimensions.get('window').width  - 30) / 3,
    },
    input: {
        height: 46,
        backgroundColor: 'rgb(50, 50, 50, 0.1)',
        width: '100%',
        padding: 10,
        color: "rgb(200, 200, 200)",
    },
    closeIcon: {
        position: 'absolute',
        right: 10,
        top: 10,
    },
});
