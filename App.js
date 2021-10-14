import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import {
    StyleSheet,
    View
} from 'react-native';
import HomeScreen from "./src/screens/HomeScreen";
import MatchesScreen from "./src/screens/MatchesScreen";
import {Fontisto} from "@expo/vector-icons";


const App = () => {

  return (
    <View style={styles.pageContainer}>
        {/*<HomeScreen />*/}
        <Fontisto name="tinder" size={24} color={'#ff0065'} />
        <MatchesScreen />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
    pageContainer: {
        // justifyContent: 'center',
        // alignItems: 'center',
        flexGrow: 1,
    },
});

export default App;
