import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, ImageBackground} from 'react-native';


class HomeScreen extends Component {

    render () {
        //TODO: placeholder image--replace with dynamic source
        return (                
            <View style={styles.container}>
                <ImageBackground
                    style={{width: 'auto', height: '100%'}} 
                    source={require('../../../src/assets/images/rockHand.jpg')} >
                    <Text style={styles.affirmationText}>Holy shirtballs you're a mother forking rock star!</Text>
                </ImageBackground>   
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    affirmationText: {
        padding: 20,
        fontSize: 36,
        fontWeight: 'bold',
        textAlign: 'right'
    }
})

export default HomeScreen;