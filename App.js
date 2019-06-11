import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Navigation} from 'react-native-navigation';
import { Provider } from 'react-redux';

import Home from './src/screens/Home/Home';
import Help from './src/screens/Help/Help';
import Distraction from './src/screens/Distraction/Distraction';
import VideoScreen from './src/screens/Video/VideoScreen';
import Activity from './src/screens/Activity/Activity';
import Auth from './src/screens/Auth/Auth';

import configureStore from './src/store/configureStore';

const store = configureStore();

Navigation.registerComponentWithRedux('whenIneedU.Home', () => Home, Provider, store);
Navigation.registerComponentWithRedux('whenIneedU.Distraction', () => Distraction, Provider, store);
Navigation.registerComponentWithRedux('whenIneedU.Help', () => Help, Provider, store);
Navigation.registerComponentWithRedux('whenIneedU.Video', () => VideoScreen, Provider, store);
Navigation.registerComponentWithRedux('whenIneedU.Activity', () => Activity, Provider, store);
Navigation.registerComponentWithRedux('whenIneedU.AuthScreen', () => Auth, Provider, store);

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