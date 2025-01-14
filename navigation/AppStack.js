import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { View } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { ProfileScreen, MapScreen, RestaurantScreen, SettingsScreen, RouletteScreen, FeedsScreen, AddReviewScreen } from "../screens";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const FeedsStack = ({navigation}) => {
    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen
                name="Home"
                component={FeedsScreen}
                options={{
                    headerRight: () => (
                        <View style={{marginRight: 10}}>
                            <Ionicons 
                            name="add-circle-outline" 
                            size={25}
                            onPress={() => navigation.navigate("AddReviews")}
                            />
                        </View>
                    )
                }}
            />

            <Stack.Screen
                name="AddReviews"
                component={AddReviewScreen}
                options={{
                    headerTitle: "Add Review"
                }}
            />
        </Stack.Navigator>
    )
}

const ProfileStack = ({navigation}) => {
    return (
    <Stack.Navigator initialRouteName="Profile">
            <Stack.Screen
                name="Profile"
                component={ProfileScreen}
                options={{header: () => null}}
            />

            <Stack.Screen
                name="Settings"
                component={SettingsScreen}
                options={{header: () => null}}
            />
        </Stack.Navigator>
    );
}

const AppStack = () => {
    return (
        <Tab.Navigator initialRouteName="Home">
            <Tab.Screen
                name="Home"
                component={FeedsStack}
                options={{
                    header: () => null,
                    tabBarLabel: 'Home',
                    tabBarIcon: ({color, size}) => (
                        <MaterialCommunityIcons
                            name="home-outline"
                            color={color}
                            size={size}
                       />
                    )
                    }}
            />

            <Stack.Screen
                name="Restaurant"
                component={RestaurantScreen}
                options={{
                    tabBarIcon: ({color, size}) => (
                        <Ionicons name="restaurant-outline" color ={color} size={size}/>
                    )
                }}
            />

            <Stack.Screen
                name="Map"
                component={MapScreen}
                options={{
                    tabBarIcon: ({color, size}) => (
                        <Ionicons name="map-outline" color ={color} size={size}/>
                    )
                }}
            />

            <Stack.Screen
                name="Roulette"
                component={RouletteScreen}
                options={{
                    tabBarIcon: ({color, size}) => (
                        <Ionicons name="help" color ={color} size={size}/>
                    )
                }}
            />

            <Tab.Screen
                name="Profile"
                component={ProfileStack}
                options={{
                    tabBarIcon: ({color, size}) => (
                        <Ionicons name="person-outline" color ={color} size={size}/>
                    )
                }}
            />
        </Tab.Navigator>
    )
}

export default AppStack