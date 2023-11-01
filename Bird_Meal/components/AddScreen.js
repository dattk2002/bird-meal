import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  Picker,
  SafeAreaView,
  StyleSheet
} from "react-native";
import axios from "axios";

function AddScreen({ route, navigation }) {
  const { fetchItems } = route.params;

  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");
  const [detail, setDetail] = useState("");
  const [suitableFor, setSuitableFor] = useState([
    { birdName: "", birdImage: "" },
  ]);

  const handleFormSubmit = () => {
    const formData = {
      name,
      category,
      image,
      detail,
      suitableFor,
    };

    // Send the form data to your server using axios.post
    axios
      .post("http://192.168.20.149:3000/foods", formData)
      .then((response) => {
        console.log("Form data submitted successfully:", response.data);
        // Optionally, you can reset the form fields after successful submission
        setName("");
        setCategory("");
        setImage("");
        setDetail("");
        setSuitableFor([{ birdName: "", birdImage: "" }]);
        navigation.navigate("AdminPage");
        fetchItems();
      })
      .catch((error) => {
        console.error("Error submitting form data:", error);
      });
  };
  const addSuitableFor = () => {
    // Add a new empty bird entry to suitableFor array
    setSuitableFor([...suitableFor, { birdName: "", birdImage: "" }]);
  };

  const handleBirdNameChange = (index, text) => {
    // Update the bird name at the specified index in suitableFor array
    const updatedSuitableFor = [...suitableFor];
    updatedSuitableFor[index].birdName = text;
    setSuitableFor(updatedSuitableFor);
  };

  const handleBirdImageChange = (index, text) => {
    // Update the bird image URL at the specified index in suitableFor array
    const updatedSuitableFor = [...suitableFor];
    updatedSuitableFor[index].birdImage = text;
    setSuitableFor(updatedSuitableFor);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Name:</Text>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={(text) => setName(text)}
          placeholder="Enter name"
        />

        <Text style={styles.label}>Category:</Text>
        <TextInput
          style={styles.input}
          value={category}
          onChangeText={(text) => setCategory(text)}
          placeholder="Enter category"
        />

        <Text style={styles.label}>Image URL:</Text>
        <TextInput
          style={styles.input}
          value={image}
          onChangeText={(text) => setImage(text)}
          placeholder="Enter image URL"
        />

        <Text style={styles.label}>Detail:</Text>
        <TextInput
          style={[styles.input, styles.multilineInput]}
          value={detail}
          onChangeText={(text) => setDetail(text)}
          placeholder="Enter details"
          multiline={true}
        />

        <Text style={styles.label}>Suitable For:</Text>
        {suitableFor.map((bird, index) => (
          <View key={index} style={styles.suitableForItem}>
            <TextInput
              style={styles.input}
              value={bird.birdName}
              onChangeText={(text) => handleBirdNameChange(index, text)}
              placeholder="Bird Name"
            />
            <TextInput
              style={styles.input}
              value={bird.birdImage}
              onChangeText={(text) => handleBirdImageChange(index, text)}
              placeholder="Bird Image URL"
            />
          </View>
        ))}
        <Button title="Add Bird" onPress={addSuitableFor} />

        <Button
          title="Submit"
          onPress={handleFormSubmit}
          disabled={
            !name ||
            !category ||
            !image ||
            !detail ||
            suitableFor.some((bird) => !bird.birdName || !bird.birdImage)
          }
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
      backgroundColor: 'white',
      marginTop: 48
    },
    inputContainer: {
      flex: 1,
    },
    label: {
      fontSize: 16,
      marginTop: 10,
    },
    input: {
      borderColor: 'gray',
      borderWidth: 1,
      padding: 10,
      fontSize: 16,
      borderRadius: 5,
      marginVertical: 5,
    },
    multilineInput: {
      height: 100,
      textAlignVertical: 'top',
    },
    suitableForItem: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginVertical: 5,
    },
  });
export default AddScreen;
