import React, {Component} from 'react';
import {View, Text, SafeAreaView} from 'react-native';

class HelpScreen extends Component {
    state = {
    }

    render () {

        return (                
            <SafeAreaView>
                <View>
                    <Text>This is the Help Screen.</Text>
                </View>
            </SafeAreaView>
        );
    }
}


export default HelpScreen;