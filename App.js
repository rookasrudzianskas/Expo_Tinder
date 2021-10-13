import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
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
    interpolate,
    useAnimatedGestureHandler,
    useAnimatedStyle, useDerivedValue,
    useSharedValue,
    withSpring
} from "react-native-reanimated";
import {PanGestureHandler} from "react-native-gesture-handler";




const App = () => {

    const ROTATION = 60;
    const [currentIndex, setCurrentIndex] = useState(2);
    const currentProfile = users[currentIndex];
    const {width: screenWidth} = useWindowDimensions();
    const hiddenTranslateX = 2 * screenWidth;

    const translateX = useSharedValue(0); /// -width             0            width
    const rotate = useDerivedValue(() =>
       interpolate(                          // -60 - left,     0 - center,    60 - right
           translateX.value,
           [0, hiddenTranslateX],
           [0, ROTATION]) + 'deg');


    const cardStyle = useAnimatedStyle(() => {
        return {
            transform: [
                {
                    translateX: translateX.value,
                },
                {
                    rotate: rotate.value,
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
                <TinderCard user={currentProfile} />
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
