import React, { useState } from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { RedHeartIcon } from './List';
function Favorite({ navigation }) {
  const [favorites, setFavorites] = useState([]);

  // Use the useFocusEffect hook to load favorites when the screen is focused
  useFocusEffect(
    React.useCallback(() => {
      const loadFavorites = async () => {
        try {
          const storedFavorites = await AsyncStorage.getItem('favorite');
          if (storedFavorites !== null) {
            setFavorites(JSON.parse(storedFavorites));
          }
        } catch (error) {
          console.error('Error loading favorites:', error);
        }
      };

      loadFavorites();
    }, [])
  );

  // Function to remove a favorite item
  const removeFromFavorites = (item) => {
    Alert.alert(
      'Remove from Favorites',
      'Do you want to remove this item from favorites?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Remove',
          onPress: () => {
            const updatedFavorites = favorites.filter((fav) => fav.id !== item.id);
            setFavorites(updatedFavorites);

            // Save updated favorites to AsyncStorage
            AsyncStorage.setItem('favorite', JSON.stringify(updatedFavorites));
          },
        },
      ]
    );
  };

  // Function to clear all favorites
  const clearAllFavorites = () => {
    Alert.alert(
      'Clear All Favorites',
      'Do you want to remove all items from favorites?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Clear All',
          onPress: () => {
            // Clear all favorites
            setFavorites([]);
            // Update AsyncStorage
            AsyncStorage.removeItem('favorite');
          },
        },
      ]
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Favorite Items</Text>
      {favorites.length > 0 && (
        <TouchableOpacity onPress={clearAllFavorites} style={styles.clearAllButton}>
          <Text style={styles.clearAllButtonText}>Clear All</Text>
        </TouchableOpacity>
      )}
      {favorites.length === 0 ? (
        <View style={styles.noFavoritesContainer}>
          <Text style={styles.noFavoritesText}>No items have been added to favorites.</Text>
        </View>
      ) : (
        <FlatList
          data={favorites}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.itemContainer}
              onPress={() => {
                // Navigate to the detail screen with the selected item
                navigation.navigate('FoodDetail', { food : item });
              }}
            >
              <Image
                source={{ uri: item.image }}
                style={styles.itemImage}
              />
              <View style={styles.itemTextContainer}>
                <Text style={styles.itemName}>{item.name}</Text>
              </View>
              <TouchableOpacity
                style={styles.favoriteIconContainer}
                onPress={() => removeFromFavorites(item)}
              >
                <RedHeartIcon />
              </TouchableOpacity>
            </TouchableOpacity>
          )}
        />
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    marginTop: 40
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
  },
  itemContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    margin: 5,
    padding: 10,
    backgroundColor: 'white',
    elevation: 3,
    borderRadius: 10,
  },
  itemImage: {
    width: 80,
    height: 80,
    resizeMode: 'cover',
  },
  itemTextContainer: {
    flex: 1,
    marginLeft: 10,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  itemName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  clearAllButton: {
    backgroundColor: 'red',
    width: 100,
    borderRadius: 5,
    alignSelf: 'center',
    marginTop: 10,
  },
  clearAllButtonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 14,
    fontWeight: 'bold',
  },
  favoriteIconContainer: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  noFavoritesContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  noFavoritesText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'gray',
  },
});

export default Favorite
