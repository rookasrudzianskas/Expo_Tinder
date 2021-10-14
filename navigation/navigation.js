// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from "../src/screens/HomeScreen";
import MatchesScreen from "../src/screens/MatchesScreen";


const Stack = createNativeStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="MatchesScreen" component={MatchesScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;
