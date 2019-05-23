import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, ImageBackground, Dimensions, ScrollView } from 'react-native';


class HomeScreen extends Component {

    render () {
        const deviceHeight = Dimensions.get('window').height
        const deviceWidth = Dimensions.get('window').width
        const images = [
            require('../../../src/assets/images/rockHand.jpg'),
            require('../../../src/assets/images/cheerios.png'),
            require('../../../src/assets/images/rivers.png'),        
        ]
        let imageArray = [];
        images.forEach((image, i) => {
            console.log(image, i)
            const thisImage = (
                <ImageBackground
                    key={`image${i}`}
                    source={image}
                    style={{width: deviceWidth}} 
                >
                    <Text style={styles.affirmationText}>Holy shirtballs you are a mother forking rock star!</Text>
                </ImageBackground>
            )
        imageArray.push(thisImage)
        })

        //TODO: placeholder image--replace with dynamic source
        return (                
            <View style={styles.container}>
                <ScrollView
                    horizontal 
                    showsHorizontalScrollIndicator={false}
                    scrollEventThrottle={10} 
                    pagingEnabled 
                > 
                    {imageArray}
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    affirmationText: {
        padding: 20,
        fontSize: 36,
        fontWeight: 'bold',
        textAlign: 'right'
    }
});

export default HomeScreen;

                {/* <ImageBackground
                    style={{width: 'auto', height: '100%'}} 
                    source={require('../../../src/assets/images/rockHand.jpg')} >
                    <Text style={styles.affirmationText}>Holy shirtballs you're a mother forking rock star!</Text>
                </ImageBackground>    */}