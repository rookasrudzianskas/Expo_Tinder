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
import {Auth, DataStore} from 'aws-amplify';
import users from "../../assets/data/users";


const HomeScreen = () => {

    const [currentUser, setCurrentUser] = useState(null);
    const [me, setMe] = useState(null);

    useEffect(() => {
        const getCurrentUser = async () => {
            const user = await Auth.currentAuthenticatedUser();
            const dbUsers = await DataStore.query(User, u => u.sub === user.attributes.sub);


            if(dbUsers.length < 0) {
                return;
            }


            setMe(dbUsers[0]);
        };
        getCurrentUser();
    }, []);

    const onSwipeLeft = () => {
        if(!currentUser) {
            return;
        }
        console.warn('Swiped Left', currentUser?.name);
    }

    const onSwipeRight = () => {
        if(!currentUser) {
            return;
        }
        console.warn('Swiped right', currentUser?.name);
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

    return (
        <View style={styles.pageContainer}>
            {users.length > 0  && <AnimatedStack setCurrentUser={setCurrentUser} onSwipeLeft={onSwipeLeft} onSwipeRight={onSwipeRight} data={users} renderItem={({item}) => <TinderCard user={item} />} />}
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
