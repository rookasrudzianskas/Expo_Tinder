import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import tw from 'tailwind-react-native-classnames';


export default function App() {
  return (
    <View style={tw`flex-1 items-center mt-10 justify-center`}>
      <Text style={tw`text-2xl font-bold`}>Tinder 🚀</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({

});
