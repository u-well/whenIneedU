import React, {Component} from 'react';
import {View, Text, SafeAreaView, Button, StyleSheet, ScrollView, Linking, TouchableOpacity, Alert} from 'react-native';

import { MY_PHONE_NUMBER, TWILIO_PHONE_NUMBER } from 'react-native-dotenv';


class HelpScreen extends Component {
    state = {
        location: null
    }

    makeCall = (phoneNumber) => {
        console.log("phoneNumber: ", phoneNumber);   // TOOD: remove after testing
        Linking.openURL(`tel:${phoneNumber}`)
    }

    sendText = (phoneNumber) => {
        console.log('in sendText with phoneNumber:', phoneNumber)
        fetch('http://192.168.1.107:3000/api/messages', {
            method: 'POST',
            body: JSON.stringify({
                toPhone: phoneNumber,
                fromPhone: TWILIO_PHONE_NUMBER || process.env.TWILIO_PHONE_NUMBER  // process.env not yet working
            }),
            headers: {
                "Content-Type": "application/json"
            }
        })
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
    }

    
    findCoordinates = () => {
        navigator.geolocation.getCurrentPosition(
          position => {
            const location = JSON.stringify(position);
    
            this.setState({ location });
          },
            error => Alert.alert(error.message),
            { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
        );
      };

    render () {

        return (                
            <SafeAreaView style={{flex: 1}}>
            <ScrollView>
                <View style={{flex: 1, backgroundColor: 'aliceblue'}}>
                    <Text style={styles.header}>Crisis Text Line</Text>
                    {/* Text NAMI to 741-741 */}
                    <Button 
                        title="Crisis Text Line" 
                        color="#841584"
                        // onPress={}
                        accessibilityLabel="text the national crisis text lifeline"
                    />
                </View>
                <View style={{flex: 1, backgroundColor: 'powderblue'}}>
                    <Text style={styles.header}>Lifeline</Text>
                    <Button 
                        title="800-273-TALK (8255)"
                        color="#841584"
                        onPress={() => this.makeCall("5555555555")}
                        accessibilityLabel="call the national crisis lifeline"
                    />
                </View>
                <View style={{flex: 1, backgroundColor: 'skyblue'}}>
                    <Text style={styles.header}>Contact Name 1</Text>
                    <Button 
                        title="I-need-U-1" 
                        color="#841584"
                        onPress={() => this.sendText(MY_PHONE_NUMBER || process.env.MY_PHONE_NUMBER)}  // process.env not working now
                        accessibilityLabel="contact your first person"
                    />
                </View>
                <View style={{flex: 1, backgroundColor: 'powderblue'}}>
                    <Text style={styles.header}>Contact Name 2</Text>
                    <Button 
                        title="I-need-U-2"
                        color="#841584"
                        // onPress={}
                        accessibilityLabel="contact your second person"
                    />
                </View>
                <View style={{flex: 1, backgroundColor: 'steelblue'}}>
                    <Text style={styles.header}>Contact Name 3</Text>
                    <Button 
                        title="I-need-U-3"
                        color="#841584"
                        // onPress={}
                        accessibilityLabel="contact your third person"
                    />
                </View>
                <View style={styles.container}>
                    <TouchableOpacity onPress={this.findCoordinates}>
                        <Text style={styles.welcome}>Find My Coords?</Text>
                        <Text>Location: {this.state.location}</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F5FCFF"
    },
    header: {
      color: 'black',
      fontWeight: 'bold',
      fontSize: 24,
    },
    welcome: {
        fontSize: 20,
        textAlign: "center",
        margin: 10
    },
});

export default HelpScreen;