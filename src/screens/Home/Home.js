import React, {Component} from 'react';
import {View, Text, StyleSheet, ImageBackground, Dimensions, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage';

class HomeScreen extends Component {
    // whenIneedU database for images/display properties
    // https://whenineedu-7bf72.firebaseio.com/

    state = {
        images: [],
        token: null,
        expiryDate: null  
    }
    componentDidMount () {
        this.getAffirmations();
    }

    authClearStorage = () => {
        AsyncStorage.removeItem("ap:auth:token");
        AsyncStorage.removeItem("ap:auth:expiryDate");    
        return AsyncStorage.removeItem("ap:auth:refreshToken");    
    }

    authSetToken = (token, expiryDate) => {
        this.setState({
            token: token,
            expiryDate: expiryDate   
        })
    }

    authStoreToken = (token, expiresIn, refreshToken) => {
        const now = new Date();
        const expiryDate = now.getTime() + (expiresIn * 1000);
        this.authSetToken(token, expiryDate);
        AsyncStorage.setItem("ap:auth:token", token);  // can name token any string you want
        AsyncStorage.setItem("ap:auth:expiryDate", expiryDate.toString());  
        AsyncStorage.setItem("ap:auth:refreshToken", refreshToken);  
    }

    // TODO: move this out so it can be shared with same function in Auth.js
    authGetToken = () => {
        const promise = new Promise((resolve, reject) => {
            const token = this.state.token;
            const expiryDate = this.state.expiryDate;
            if (!token || new Date(expiryDate) <= new Date()) {
                let fetchedToken;
                AsyncStorage.getItem("ap:auth:token")
                    .catch(err => reject())
                    .then(tokenFromStorage => {
                        fetchedToken = tokenFromStorage;
                        if(!tokenFromStorage){
                            reject();
                            return;
                        }
                        return AsyncStorage.getItem("ap:auth:expiryDate");
                    })
                    .then(expiryDate => {
                        const parsedExpiryDate = new Date(parseInt(expiryDate));
                        const now = new Date();
                        if(parsedExpiryDate > now){
                            this.authSetToken(fetchedToken);
                            resolve(fetchedToken);    
                        } else {
                            reject();
                        }
                    })
                    .catch(err =>  reject())
            } else {
                resolve(token);
            }
        });
        return promise
            .catch(err => {
            return AsyncStorage.getItem("ap:auth:refreshToken")
                .then(refreshToken => {
                    return fetch("https://securetoken.googleapis.com/v1/token?key=" + authKey, {
                        method: 'POST',
                        headers: {
                            "Content-Type": "application/x-www-form-urlencoded"
                        },
                        body: "grant_type=refresh_token&refresh_token=" + refreshToken,
                    })
                })
                .then(res => res.json())
                .then(parsedRes => {
                    if(parsedRes.id_token){
                        console.log('refresh token saves the day!')
                        this.authStoreToken(parsedRes.id_token, parsedRes.expires_in, parsedRes.refresh_token);
                        return parsedRes.id_token;  // need to return token so in autoSignin it will trigger startMainTabs()
                    } else {
                        this.authClearStorage();
                    }
                })
            })
        .then(token => {
            if (!token) {
                throw (new Error());
            } else {
                return token;
            }
        })
    };

    getAffirmations = () => { 
        this.authGetToken()
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

        const deviceHeight = Dimensions.get('window').height
        const deviceWidth = Dimensions.get('window').width

        let imageArray = [];
        this.state.images.forEach((image, i) => {
            console.log(image.affirmationText)
            const thisImage = (
                <ImageBackground
                    key={`image${i}`}
                    source={{uri: image.image}} 
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