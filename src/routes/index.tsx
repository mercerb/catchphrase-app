import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";

import Profile from "../screens/Profile/index";
import Icon from "react-native-vector-icons/FontAwesome";
import ListView from "../screens/ListView/index";

export enum ROUTES {
  RootListView = "ListView",
  RootProfile = "Profile",
}

const TabStack = createBottomTabNavigator(
  {
    [ROUTES.RootListView]: {
      screen: ListView,
      navigationOptions: {
        tabBarLabel: "list",
        tabBarIcon: ({ focused, horizontal, tintColor }) => {
          return <Icon name="list" size={25} color="rgba(49,52,83,0.8)" />;
        },
      },
    },
    [ROUTES.RootProfile]: {
      screen: Profile,
      navigationOptions: {
        tabBarLabel: "profile",
        tabBarIcon: ({ focused, horizontal, tintColor }) => {
          return <Icon name="user" size={25} color="rgba(49,52,83,0.8)" />;
        },
      },
    },
  },
  {
    tabBarOptions: {
      showIcon: true,
      activeTintColor: "rgba(49,52,83,0.8)",
      labelStyle: {
        fontSize: 16,
      },
      style: {
        height: 70,
        paddingTop: 15,
      },
    },
  }
);

const RootStack = createSwitchNavigator(
  {
    Main: {
      screen: TabStack,
    },
  },
  {
    initialRouteName: "Main",
  }
);

const AppContainer = createAppContainer(RootStack);

export default AppContainer;
