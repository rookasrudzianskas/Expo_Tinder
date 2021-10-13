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

    const translateX = useSharedValue(0);


    const cardStyle = useAnimatedStyle(() => {
        return {
            transform: [
                {
                    translateX: translateX.value,
                }
            ],
        };
    });


    const gestureHandler = useAnimatedGestureHandler({
        onStart: (_, context) => {
            context.startX = translateX.value;
        },
        onActive: (event, context) => {
            translateX.value = context.startX + event.translationX;
        },
        onEnd: () => {
            console.warn('ended');
        }
    });

  return (
    <View style={styles.pageContainer}>
        <PanGestureHandler onGestureEvent={gestureHandler} >
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
        rotate: '60deg',
    },
});

export default App;
