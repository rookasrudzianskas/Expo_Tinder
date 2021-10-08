import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {Image, ImageBackground, StyleSheet, Text, View} from 'react-native';
import tw from 'tailwind-react-native-classnames';


const App = () => {
  return (
    <View style={tw`flex-1 items-center justify-center`}>
        <View style={styles.card}>
            <View style={tw`flex-1 items-center justify-center`}>
                <ImageBackground
                    style={styles.image}
                    source={{uri: 'https://wallpaperaccess.com/full/2582345.jpg'}} >
                    <Text style={{fontSize: 30, color: 'white', fontWeight: 'bold'}}>Rokas R.</Text>
                    <Text style={{fontSize: 18, color: 'white', lineHeight: 25,}}>Creative fullstack developer. Enthusiastic Growth Hacker, Internet Marketer, and Adobe Creative Cloud Junky</Text>
                </ImageBackground>
            </View>
        </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: "100%",
        borderRadius: 10,
        overflow: 'hidden',

        justifyContent: 'flex-end',

    },
     card: {
         width: '95%',
         backgroundColor: 'orange',
         height: '70%',
         borderRadius: 10,
         shadowColor: "#000",
         shadowOffset: {
             width: 0,
             height: 5,
         },
         shadowOpacity: 0.36,
         shadowRadius: 6.68,

         elevation: 11,
     }
});


export default App;
