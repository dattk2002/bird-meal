import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  FlatList,
  Image,
} from "react-native";
import React from "react";

const data = [
  {
    id: 1,
    foodName: "Birdy",
    username: "raw",
    age: 21,
    imgUrl:
      "https://i.pinimg.com/236x/c4/02/be/c402bef96b86f154667496852a245b59.jpg",
  },
  {
    id: 2,
    foodName: "Birdy2",
    foodType: "raw2",
    foodImg: "food2.jpg",
    imgUrl:
      "https://i.pinimg.com/236x/c3/10/54/c31054102021331e4c4cd7a1f7cdcc17.jpg",
  },
  {
    id: 3,
    foodName: "Birdy3",
    foodType: "raw3",
    foodImg: "food3.jpg",
    imgUrl:
      "https://i.pinimg.com/236x/c2/4e/b2/c24eb27ec03c8084511e7839f95926d3.jpg",
  },
  {
    id: 4,
    foodName: "Bird4",
    foodType: "raw4",
    foodImg: "food4.jpg",
    imgUrl:
      "https://i.pinimg.com/236x/97/1e/59/971e5982c1bada5dba732c0888ac63b0.jpg",
  },
];

function AdminPage() {
  return (
    <View>
      <SafeAreaView />
      <Text>Flast List</Text>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <View>
            <Image
              source={{ uri: item.imgUrl }}
              style={{ height: 200, width: 200 }}
            />

            <Text>{item.foodName}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  //   container: {
  //     flex: 1,
  //     backgroundColor: "#fff",
  //     paddingVertical: 30,
  //     paddingHorizontal: 30,
  //   },
  flatListContainer: {
    backgroundColor: "#70a1ff",
    marginVertical: 10,
    marginHorizontal: 16,
    paddingBottom: 32,
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
  },
  seperator: {
    height: 2,
    backgroundColor: "#f1f2f6",
  },
});
export default AdminPage;
