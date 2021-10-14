import React, {useState} from 'react';
import {Text, View, StyleSheet, SafeAreaView, Image, TouchableOpacity, TextInput} from 'react-native';
import tw from "tailwind-react-native-classnames";
import users from "../../assets/data/users";
import {Auth} from 'aws-amplify';
import {Picker} from '@react-native-picker/picker';

const ProfileScreen = () => {

    const signOutFunc = () => {
        Auth.signOut();
    //     sign out
    }

    const [name, setName] = useState('');
    const [bio, setBio] = useState('');
    const [selectedLanguage, setSelectedLanguage] = useState();

    const save = () => {

    }

    return (

        <SafeAreaView>
            <View style={{width: '100%', flexGrow: 1, padding: 10, alignItems: 'center'}}>
               <Text style={tw`text-lg font-bold`}>Profile</Text>
                <TouchableOpacity onPress={signOutFunc}>
                    <Text style={tw`text-xl font-bold text-green-500`}>Sign out</Text>
                </TouchableOpacity>

                <View style={tw`mt-10`}>
                    <TextInput value={name} style={tw`text-lg`} onChangeText={setName} placeholder={'Enter your name'} />
                    <TextInput style={tw`mt-3 text-lg`} multiline numberOfLines={3} value={bio} onChangeText={setBio} placeholder={'Enter your bio'} />
                </View>

                <Picker
                    selectedValue={selectedLanguage}
                    onValueChange={(itemValue, itemIndex) =>
                        setSelectedLanguage(itemValue)
                    }>
                    <Picker.Item label="Java" value="java" />
                    <Picker.Item label="JavaScript" value="js" />
                </Picker>

                <TouchableOpacity onPress={save}>
                    <View style={tw`bg-green-500 px-10 mt-4 py-4 rounded-lg`}>
                        <Text style={tw`font-bold`}>Save</Text>
                    </View>
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
