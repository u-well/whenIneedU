import React, {Component} from 'react';
import { View, Text, StyleSheet, SafeAreaView } from 'react-native';
import Video from 'react-native-video';

class VideoScreen extends Component {
  // article & code re: using react-native-video: https://hackernoon.com/video-streaming-in-your-react-native-app-feae1c6ae4e2
  // mp4 video: https://coverr.co/videos/Scrolling%20iPhone%20XR
  render () {
    return (
      <SafeAreaView style={styles.videoContainer}>
        <Video
          source={require('../../assets/videos/scrolling.mp4')}
          style={styles.backgroundVideo}
          muted={true}
          repeat={true}
          resizeMode={"cover"}
          volume={1.0}
          rate={1.0}
          ignoreSilentSwitch={"obey"}
        />
      </SafeAreaView>
    )
  }
}

var styles = StyleSheet.create({
  videoContainer: {
    flex: 1,
    backgroundColor: 'black',
  },
  backgroundVideo: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
});


export default VideoScreen;