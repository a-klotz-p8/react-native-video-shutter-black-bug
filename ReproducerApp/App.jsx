/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NewAppScreen } from '@react-native/new-app-screen';
import {
  Button,
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
} from 'react-native';
import Video, { ViewType } from 'react-native-video';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';
import { useState } from 'react';

function App() {
  const [showVideo, setShowVideo] = useState(false);
  return (
    <SafeAreaProvider>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          gap: 50,
        }}
      >
        <Button
          title="Toggle Video"
          onPress={() => {
            setShowVideo(prev => !prev);
          }}
        ></Button>
        {showVideo && (
          <Video
            shutterColor="transparent"
            hideShutterView={true}
            style={{
              width: 200,
              aspectRatio: 5 / 4,
            }}
            source={{
              uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4',
            }}
          ></Video>
        )}
      </View>
    </SafeAreaProvider>
  );
}

function AppContent() {
  const safeAreaInsets = useSafeAreaInsets();

  return (
    <View style={styles.container}>
      <NewAppScreen
        templateFileName="App.tsx"
        safeAreaInsets={safeAreaInsets}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
