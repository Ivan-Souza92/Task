import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../pages/home/Home';
import { TouchableOpacity } from "react-native";
import { MaterialIcons } from '@expo/vector-icons'
import Details from '../pages/details/Details';

const Stack = createStackNavigator();



const Routes = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Tarefas"  component={Home}/>
                <Stack.Screen name="Details"  component={Details}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Routes