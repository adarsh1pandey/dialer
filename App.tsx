import {View, Text, NativeModules, PermissionsAndroid} from 'react-native';
import React, {useEffect} from 'react';
const callModule = NativeModules.CallModule;

const App = () => {
  useEffect(() => {
    requestCameraPermission();
  }, []);
  const requestCameraPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.CALL_PHONE,
        {
          title: 'Cool Photo App Camera Permission',
          message:
            'Cool Photo App needs access to your camera ' +
            'so you can take awesome pictures.',
          buttonNeutral: 'Ask Me Later',
          buttonNegative: 'Cancel',
          buttonPositive: 'OK',
        },
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        console.log('You can use the camera');
      } else {
        console.log('Camera permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  return (
    <View>
      <Text
        onPress={() => {
          callModule.showToast('Adarsh is the greatest programmer');
          callModule.makeCall('9984703591');
        }}>
        App
      </Text>
    </View>
  );
};

export default App;
