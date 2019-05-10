import React, {Component} from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import Bubbles from '../../components/Activities/Bubbles';

class ActivityScreen extends Component {
  render () {
    return (
      <SafeAreaView style={styles.activityContainer}>
        <Bubbles></Bubbles>
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