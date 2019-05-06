import React, {Component} from 'react';
import {SectionList, View, Text, StyleSheet} from 'react-native';

class DistractionScreen extends Component {
    state = {
    }

    render () {

        return (                
            <View style={styles.container}>
            <SectionList
              sections={[
                {title: 'Activities', data: ['Activity 1', 'Activity 2', 'Activity 3', 'Activity 4', 'Activity 5',]},
                {title: 'Videos', data: ['Video A', 'Video B', 'Video C']},
              ]}
              renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
              renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
              keyExtractor={(item, index) => index}
            />
          </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22
    },
    sectionHeader: {
        paddingTop: 2,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 2,
        fontSize: 14,
        fontWeight: 'bold',
        backgroundColor: 'rgba(247,247,247,1.0)',
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
})

export default DistractionScreen;