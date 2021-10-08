import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import tw from 'tailwind-react-native-classnames';


const App = () => {
  return (
    <View style={tw`flex-1 items-center justify-center`}>
      <Text style={tw`text-2xl font-bold`}>Tinder 🚀</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({

});


export default App;
