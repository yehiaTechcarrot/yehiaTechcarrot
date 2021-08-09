
import * as React from 'react';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import HomeScreen from "../containers/home";
import ScenesScreen from "../containers/scenes";
import MeditationScreen from "../containers/meditation";


import { Image } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import AffirmationsScreen from "../containers/affirmations";
import MoreScreen from "../containers/more";


const Tab = createMaterialBottomTabNavigator();

const DashboardBottomNavigator = () => (
  <Tab.Navigator
    initialRouteName="Home"
    activeColor={Colors.white}
    inactiveColor={Colors.white}
    shifting={false}
    barStyle={{ backgroundColor: 'rgba(25, 42, 95, 1)' }}
  >

    <Tab.Screen
      name="Scenes"
      component={ScenesScreen}
      options={{
        tabBarLabel: 'Scenes',
        tabBarIcon: ({ color }) => (
          <Image
            source={require("../../assets/scenes_icon.png")}
            style={{
              resizeMode: "stretch",
              width: 22,
              height: 22,
            }} />
        ),
      }}
    />

    <Tab.Screen
      name="Meditation"
      component={MeditationScreen}
      options={{
        tabBarLabel: 'Meditation',
        tabBarIcon: ({ color }) => (
          <Image
            source={require("../../assets/meditation_icon.png")}
            style={{
              resizeMode: "stretch",
              width: 22,
              height: 22,
            }} />
        ),
      }}
    />

    <Tab.Screen
      name="Home"
      component={HomeScreen}
      options={{
        tabBarLabel: 'Let it go',
        tabBarIcon: ({ color }) => (

            <Image
              source={require("../../assets/home_icon.png")}
              style={{
                resizeMode: "stretch",
                width: 22,
                height: 22,
              }} />


        ),
      }}
    />


    <Tab.Screen
      name="Affirmations"
      component={AffirmationsScreen}
      options={{
        tabBarLabel: 'Affirmations',
        tabBarIcon: ({ color }) => (
          <Image
            source={require("../../assets/affirmations_icon.png")}
            style={{
              resizeMode: "stretch",
              width: 22,
              height: 22,
            }} />
        ),
      }}
    />

    <Tab.Screen
      name="More"
      component={MoreScreen}
      options={{
        tabBarLabel: 'Affirmations',
        tabBarIcon: ({ color }) => (
          <Image
            source={require("../../assets/more_vertically_icon.png")}
            style={{
              resizeMode: "stretch",
              width: 22,
              height: 22,
            }} />
        ),
      }}
    />


  </Tab.Navigator>
)

 export default DashboardBottomNavigator;
