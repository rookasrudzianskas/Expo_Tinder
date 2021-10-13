import React from 'react';
import {Text, View, StyleSheet, SafeAreaView} from 'react-native';
import tw from "tailwind-react-native-classnames";

const MatchesScreen = () => {
    return (

        <SafeAreaView>
            <View style={{width: '100%', flexGrow: 1, padding: 10}}>
                <View style={{padding: 10,}}>
                    <Text style={tw`font-bold text-xl text-pink-400`}>
                        New Matches 🚀
                    </Text>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default MatchesScreen;
