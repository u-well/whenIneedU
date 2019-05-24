import React, {Component} from 'react';
import {View, Text, StyleSheet, Image, ImageBackground, Dimensions, ScrollView } from 'react-native';


class HomeScreen extends Component {

    render () {
        const deviceHeight = Dimensions.get('window').height
        const deviceWidth = Dimensions.get('window').width
        const images = [
            { 
                image: require('../../../src/assets/images/rockHand.jpg'), 
                text: "Holy shirtballs you're a mother forking rock star!"
            },
            {
                image: require('../../../src/assets/images/bowl.jpg'),
                text: "I know that you're out of frosted cheerios and that the world is on fire, but you're a forking rockstar.  Get out the door and do that thing!"
            }, 
            {
                image: require('../../../src/assets/images/river-stones.jpg'), 
                text: "Rivers don't calm me down, they piss me off."
            }
        ]
        const affirmations = [

        ]
        let imageArray = [];
        images.forEach((image, i) => {
            console.log(image, i)
            const thisImage = (
                <ImageBackground
                    key={`image${i}`}
                    source={image.image}
                    style={{width: deviceWidth}} 
                >
                    <Text style={styles.affirmationText}>{image.text}</Text>
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