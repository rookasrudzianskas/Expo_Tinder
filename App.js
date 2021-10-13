import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import {
    Image,
    ImageBackground,
    Pressable,
    StyleSheet,
    Text,
    TouchableOpacity,
    useWindowDimensions,
    View
} from 'react-native';
import tw from 'tailwind-react-native-classnames';
import TinderCard from "./src/components/TinderCard";
import users from './assets/data/users.js';
import Animated, {
    interpolate, runOnJS,
    useAnimatedGestureHandler,
    useAnimatedStyle, useDerivedValue,
    useSharedValue,
    withSpring
} from "react-native-reanimated";
import {PanGestureHandler} from "react-native-gesture-handler";
import Like from './assets/images/LIKE.png';
import Nope from './assets/images/nope.png';
import AnimatedStack from "./src/components/AnimatedStack";


const App = () => {


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
    animatedCard: {
        width: '90%',
        height: '70%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    nextCardContainer: {
        ...StyleSheet.absoluteFillObject,
        justifyContent: 'center',
        alignItems: 'center',
    },
    like: {
        width: 100,
        height: 100,
        resizeMode: 'contain',
        position: 'absolute',
        top: 10,
        zIndex: 1,
    }
});

export default App;
