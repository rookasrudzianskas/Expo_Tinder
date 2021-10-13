import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import tw from "tailwind-react-native-classnames";

const MatchesScreen = () => {
    return (
        <View>
            <Text style={tw`font-bold text-xl text-pink-400`}>
                New Matches 🚀
            </Text>
        </View>
    );
};

export default MatchesScreen;
