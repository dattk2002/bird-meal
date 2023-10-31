import React from 'react';
import { View, Text, StyleSheet, Image, FlatList, Pressable } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';

function FoodDetail({ route, navigation }) {
    const { food } = route.params;

    return (
        <View style={styles.container}>
             <Pressable onPress={()=> navigation.goBack()} style={styles.backButton}>
                <Ionicons name="arrow-back" size={24} color="gray" />
            </Pressable>
            <Image source={{ uri: food.image }} style={styles.foodImage} />
            <Text style={styles.foodName}>{food.name}</Text>
            <Text style={styles.foodCategory}>Category: {food.category}</Text>
            <Text style={styles.foodDetail}>{food.detail}</Text>
            <Text style={styles.suitableForTitle}>Chim có thể ăn:</Text>
            <FlatList
                horizontal={true}
                data={food.suitableFor}
                renderItem={({ item }) => (
                    <View style={styles.birdItem}>
                        <Image source={{ uri: item.birdImage }} style={styles.birdImage} />
                        <Text style={styles.birdName}>{item.birdName}</Text>
                    </View>
                )}
                keyExtractor={(item, index) => index.toString()}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 30,
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#f2f2f2',
        padding: 16,
    },
    foodImage: {
        width: 200,
        height: 200,
        borderRadius: 10,
        marginBottom: 10,
    },
    foodName: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    foodCategory: {
        fontSize: 18,
        color: 'gray',
        marginBottom: 10,
    },
    foodDetail: {
        fontSize: 16,
        marginBottom: 20,
    },
    suitableForTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    birdItem: {
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: 10,
    },
    birdImage: {
        width: 120,
        height: 120,
        borderRadius: 15,
        marginRight: 10,
    },
    birdName: {
        fontSize: 16,
    },
    backButton: {
        position: 'absolute',
        top: 20, // Điều chỉnh vị trí của nút back theo ý muốn
        left: 20, // Điều chỉnh vị trí của nút back theo ý muốn
        padding: 10,
    }
});

export default FoodDetail;
