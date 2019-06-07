import React, {Component} from 'react';
import {View, Text, StyleSheet, ImageBackground, Dimensions, ScrollView } from 'react-native';

class HomeScreen extends Component {
    // whenIneedU database for images/display properties
    // https://whenineedu-7bf72.firebaseio.com/

    state = {
        images: []
    }
    componentDidMount () {
        this.getAffirmations();
    }

    getAffirmations = () => { 
        fetch("https://whenineedu-7bf72.firebaseio.com/affirmations.json")
        .then(res => res.json())
        .then(parsedRes => {
            console.log(parsedRes);
            const images = [];
            for (let key in parsedRes) {
                if(key==0){
                    continue;
                }
                console.log("image in parsedRes loop",parsedRes[key].image)
                console.log(typeof parsedRes[key].image)
                images.push(
                    parsedRes[key]
                )
            }
            this.setState({
                images: images
            })
            // dispatch(setPlaces(places))
        })
        .catch(err => {
            alert("Something went wrong, sorry!");
            console.log(err);
        }) 
    };

    render () {

        const deviceHeight = Dimensions.get('window').height
        const deviceWidth = Dimensions.get('window').width
        // const images = [
        //     { 
        //         image: require('../../../src/assets/images/rockHand.jpg'), 
        //         text: "Holy shirtballs you're a mother forking rock star!",
        //         affirmationText: {
        //             fontSize: 36,
        //             fontWeight: 'bold',
        //             textAlign: 'right',
        //             padding: 20
        //         }
        //     },
        //     {
        //         image: require('../../../src/assets/images/bowl.jpg'),
        //         text: "I know that you're out of frosted cheerios and that the world is on fire, but you're a forking rockstar.  Get out the door and do that thing!",
        //         affirmationText: {
        //             fontSize: 24,
        //             fontWeight: 'bold',
        //             textAlign: 'center',
        //             padding: 20
        //         }
        //     }, 
        //     {
        //         image: require('../../../src/assets/images/river-stones.jpg'), 
        //         text: "Rivers don't calm me down, they piss me off",
        //         affirmationText: {
        //             fontSize: 28,
        //             textAlign: 'right',
        //             padding: 20,
        //             color: 'yellow',
        //             fontStyle: 'italic'
        //         }
        //     },
        //     {
        //         image: require('../../../src/assets/images/flame.jpg'), 
        //         text: "Self love is hot sauce for your soul",
        //         affirmationText: {
        //             fontSize: 32,
        //             textAlign: 'right',
        //             padding: 20,
        //             color: 'white',
        //             fontStyle: 'italic',
        //             fontWeight: 'bold'
        //         }
        //     }
        // ]

        let imageArray = [];
        this.state.images.forEach((image, i) => {
            // console.log(`''${image.image}''`)
            const thisImage = (
                <ImageBackground
                    key={`image${i}`}
                    source={require('../../../src/assets/images/rockHand.jpg')}  // TODO: fix so can be dynamic, having issues getting source right
                    style={{width: deviceWidth}} 
                >
                    <Text style={image.affirmationText}>{image.text}</Text>
                </ImageBackground>
            )
        imageArray.push(thisImage)
        })

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
});

export default HomeScreen;