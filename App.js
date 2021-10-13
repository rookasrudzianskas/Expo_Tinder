import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import {
    StyleSheet,
    View
} from 'react-native';
import HomeScreen from "./src/screens/HomeScreen";
import MatchesScreen from "./src/screens/MatchesScreen";


const App = () => {

  return (
    <View style={styles.pageContainer}>
        {/*<HomeScreen />*/}
        <MatchesScreen />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
    pageContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flexGrow: 1,
    },
});

export default App;
