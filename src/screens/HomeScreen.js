import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import {
    StyleSheet,
    View
} from 'react-native';
import TinderCard from "./../../src/components/TinderCard";
import users from '../../assets/data/users.js';
import AnimatedStack from "./../../src/components/AnimatedStack";


const HomeScreen = () => {

    const onSwipeLeft = (user) => {
        console.log('Swiped Left', user?.name);
    }

    const onSwipeRight = (user) => {
        console.log('Swiped right', user?.name);
    }

    return (
        <View style={styles.pageContainer}>
            <AnimatedStack onSwipeLeft={onSwipeLeft} onSwipeRight={onSwipeRight} data={users} renderItem={({item}) => <TinderCard user={item} />} />
        </View>
    );
}

const styles = StyleSheet.create({
    pageContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flexGrow: 1,
        width: '100%',
    },
});

export default HomeScreen;
