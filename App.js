import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Navigation} from 'react-native-navigation';

import Home from './src/screens/Home/Home';
import Help from './src/screens/Help/Help';
import Distraction from './src/screens/Distraction/Distraction';
import VideoScreen from './src/screens/Video/VideoScreen';
import Activity from './src/screens/Activity/Activity';
import Auth from './src/screens/Auth/Auth';

Navigation.registerComponent('whenIneedU.Home', () => Home);
Navigation.registerComponent('whenIneedU.Distraction', () => Distraction);
Navigation.registerComponent('whenIneedU.Help', () => Help);
Navigation.registerComponent('whenIneedU.Video', () => VideoScreen);
Navigation.registerComponent('whenIneedU.Activity', () => Activity);
Navigation.registerComponent('whenIneedU.AuthScreen', () => Auth);

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

const setRoot = () => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [{
          component: {
            name: 'whenIneedU.AuthScreen',
            options: {
              topBar: {
                visible: true,
                title: {
                  text: "Welcome Login Screen",
                },
              },
            }
          },    
        }],
      },
    }
  });
};

export default setRoot;