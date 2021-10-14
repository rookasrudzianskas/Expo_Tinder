import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import {
    SafeAreaView,
    StyleSheet,
    View
} from 'react-native';
import HomeScreen from "./src/screens/HomeScreen";
import MatchesScreen from "./src/screens/MatchesScreen";
import {FontAwesome, Fontisto, Ionicons, MaterialCommunityIcons} from "@expo/vector-icons";


const App = () => {

    const color = '#cbc9c9';

  return (
      <SafeAreaView style={{flex: 1,}}>
        <View style={styles.pageContainer}>
            {/*<HomeScreen />*/}
            <Fontisto name="tinder" size={24} color={'#ff0065'} />
            <MaterialCommunityIcons name="star-four-points" size={24} color={color} />
            <Ionicons name="ios-chatbubbles" size={24} color={color} />
            <FontAwesome name="user" size={24} color={color} />
            <MatchesScreen />
          <StatusBar style="auto" />
        </View>
      </SafeAreaView>
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
