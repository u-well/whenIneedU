import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Navigation} from 'react-native-navigation';

import Help from './src/screens/Help/Help';
import Distraction from './src/screens/Distraction/Distraction';

// type Props = {};
// export default class App extends Component<Props> {
//   render() {
//     setRoot()
//     return (
//       <View style={styles.container}>
//         <Text style={styles.welcome}>whenIneedU</Text>
//       </View>
//     );
//   }
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#F5FCFF',
//   },
//   welcome: {
//     fontSize: 20,
//     textAlign: 'center',
//     margin: 10,
//   },
// });

Navigation.registerComponent('whenIneedU.Distraction', () => Distraction);
Navigation.registerComponent('whenIneedU.Help', () => Help);

Navigation.events().registerAppLaunchedListener(() => {
  setRoot();
});

const setRoot = () => {
      Navigation.setRoot({
        root: {
          bottomTabs: {
            id: 'BottomTabsId',
            children: [{
              stack: {
                children: [{
                  component: {
                    id: 'distraction',
                    name: 'whenIneedU.Distraction',
                    passProps: {
                      text: 'This is tab 1'
                    }
                  }
                }],
                options: {
                  bottomTab: {
                    text: 'Tab 1',
                    testID: 'FIRST_TAB_BAR_BUTTON',
                    icon: require("./src/assets/images/icon.png")
                  }
                }
              }
            },
            {
              component: {
                id: 'help',
                name: 'whenIneedU.Help',
                passProps: {
                  text: 'This is tab 2'
                },
                options: {
                  bottomTab: {
                    text: 'Tab 2',
                    testID: 'SECOND_TAB_BAR_BUTTON',
                    icon: require("./src/assets/images/icon.png")
                  }
                }
              }
            }]
          }
        }
      })
}

export default setRoot;