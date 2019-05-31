import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Navigation} from 'react-native-navigation';

import Home from './src/screens/Home/Home';
import Help from './src/screens/Help/Help';
import Distraction from './src/screens/Distraction/Distraction';
import VideoScreen from './src/screens/Video/VideoScreen';
import Activity from './src/screens/Activity/Activity';

Navigation.registerComponent('whenIneedU.Home', () => Home);
Navigation.registerComponent('whenIneedU.Distraction', () => Distraction);
Navigation.registerComponent('whenIneedU.Help', () => Help);
Navigation.registerComponent('whenIneedU.Video', () => VideoScreen);
Navigation.registerComponent('whenIneedU.Activity', () => Activity);

Navigation.events().registerAppLaunchedListener(() => {
  setRoot();
});

Navigation.setDefaultOptions({
  options: {
    topBar: {
      title: {
        text: 'whenIneedU'
      }
    }
  }
});

// const setRoot = () => {
//   Navigation.setRoot({
//     root: {
//       stack: {
//         children: [{
//           component: {
//             name: 'awesome-places.AuthScreen',
//             options: {
//               topBar: {
//                 visible: true,
//                 title: {
//                   text: "Welcome Login Screen",
//                 },
//               },
//             }
//           },    
//         }],
//       },
//     }
//   });
// };

const setRoot = () => {
  Navigation.setRoot({
    root: {
      bottomTabs: {
        id: 'BottomTabsId',
        children: [{
          stack: {
            children: [{
              component: {
                id: 'home',
                name: 'whenIneedU.Home',
                passProps: {
                  text: 'This is tab 0'
                },
                options: {
                  topBar: {
                    title: {
                      text: 'Home'
                    }
                  },
                  bottomTab: {
                    text: 'Home',
                    testID: 'ZERO_TAB_BAR_BUTTON',
                    icon: require("./src/assets/images/icon.png")
                  },
                }
              }
            }]
          } // end stack 0
        },
          {
          stack: {
            children: [{
              component: {
                id: 'distraction',
                name: 'whenIneedU.Distraction',
                passProps: {
                  text: 'This is tab 1'
                },
                options: {
                  topBar: {
                    title: {
                      text: 'Distract Me!'
                    }
                  }
                }
              }
            }],
            options: {
              bottomTab: {
                text: 'Distract Me',
                testID: 'FIRST_TAB_BAR_BUTTON',
                icon: require("./src/assets/images/icon.png")
              },
            }
          }
        },
        {
          stack: {
            children: [{
              component: {
                id: 'help',
                name: 'whenIneedU.Help',
                passProps: {
                  text: 'This is tab 2'
                },
                options: {
                  topBar: {
                    title: {
                      text: 'Help!'
                    }
                  },
                  bottomTab: {
                    text: 'I need U',
                    testID: 'SECOND_TAB_BAR_BUTTON',
                    icon: require("./src/assets/images/icon.png")
                  },
                }
              }
            }]
          } // end stack 2
        }]
      }
    }
  })
}

export default setRoot;