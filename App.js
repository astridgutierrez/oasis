import React from 'react';
import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from "@react-navigation/stack";

import HomeScreen from "C:/wamp64/www/oasis/Screens/HomeScreen.js";
import LoadScreen from "C:/wamp64/www/oasis/Screens/LoadScreen.js";
import PlantScreen from "C:/wamp64/www/oasis/Screens/PlantScreen.js";
import StatusScreen from "C:/wamp64/www/oasis/Screens/StatusScreen.js";

export default class App extends React.Component {
    render() {

        const Stack = createStackNavigator();
        return (
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen
                        name="Homepage"
                        component={HomeScreen}
                        options={{title: 'Oasis'}}
                    />
                    <Stack.Screen name="Plant" component={PlantScreen}/>
                    <Stack.Screen name="Status" component={StatusScreen}/>
                    {/*<Stack.Screen name="Loading" component={LoadScreen}/>*/}
                </Stack.Navigator>
            </NavigationContainer>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        padding: 20,
        borderWidth: 1,
    }
});

