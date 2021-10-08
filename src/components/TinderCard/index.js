import React from 'react';
import {Text, View, StyleSheet, ImageBackground} from 'react-native';
import tw from "tailwind-react-native-classnames";
import styles from "./style";

const TinderCard = () => {
    return (
            <View style={styles.card}>
                <View style={tw`flex-1 items-center justify-center`}>
                    <ImageBackground
                        style={styles.image}
                        source={{uri: 'https://wallpaperaccess.com/full/2582345.jpg'}} >
                        <View style={tw`p-6`}>
                            <Text style={{fontSize: 30, color: 'white', fontWeight: 'bold',}}>Rokas R.</Text>
                            <Text style={{fontSize: 18, color: 'white', lineHeight: 25,}}>Creative fullstack developer. Enthusiastic Growth Hacker, Internet Marketer, and Adobe Creative Cloud Junky</Text>
                        </View>
                    </ImageBackground>
                </View>
            </View>
    );
};

export default TinderCard;

