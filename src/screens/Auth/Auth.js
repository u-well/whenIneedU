import React, {Component} from 'react';
import {AsyncStorage, View, StyleSheet, ImageBackground, Dimensions, KeyboardAvoidingView, Keyboard, TouchableWithoutFeedback, ActivityIndicator} from 'react-native';

import DefaultInput from '../../components/UI/DefaultInput/DefaultInput';
import HeadingText from '../../components/UI/HeadingText/HeadingText';
import backgroundImage from '../../assets/images/chicken.png';
import ButtonWithBackground from '../../components/UI/ButtonWithBackground/ButtonWithBackground';
import validate from '../../utility/validation';
import startMainTabs from '../../screens/MainTabs/startMainTabs';
import setRoot from '../../../App';


// auth reducer code from other project
// const reducer = (state = initialState, action) => {
//     switch(action.type) {
//         case AUTH_SET_TOKEN: 
//             return {
//                 ...state,
//                 token: action.token,
//                 expiryDate: action.expiryDate
//             };
//         case AUTH_REMOVE_TOKEN:
//             return {
//                 ...state,
//                 token: null,
//                 expiryDate: null
//             }
//         default:
//             return state;
//     }
// }
// 
// auth action code from other project
// 
// import { uiStartLoading, uiStopLoading} from "./index";
// import authKey from '../../../authKey';

// export const tryAuth = (authData, authMode) => { 
//     return dispatch => {
//         let url = "https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=" + authKey;
//         dispatch(uiStartLoading());
//         if(authMode === "signup"){
//             url = "https://www.googleapis.com/identitytoolkit/v3/relyingparty/signupNewUser?key=" + authKey;
//         } 
//         fetch(url, {
//             method: 'POST',
//             body: JSON.stringify({
//                 email: authData.email,
//                 password: authData.password,
//                 returnSecureToken: true
//             }),
//             headers: {
//                 "Content-Type": "application/json"
//             }
//         })
//         .catch(err => {
//             console.log(err);
//             dispatch(uiStopLoading());
//             alert("Authentication Failed!  Please try again.");
//         })
//         .then(res => res.json())
//         .then(parsedRes => {
//             dispatch(uiStopLoading());
//             console.log(parsedRes);
//             if(!parsedRes.idToken){
//                 alert("Authentication Failed!  Please try again.");
//             } else {
//                 dispatch(authStoreToken(parsedRes.idToken, parsedRes.expiresIn, parsedRes.refreshToken));
//                 startMainTabs();
//             }
//         })
//     }
// };

// export const authSetToken = (token, expiryDate) => {
//     return {    
//         type: AUTH_SET_TOKEN,
//         token: token,
//         expiryDate: expiryDate
//     }
// }

// export const authStoreToken = (token, expiresIn, refreshToken) => {
//     return dispatch => {
//         const now = new Date();
//         const expiryDate = now.getTime() + (expiresIn * 1000);
//         dispatch(authSetToken(token, expiryDate));
//         AsyncStorage.setItem("ap:auth:token", token);  // can name token any string you want
//         AsyncStorage.setItem("ap:auth:expiryDate", expiryDate.toString());  
//         AsyncStorage.setItem("ap:auth:refreshToken", refreshToken);  
//     }
// }

// export const authGetToken = () => {
//     return (dispatch, getState) => {
//         const promise = new Promise((resolve, reject) => {
//             const token = getState().auth.token;
//             const expiryDate = getState().auth.expiryDate;
//             if (!token || new Date(expiryDate) <= new Date()) {
//                 let fetchedToken;
//                 AsyncStorage.getItem("ap:auth:token")
//                     .catch(err => reject())
//                     .then(tokenFromStorage => {
//                         fetchedToken = tokenFromStorage;
//                         if(!tokenFromStorage){
//                             reject();
//                             return;
//                         }
//                         return AsyncStorage.getItem("ap:auth:expiryDate");
//                     })
//                     .then(expiryDate => {
//                         const parsedExpiryDate = new Date(parseInt(expiryDate));
//                         const now = new Date();
//                         if(parsedExpiryDate > now){
//                             dispatch(authSetToken(fetchedToken));
//                             resolve(fetchedToken);    
//                         } else {
//                             reject();
//                         }
//                     })
//                     .catch(err =>  reject())
//             } else {
//                 resolve(token);
//             }
//         });
//         return promise
//             .catch(err => {
//             return AsyncStorage.getItem("ap:auth:refreshToken")
//                 .then(refreshToken => {
//                     return fetch("https://securetoken.googleapis.com/v1/token?key="+ authKey, {
//                         method: 'POST',
//                         headers: {
//                             "Content-Type": "application/x-www-form-urlencoded"
//                         },
//                         body: "grant_type=refresh_token&refresh_token="+refreshToken,
//                     })
//                 })
//                 .then(res => res.json())
//                 .then(parsedRes => {
//                     if(parsedRes.id_token){
//                         console.log('refresh token saves the day!')
//                         dispatch(authStoreToken(parsedRes.id_token, parsedRes.expires_in, parsedRes.refresh_token));
//                         return parsedRes.id_token;  // need to return token so in autoSignin it will trigger startMainTabs()
//                     } else {
//                         dispatch(authClearStorage())
//                     }
//                 })
//             })
//         .then(token => {
//             if (!token) {
//                 throw (new Error());
//             } else {
//                 return token;
//             }
//         })
//     };
// };

// export const autoSignin = () => {
//     return dispatch => {
//         dispatch(authGetToken())
//             .then(token => {
//                 startMainTabs();
//             })
//             .catch(err => console.log("Failed to fetch token: ", err));
//     }
// }

// export const authClearStorage = () => {
//     return dispatch => {
//         AsyncStorage.removeItem("ap:auth:token");
//         AsyncStorage.removeItem("ap:auth:expiryDate");    
//         return AsyncStorage.removeItem("ap:auth:refreshToken");    
//     }
// }

// export const authLogout = () => {
//     return dispatch => {
//         dispatch(authClearStorage())
//             .then(() => {
//                 setRoot();
//             });
//         dispatch(authRemoveToken());
//     }
// }

// export const authRemoveToken = () => {
//     return {
//         type: AUTH_REMOVE_TOKEN
//     };
// };




class AuthScreen extends Component {
    state = {
        token: null,
        expiryDate: null,
        viewMode: Dimensions.get('window').height > 500 ? "portrait" : "landscape",
        authMode: "login",
        controls: {
            email: {
                value: "",
                valid: false,
                validationRules: {
                    isEmail: true
                },
                touched: false
            },
            password: {
                value: "",
                valid: false,
                validationRules: {
                    minLength: 6
                },
                touched: false
            },
            confirmPassword: {
                value: "",
                valid: false,
                validationRules: {
                    equalTo: "password"
                },
                touched: false
            },
        },
        isLoading: false
    }

    constructor(props){
        super(props);
        Dimensions.addEventListener("change", this.updateViewModel);
    };

    componentWillUnmount = () => {
        Dimensions.removeEventListener("change", this.updateViewModel);
    }

    componentDidMount = () => {
        // good place to check if user has token
        // this.onAutoSignIn();
    }

    switchAuthModeHandler = () => {
        this.setState(prevState => {
            return {
                authMode: prevState.authMode === "login" ? "signup" : "login"
            }
        })
    }

    updateViewModel = (dims) => {
        this.setState({
            viewMode: dims.window.height > 500 ? "portrait" : "landscape"
        });
    };

    authHandler = () => {
        const authData = {
            email: this.state.controls.email.value,
            password: this.state.controls.password.value,
        } 
        // this.props.onTryAuth(authData, this.state.authMode);
    }

    updateInputState = (key, value) => {
        let connectedValue = {};
        if (this.state.controls[key].validationRules.equalTo) {
            const equalControl = this.state.controls[key].validationRules.equalTo;
            const equalValue = this.state.controls[equalControl].value;
            connectedValue = {
                ...connectedValue,
                equalTo: equalValue
            };
        }
        if(key === "password"){
            connectedValue = {
                ...connectedValue,
                equalTo: value
            };
        }
        this.setState( prevState => {
            return {
                controls: {
                    ...prevState.controls,
                    confirmPassword: {
                        ...prevState.controls.confirmPassword,
                        valid: 
                            key === "password"
                            ? validate(
                                prevState.controls.confirmPassword.value,
                                prevState.controls.confirmPassword.validationRules,
                                connectedValue
                                )
                            : prevState.controls.confirmPassword.valid
                    },
                    [key]: {
                        ...prevState.controls[key],
                        value: value,
                        valid: validate(value, prevState.controls[key].validationRules, connectedValue),
                        touched: true
                    },
                }
            }
        })
    }

    render () {
        var headingText = null;
        var confirmPasswordControl = null;
        let submmitButton = (
            <ButtonWithBackground 
                color="#29aaf4" 
                disabled={!this.state.controls.email.valid || !this.state.controls.password.valid || !this.state.controls.confirmPassword.valid && this.state.authMode === "signup"}
                onPress={this.authHandler}>
                Submit
            </ButtonWithBackground>
        );
        if(this.state.viewMode === 'portrait') {
            headingText = (
                <HeadingText >Please {this.state.authMode === "login" ? "Log In" : "Sign Up"}</HeadingText>
            );
        }
        if (this.state.authMode === 'signup') {
            confirmPasswordControl = (
                <View style={this.state.viewMode === "portrait" ? styles.portraitPasswordWrapper : styles.landscapePasswordWrapper}>
                    <DefaultInput 
                        style={styles.input} 
                        placeholder="Confirm Password" 
                        value={this.state.controls.confirmPassword.value}
                        onChangeText={ val => this.updateInputState("confirmPassword", val)}
                        touched={this.state.controls.confirmPassword.touched}
                        valid={this.state.controls.confirmPassword.valid}
                        secureTextEntry>
                    </DefaultInput>
                </View>
            );
        }

        if(this.state.isLoading) {
            submmitButton = <ActivityIndicator />
        }

        return (                
            <ImageBackground source={require(backgroundImage)} style={styles.backgroundImage}>
                <KeyboardAvoidingView style={styles.container} behavior="padding">
                    {headingText}
                    <ButtonWithBackground 
                        color="#29aaf4" 
                        onPress={this.switchAuthModeHandler}>
                        Switch to {this.state.authMode === "login" ? "Sign Up" : "Log In"}
                    </ButtonWithBackground>
                    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                        <View style={styles.inputContainer}>
                            <DefaultInput 
                                style={styles.input} 
                                placeholder="Your Email Address"
                                value={this.state.controls.email.value} 
                                onChangeText={val => this.updateInputState("email", val)}
                                touched={this.state.controls.email.touched}
                                valid={this.state.controls.email.valid}
                                autoCapitalize="none"
                                autoCorrect={false}
                                keyboardType="email-address">
                            </DefaultInput>
                            <View style={this.state.viewMode === "portrait" || this.state.authMode === "login" ? styles.portraitPasswordContainer : styles.landscapePasswordContainer}>
                                <View style={this.state.viewMode === "portrait" | this.state.authMode === "login" ? styles.portraitPasswordWrapper : styles.landscapePasswordWrapper}>
                                    <DefaultInput 
                                        style={styles.input} 
                                        placeholder="Password" 
                                        value={this.state.controls.password.value}
                                        onChangeText={ val => this.updateInputState("password", val)}
                                        touched={this.state.controls.password.touched}
                                        valid={this.state.controls.password.valid}
                                        secureTextEntry>
                                    </DefaultInput>
                                </View>
                                {confirmPasswordControl}
                            </View>
                        </View>
                    </TouchableWithoutFeedback>
                    {submmitButton}
                </KeyboardAvoidingView>
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    inputContainer: {
        width: "80%"
    },
    input: {
        backgroundColor: "#eee",
        borderColor: "#bbb"
    },
    backgroundImage: {
        width: "100%",
        flex: 1
    },
    landscapePasswordContainer: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    landscapePasswordWrapper: {
        width: "45%"
    },
    portraitPasswordContainer: {
        flexDirection: "column",
        justifyContent: "flex-start"
    },
    portraitPasswordWrapper: {
        width: "100%"
    }
});


// const mapDispatchToProps = dispatch => {
//     return {
//         onTryAuth: (authData, authMode) => dispatch(tryAuth(authData, authMode)),
//         onAutoSignIn: () => dispatch(autoSignin())
//     };
// };

export default AuthScreen;