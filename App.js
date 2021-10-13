import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {Image, ImageBackground, Pressable, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import tw from 'tailwind-react-native-classnames';
import TinderCard from "./src/components/TinderCard";
import users from './assets/data/users.js';
import Animated, {useAnimatedStyle, useSharedValue} from "react-native-reanimated";



const App = () => {

    const sharedValue = useSharedValue(1);


    const cardStyle = useAnimatedStyle(() => {
        return {
            translate: [
                {
                    positionX:
                }
            ],
            opacity: sharedValue.value,
        };
    });

  return (
    <View style={styles.pageContainer}>
        <Animated.View style={[styles.animatedCard, cardStyle]}>
            <TinderCard user={users[0]} />
        </Animated.View>


      <StatusBar style="auto" />
        <TouchableOpacity onPress={() => sharedValue.value = Math.random()}>
            <Text style={tw``}>Change Value</Text>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
    pageContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flexGrow: 1,
    },
    animatedCard: {
        width: '90%',
        height: '70%',
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default App;
