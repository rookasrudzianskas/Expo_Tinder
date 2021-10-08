import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {Image, ImageBackground, StyleSheet, Text, View} from 'react-native';
import tw from 'tailwind-react-native-classnames';
import TinderCard from "./src/components/TinderCard";

const jeff = {
    name: 'Jeff',
    bio: 'I am jeff',
    image: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/jeff.jpeg'
}


const App = () => {
  return (
    <View style={tw`flex-1 items-center justify-center`}>
        <TinderCard user={jeff} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({

});


export default App;
