import React from 'react';
import {Text, View, StyleSheet, SafeAreaView, Image} from 'react-native';
import tw from "tailwind-react-native-classnames";
import users from "../../assets/data/users";

const MatchesScreen = () => {
    return (

        <SafeAreaView>
            <View style={{width: '100%', flexGrow: 1, padding: 10}}>
                <View style={{padding: 10,}}>
                    <Text style={tw`font-bold text-xl text-pink-400`}>
                        New Matches 🚀
                    </Text>
                    {users.map((user) => (
                        <View style={styles.user}>
                            <Image source={{uri: user.image}} style={styles.image} />
                        </View>
                    )) }
                </View>
            </View>
        </SafeAreaView>
    );
};

export default MatchesScreen;

const styles = StyleSheet.create({
    user: {
        width: 150,
        height: 150,
    },
    image: {
        width: '100%',
        height: '100%',
    }
});
