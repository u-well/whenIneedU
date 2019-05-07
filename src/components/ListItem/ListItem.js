import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';

const listItem = (props) => {
    return (
        <TouchableOpacity onPress={props.onItemPressed}>
            <View style={styles.listItem}>
                <Image resizeMode="cover" source={props.image} style={styles.image}/>
                <Text>{props.itemName}</Text>
            </View>    
        </TouchableOpacity>
)};

const styles = StyleSheet.create({
    listItem: {
        width: "100%",
        padding: 10,
        marginBottom: 5,
        backgroundColor: "#eee",
        flexDirection: "row",
        alignItems: "center",
    },
    image: {
        marginRight: 8,
        height: 30,
        width: 30

    }
})

export default listItem;