import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {Image, ImageBackground, StyleSheet, Text, View} from 'react-native';
import tw from 'tailwind-react-native-classnames';
import TinderCard from "./src/components/TinderCard";


const App = () => {
  return (
    <View style={tw`flex-1 items-center justify-center`}>
        <TinderCard />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({

});


export default App;
