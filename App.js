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
import tw from "tailwind-react-native-classnames";


const App = () => {

    const color = '#b5b5b5';

  return (
      <SafeAreaView style={{flex: 1,}}>
        <View style={styles.pageContainer}>
            <View style={[tw`flex flex-row mt-6 -mb-20`, {justifyContent: 'space-around', width: '100%'}]}>
                <Fontisto name="tinder" size={30} color={'#ff0065'} />
                <MaterialCommunityIcons name="star-four-points" size={30} color={color} />
                <Ionicons name="ios-chatbubbles" size={30} color={color} />
                <FontAwesome name="user" size={30} color={color} />
            </View>
            <HomeScreen />
            {/*<MatchesScreen />*/}
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
