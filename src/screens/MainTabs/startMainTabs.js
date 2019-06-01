import { Navigation } from 'react-native-navigation';

const startTabs = () => {
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
                        icon: require("../../assets/images/icon.png")
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
                    icon: require("../../assets/images/icon.png")
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
                        icon: require("../../assets/images/icon.png")
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

export default startTabs;

