import {
  Text,
  View,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  Button,
  TextInput,
  Pressable,
  Alert,
} from "react-native";
import React, { useState, useEffect } from "react";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";
import { FontAwesome } from "@expo/vector-icons";
import AddScreen from './AddScreen';

const RedHeartIcon = () => {
  return <FontAwesome name="heart" size={35} color="red" />;
};
const GrayHeartIcon = () => {
  return <FontAwesome name="heart" size={24} color="gray" />;
};
const DeleteIcon = () => {
  return <FontAwesome name="trash" size={24} color="gray" />;
};
const AddIcon = () => {
  return <FontAwesome name="plus" size={48} color="blue" />;
};
const EditIcon = () => {
  return <FontAwesome name="edit" size={36} color="blue" />;
};

export { RedHeartIcon, GrayHeartIcon, DeleteIcon, AddIcon, EditIcon };

function AdminPage({ navigation }) {
  const [foodData, setFoodData] = useState([]);
  const [filteredFoodData, setFilteredFoodData] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedButton, setSelectedButton] = useState(null);
  const [searchQuery, setSearchQuery] = useState(""); // Thêm trạng thái để lưu giá trị của thanh tìm kiếm
  const [favorites, setFavorites] = useState([]);

  useFocusEffect(
    React.useCallback(() => {
      const loadFavorites = async () => {
        try {
          const storedFavorites = await AsyncStorage.getItem("favorite");
          if (storedFavorites !== null) {
            setFavorites(JSON.parse(storedFavorites));
          }
        } catch (error) {
          console.error("Error loading favorites:", error);
        }
      };

      loadFavorites();
    }, [])
  );

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = () => {
    axios
      .get("http://192.168.1.89:3000/foods")
      .then((response) => {
        const data = response.data;
        setFoodData(data);
        setFilteredFoodData(data);
        const uniqueCategories = [
          ...new Set(data.map((item) => item.category)),
        ];
        setCategories(uniqueCategories);
      })
      .catch((error) => {
        console.error("Lỗi khi lấy dữ liệu:", error);
      });
  };


  const deleteItem = (id) => {
    axios
      .delete(`http://192.168.1.89/foods/${id}`)
      .then((response) => {
        // Handle successful deletion
        console.log("Item deleted successfully id :", id);
        return fetchItems(); // Fetch updated list of items
      })
      .catch((error) => {
        // Handle error
        console.error("Error deleting item:", error);
      });
  };

  const showConfirmDialog = (id) => {
    return Alert.alert(
      "Are you sure?",
      "Are you sure you want to remove this beautiful box?",
      [
        // The "Yes" button
        {
          text: "Yes",
          onPress: () => {
            deleteItem(id);
          },
        },
        // The "No" button (without onPress)
        {
          text: "No",
        },
      ]
    );
  };

  useEffect(() => {
    if (selectedCategory) {
      const filteredData = foodData.filter(
        (item) => item.category === selectedCategory
      );
      setFilteredFoodData(filteredData);
    } else {
      setFilteredFoodData(foodData);
    }
  }, [selectedCategory, foodData]);

  useEffect(() => {
    // Thực hiện tìm kiếm dựa trên giá trị của thanh tìm kiếm
    const searchResult = foodData.filter((item) => {
      const foodNameMatch = item.name
        .toLowerCase()
        .includes(searchQuery.toLowerCase());
      const birdNameMatch = item.suitableFor.some((bird) =>
        bird.birdName.toLowerCase().includes(searchQuery.toLowerCase())
      );
      return foodNameMatch || birdNameMatch;
    });
    setFilteredFoodData(searchResult);
  }, [searchQuery, foodData]);

  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("FoodDetail", { food: item });
      }}
    >
      <View style={styles.foodItem}>
        <Image source={{ uri: item.image }} style={styles.foodImage} />
        <Text style={styles.foodName}>{item.name}</Text>
        <Pressable
          style={styles.editIcon}
          onPress={() =>
            navigation.navigate("EditScreen", { fetchItems, itemId: item.id })}
        >
          <View>
            <EditIcon></EditIcon>
          </View>
        </Pressable>
        <Pressable
          style={styles.deleteButton}
          onPress={() => showConfirmDialog(item.id)}
        >
          <View>
            <DeleteIcon></DeleteIcon>
          </View>
        </Pressable>
      </View>
    </TouchableOpacity>
  );
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        placeholder="Tìm kiếm theo tên thức ăn hoặc tên loài chim"
        value={searchQuery}
        onChangeText={(text) => setSearchQuery(text)}
      />
      <View style={styles.filterContainer}>
        <Button
          title="Tất cả"
          onPress={() => {
            setSelectedCategory(null);
            setSelectedButton(null);
          }}
          color={selectedButton === null ? "blue" : "gray"}
        />
        {categories.map((category) => (
          <Button
            key={category}
            title={category}
            onPress={() => {
              setSelectedCategory(category);
              setSelectedButton(category);
            }}
            color={selectedButton === category ? "blue" : "gray"}
          />
        ))}
      </View>
      <FlatList
        style={styles.list}
        data={filteredFoodData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
      <Pressable onPress={() => navigation.navigate("AddScreen", { fetchItems })}>
        <View style={styles.addButton}>
          <AddIcon></AddIcon>
        </View>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  searchInput: {
    marginTop: 60,
    padding: 10,
    borderColor: "gray",
    borderWidth: 1,
  },
  filterContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 16,
  },
  foodItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  foodImage: {
    width: 150,
    height: 200,
    marginRight: 16,
  },
  foodName: {
    fontSize: 18,
  },
  favoriteContainer: {
    position: "absolute",
    top: 20,
    right: 20,
  },
  deleteButton: {
    position: "absolute",
    bottom: 10,
    right: 10,
    padding: 10,
    borderRadius: 5,
  },
  addButton: {
    marginLeft: 345,
    marginTop: 20,
    marginBottom: 12,
  },
  editIcon: {
    position: "absolute",
    top: 10,
    right: 0,
    padding: 10,
    borderRadius: 5,
  }
});
export default AdminPage;
