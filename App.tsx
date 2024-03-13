import {View, Text, NativeModules} from 'react-native';
import React from 'react';
const callModule = NativeModules.CallModule;

const App = () => {
  return (
    <View>
      <Text
        onPress={() =>
          callModule.showToast('Adarsh is the greatest programmer')
        }>
        App
      </Text>
    </View>
  );
};

export default App;
