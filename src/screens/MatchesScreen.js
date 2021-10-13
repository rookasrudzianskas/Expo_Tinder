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
                    <View style={styles.users}>
                        {users.map((user, index) => (
                            <View key={index} style={styles.user}>
                                <Image source={{uri: user.image}} style={styles.image} />
                            </View>
                        )) }
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default MatchesScreen;

const styles = StyleSheet.create({
    user: {
        width: 100,
        height: 100,
        padding: 10,
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
