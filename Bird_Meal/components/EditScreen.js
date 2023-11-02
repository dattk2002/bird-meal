import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  Pressable,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Alert
} from "react-native";
import axios from "axios";

function EditScreen({ route, navigation }) {
  const { fetchItems, itemId } = route.params;

  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");
  const [detail, setDetail] = useState("");
  const [suitableFor, setSuitableFor] = useState([
    { birdName: "", birdImage: "" },
  ]);

  useEffect(() => {
    // Fetch the item data using the provided ID
    axios
      .get(`http://192.168.1.108:3000/foods/${itemId}`)
      .then((response) => {
        const itemData = response.data;
        // Update the state with the received data
        setName(itemData.name);
        setCategory(itemData.category);
        setImage(itemData.image);
        setDetail(itemData.detail);
        setSuitableFor(itemData.suitableFor);
      })
      .catch((error) => {
        console.error("Error fetching item data:", error);
      });
  }, [itemId]);

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
      .put(`http://:3000/foods/${itemId}`, formData)
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
    setSuitableFor([...suitableFor, { birdName: "", birdImage: "" }]);
  };

  const deleteLastSuitableFor = () => {
    const updatedSuitableFor = suitableFor.slice(0, suitableFor.length - 1);
    setSuitableFor(updatedSuitableFor);
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

  const showConfirmDialog = (id) => {
    return Alert.alert(
      "Thông báo?",
      "Bạn chắc chắn muốn sửa thông tin của thức ăn này?",
      [
        // The "Yes" button
        {
          text: "Có",
          onPress: () => {
            handleFormSubmit();
          },
        },
        // The "No" button (without onPress)
        {
          text: "Không",
        },
      ]
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <Pressable
        style={styles.positionBack}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.textBack}>Back</Text>
      </Pressable>
      <ScrollView>
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
            title="Delete last Bird" onPress={deleteLastSuitableFor}
            disabled={
              suitableFor.length < 2
            }
          />

          <Button
            title="Submit"
            onPress={showConfirmDialog}
            disabled={
              !name ||
              !category ||
              !image ||
              !detail ||
              suitableFor.some((bird) => !bird.birdName || !bird.birdImage)
            }
          />
        </View>
      </ScrollView>
    </SafeAreaView >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    paddingBottom: 48,
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
  textBack: {
    fontSize: 20,
    color: "black",
    marginBottom: 12
  },
  multilineInput: {
    height: 100,
    textAlignVertical: 'top',
  },
  suitableForItem: {
    flexDirection: 'column',
    alignItems: 'left',
    marginVertical: 5,
  },
});
export default EditScreen;
