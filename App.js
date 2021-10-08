import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import tw from 'tailwind-react-native-classnames';


const App = () => {
  return (
    <View style={tw`flex-1 items-center justify-center`}>
        <View style={styles.card}>
            <View style={tw`flex-1 items-center justify-center`}>
                <Image
                    style={styles.image}
                    source={{uri: 'https://wallpaperaccess.com/full/2582345.jpg'}} />
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
