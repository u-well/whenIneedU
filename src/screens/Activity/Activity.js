import React, {Component} from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';

class ActivityScreen extends Component {
  render () {
    return (
      <SafeAreaView style={styles.activityContainer}>
        <Text>Placeholder for activity</Text>
      </SafeAreaView>
    )
  }
}

var styles = StyleSheet.create({
  activityContainer: {
    flex: 1,
  },
});


export default ActivityScreen;