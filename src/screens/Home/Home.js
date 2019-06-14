import React, {Component} from 'react';
import {View, Text, StyleSheet, ImageBackground, Dimensions, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { authGetToken } from '../../store/actions/index';

class HomeScreen extends Component {
    // whenIneedU database for images/display properties
    // https://whenineedu-7bf72.firebaseio.com/

    state = {
        viewMode: Dimensions.get('window').height > 500 ? "portrait" : "landscape",
        images: [],
        token: null,
        expiryDate: null  
    }
    
    constructor(props){
        super(props);
        Dimensions.addEventListener("change", this.updateViewModel);
    };

    componentDidMount () {
        this.getAffirmations();
    }

    componentWillUnmount = () => {
        Dimensions.removeEventListener("change", this.updateViewModel);
    }

    updateViewModel = (dims) => {
        this.setState({
            viewMode: dims.window.height > 500 ? "portrait" : "landscape"
        });
    };

    getAffirmations = () => { 
        this.props.onAuthGetToken()
        .then(token => {
            return fetch("https://whenineedu-7bf72.firebaseio.com/affirmations.json?auth="+token)
        })
        .catch(() => {
            alert("No valid token found!")
        })
        .then(res => res.json())
        .then(parsedRes => {
            console.log(parsedRes);
            const images = [];
            for (let key in parsedRes) {
                images.push(
                    parsedRes[key]
                )
            }
            this.setState({
                images: images
            })
        })
        .catch(err => {
            alert("Something went wrong, sorry!");
            console.log(err);
        }) 
    };

    render () {

        const deviceHeight = Dimensions.get('window').height;
        const deviceWidth = Dimensions.get('window').width;

        let imageArray = [];
        this.state.images.forEach((image, i) => {
            const thisImage = (
                <ImageBackground
                    key={`image${i}`}
                    source={{uri: image.image}} 
                    style={{width: deviceWidth}} 
                >
                    <Text style={image.affirmationText}>{image.text}</Text>
                </ImageBackground>
            );
        imageArray.push(thisImage);
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


const mapDispatchToProps = dispatch => {
    return {
        onAuthGetToken: () => dispatch(authGetToken()),
    };
};

export default connect(null, mapDispatchToProps)(HomeScreen);