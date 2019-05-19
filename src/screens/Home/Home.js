import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';


class HomeScreen extends Component {

    render () {
        //TODO: placeholder image--replace with dynamic source
        return (                
            <View style={styles.container}>
                <Image
                    style={{width: 50, height: 50}} 
                    source={require('../../../src/assets/images/chicken.png')} />   
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22
    },
})

export default HomeScreen;