import React, {Component} from 'react';
import {View, Text, SafeAreaView, Button, StyleSheet, ScrollView, Linking} from 'react-native';
import axios from 'axios';

import { MY_PHONE_NUMBER, TWILIO_PHONE_NUMBER } from 'react-native-dotenv';


class HelpScreen extends Component {
    state = {
    }

    makeCall = (phoneNumber) => {
        console.log("phoneNumber: ", phoneNumber);
        Linking.openURL(`tel:${phoneNumber}`)
    }

    sendText = (phoneNumber) => {
        console.log('in sendText with phoneNumber:', phoneNumber)
        axios.post('http://192.168.1.107:3000/api/messages', {  //replace ip address with your own
            toPhone: phoneNumber,
            fromPhone: TWILIO_PHONE_NUMBER || process.env.TWILIO_PHONE_NUMBER  // process.env not yet working
          })
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
    }

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
            </ScrollView>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    header: {
      color: 'black',
      fontWeight: 'bold',
      fontSize: 24,
    },
});

export default HelpScreen;