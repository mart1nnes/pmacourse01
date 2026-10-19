import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  const [item ,setItem] = useState("");
  const [task ,setTask] = useState([]);

  function handleAddItem() {
    setTask([...task, item]);
    console.log(task);
  }

  function handleInputText(text) {
    setItem(text);
  }

  return (
    <View style={styles.inputContainer}>
      <View>
        <TextInput 
        onChangeText={handleInputText}
        style={styles.input} 
        placeholder="zadaj text"/>
        <Button 
        onPress={handleAddItem}
        title="poslat" />
      </View>
      <View style={styles.udalosti}>
        <Text>{task.map((i) => (
          <Text>{i}</Text>
        ))}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 2,
    borderWidth: 4,
  },
  inputContainer: {
    flex: 1,
    backgroundColor: "lightblue",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  input: {
    borderWidth: 3,
    borderRadius: 4,
  },
  udalosti: {
    flex: 5, 
  },
});
