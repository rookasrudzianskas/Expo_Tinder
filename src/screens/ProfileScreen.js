import React from 'react';
import {Text, View, StyleSheet, SafeAreaView, Image, TouchableOpacity} from 'react-native';
import tw from "tailwind-react-native-classnames";
import users from "../../assets/data/users";
import {Auth} from 'aws-amplify';

const ProfileScreen = () => {

    const signOutFunc = () => {
        Auth.signOut();
    //     sign out
    }
    return (

        <SafeAreaView>
            <View style={{width: '100%', flexGrow: 1, padding: 10, justifyContent: 'center', alignItems: 'center'}}>
               <Text style={tw`text-lg font-bold`}>Profile</Text>
                <TouchableOpacity onPress={signOutFunc}>
                    <Text style={tw`text-xl font-bold text-green-500`}>Sign out</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default ProfileScreen;

const styles = StyleSheet.create({
    user: {
        width: 100,
        height: 100,
        // padding: 8,
        borderWidth: 2,
        borderColor: '#F63A6e',
        borderRadius: 100,
        padding: 4,
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 100,
    },
    users: {
        flexDirection: 'row',
        flexWrap: 'wrap',

    },
});

// backend
