import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {Image, ImageBackground, Pressable, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import tw from 'tailwind-react-native-classnames';
import TinderCard from "./src/components/TinderCard";
import users from './assets/data/users.js';
import Animated, {
    useAnimatedGestureHandler,
    useAnimatedStyle,
    useSharedValue,
    withSpring
} from "react-native-reanimated";
import {PanGestureHandler} from "react-native-gesture-handler";




const App = () => {

    const sharedValue = useSharedValue(1);


    const cardStyle = useAnimatedStyle(() => {
        return {
            transform: [
                {
                    translateX: sharedValue.value * 500 - 250,
                }
            ],
            opacity: sharedValue.value,
        };
    });


    const gestureHandler = useAnimatedGestureHandler({
        onStart: (_) => {
            console.log('Touch start');
        },
        onActive: (event) => {
            console.log(`touch x is ${event.translationX}`);
        },
        onEnd: () => {
            console.log('ended');
        }
    });

  return (
    <View style={styles.pageContainer}>
        <PanGestureHandler gestureHandler={gestureHandler} >
            <Animated.View style={[styles.animatedCard, cardStyle]}>
                <TinderCard user={users[0]} />
            </Animated.View>
        </PanGestureHandler>


      <StatusBar style="auto" />
        {/*<TouchableOpacity onPress={() => sharedValue.value = withSpring(Math.random())}>*/}
        {/*    <Text style={tw``}>Change Value</Text>*/}
        {/*</TouchableOpacity>*/}
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
