import React, {Component} from 'react';
import {View, Text, SafeAreaView, Button, StyleSheet, ScrollView} from 'react-native';

class HelpScreen extends Component {
    state = {
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
                        // onPress={}
                        accessibilityLabel="call the national crisis lifeline"
                    />
                </View>
                <View style={{flex: 1, backgroundColor: 'skyblue'}}>
                    <Text style={styles.header}>Contact Name 1</Text>
                    <Button 
                        title="I-need-U-1" 
                        color="#841584"
                        // onPress={}
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