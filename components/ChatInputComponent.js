import React, { useRef, useState } from "react";
import { Keyboard, Modal, StyleSheet, TextInput, View } from "react-native";
import { MaterialIcons, FontAwesome } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import CameraComponent from "./CameraComponent";
import { Camera } from "expo-camera";

const ChatInputComponent = ({
  showEmoGifBoard,
  isBoardVisible,
  message,
  setMessage,
  sendMessage,
  recordAudio,
  showMediaPicker,
}) => {
  const inputRef = useRef();
  const [isCamVisible, setIsCamVisible] = useState(false);
  const [hours, setHours] = useState();
  const [minutes, setMinutes] = useState();
  const [seconds, setSeconds] = useState();
  //const [isPaused, setIsPaused] = useState();

  const checkCameraPermissions = async () => {
    try {
      let status;
      status = (await Camera.getCameraPermissionsAsync()).status;
      if (status !== "granted")
        status = (await Camera.requestCameraPermissionsAsync()).status;
      if (status === "granted") setIsCamVisible(true);
    } catch (error) {}
  };
  return (
    <View style={styles.container}>
      <Modal animationType="slide" visible={isCamVisible}>
        <CameraComponent closeCam={() => setIsCamVisible(false)} />
      </Modal>
      <View style={styles.leftView}>
        {isBoardVisible ? (
          <TouchableOpacity
            onPress={() => {
              showEmoGifBoard(false);
              inputRef.current.focus();
            }}
          >
            <MaterialIcons name="keyboard" size={24} style={styles.emoji} />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={() => {
              showEmoGifBoard(true);
              Keyboard.dismiss();
            }}
          >
            <MaterialIcons
              name="emoji-emotions"
              size={24}
              style={styles.emoji}
            />
          </TouchableOpacity>
        )}

        <TextInput
          ref={inputRef}
          placeholder={"Type a message"}
          style={styles.textInput}
          onChangeText={(text) => setMessage(text)} // This line handles updating the message state
          value={message} // This line ensures that the input value is controlled by the message state
        />

        <TouchableOpacity onPress={() => checkCameraPermissions()}>
          <MaterialIcons name="camera-alt" size={24} style={styles.camera} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => showMediaPicker()}>
          <FontAwesome name="paperclip" size={22} style={styles.clip} />
        </TouchableOpacity>
      </View>
      <View style={styles.micContainer}>
        {message ? (
          <TouchableOpacity onPress={() => sendMessage()}>
            <MaterialIcons name="send" size={24} style={styles.mic} />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity onPress={() => recordAudio()}>
            <FontAwesome name="microphone" size={24} style={styles.mic} />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default ChatInputComponent;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    justifyContent: "center",
    flexDirection: "row",
    width: "100%",
  },
  leftView: {
    height: 42,
    flex: 1,
    justifyContent: "center",
    borderRadius: 21,
    backgroundColor: "#FFF",
    flexDirection: "row",
    padding: 7,
    paddingHorizontal: 10,
    alignItems: "center", // Add alignItems to center vertically
  },
  emoji: {
    color: "#272727",
    marginRight: 10,
  },
  textInput: {
    fontSize: 15,
    color: "#4F4F4F",
    flex: 1,
  },
  camera: {
    height: 21,
    width: 21,
    marginLeft: 10,
    marginRight: 20,
  },
  clip: {
    height: 21,
    width: 21,
    //backgroundColor: '#4F4F4F',
    justifyContent: "center",
    alignItems: "center",
  },
  micContainer: {
    height: 42,
    width: 42,
    borderRadius: 21,
    backgroundColor: "#FFF",
    marginLeft: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  mic: {
    color: "#272727",
  },
});
