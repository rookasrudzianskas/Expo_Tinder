import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import {
    StyleSheet,
    View
} from 'react-native';
import TinderCard from "./src/components/TinderCard";
import users from './assets/data/users.js';
import AnimatedStack from "./src/components/AnimatedStack";


const App = () => {

    const onSwipeLeft = (user) => {
        console.log('Swiped Left');
    }

  return (
    <View style={styles.pageContainer}>
        <AnimatedStack data={users} renderItem={({item}) => <TinderCard user={item} />} />
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
