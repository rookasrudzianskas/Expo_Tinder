import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {Image, ImageBackground, StyleSheet, Text, View} from 'react-native';
import tw from 'tailwind-react-native-classnames';
import TinderCard from "./src/components/TinderCard";
import users from './assets/data/users.js';
import Animated, {useAnimatedStyle, useSharedValue} from "react-native-reanimated";



const App = () => {

    const sharedValue = useSharedValue(1);
    const cardStyle = useAnimatedStyle(() => ({
        opacity: sharedValue.value,
    }));

  return (
    <View style={tw`flex-1 items-center justify-center`}>
        <Animated.View style={[styles.animatedCard, cardStyle]}>
            <TinderCard user={users[0]} />
        </Animated.View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
    animatedCard: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        // opacity: 0.5
    }
});

export default App;
