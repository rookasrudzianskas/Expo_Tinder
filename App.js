import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import tw from 'tailwind-react-native-classnames';


const App = () => {
  return (
    <View style={tw`flex-1 items-center justify-center`}>
        <Image source={{uri: 'https://wallpaperaccess.com/full/2582345.jpg'}} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({

});


export default App;
