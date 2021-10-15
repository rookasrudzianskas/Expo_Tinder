import { StatusBar } from 'expo-status-bar';
import React, {useEffect, useState} from 'react';
import {
    StyleSheet, TouchableOpacity,
    View
} from 'react-native';
import TinderCard from "./../../src/components/TinderCard";
import AnimatedStack from "./../../src/components/AnimatedStack";
import {Entypo, FontAwesome, Ionicons} from "@expo/vector-icons";
import tw from "tailwind-react-native-classnames";
import {User} from "../models";
import {DataStore} from 'aws-amplify';


const HomeScreen = () => {

    const onSwipeLeft = (user) => {
        console.log('Swiped Left', user?.name);
    }

    const onSwipeRight = (user) => {
        console.log('Swiped right', user?.name);
    }

    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            const fetchedUsers = await DataStore.query(User);
            setUsers(fetchedUsers);
        }
        fetchUsers();
    }, []);

    // console.warn(users);

    console.log(users);

    return (
        <View style={styles.pageContainer}>
            <AnimatedStack onSwipeLeft={onSwipeLeft} onSwipeRight={onSwipeRight} data={users} renderItem={({item}) => <TinderCard user={item} />} />
            <View style={{flexDirection: 'row', width: '100%', justifyContent: 'space-around', marginHorizontal: 10, marginTop: -80}}>
                <TouchableOpacity>
                    <View style={tw`bg-gray-100 p-5 rounded-full shadow-md`}>
                    <FontAwesome name="undo" size={30} color="#FBD88B" />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={tw`bg-gray-100 p-5 rounded-full shadow-md`}>
                    <Entypo name="cross" size={30} color="#F76C6B" />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={tw`bg-gray-100 p-5 rounded-full shadow-md`}>
                    <FontAwesome name="star" size={30} color="#3AB4CC" />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={tw`bg-gray-100 p-5 rounded-full shadow-md`}>
                    <FontAwesome name="heart" size={30} color="#4FCC94" />
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={tw`bg-gray-100 p-5 rounded-full shadow-md`}>
                    <Ionicons name="flash" size={30} color="#A65CD2" />
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    pageContainer: {
        // marginTop: -100,
        justifyContent: 'center',
        alignItems: 'center',
        flexGrow: 1,
        width: '100%',
        // backgroundColor: '#ededed',
    },
});

export default HomeScreen;
