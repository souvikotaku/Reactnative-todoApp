import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { Ionicons } from "@expo/vector-icons";
import { createDrawerNavigator } from "react-navigation-drawer";

import { createAppContainer } from "react-navigation";

import CompletedScreen from "../screens/CompletedScreen";
import PendingScreen from "../screens/PendingScreen";

const TodoNavigator = createStackNavigator(
  {
    Pending: PendingScreen,
    Completed: CompletedScreen,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "pink",
      },
    },
  }
);

// const TodoCompletedNavigator = createStackNavigator(
//   {
//     //   Pending: PendingScreen,
//     Completed: CompletedScreen,
//   },
//   {
//     defaultNavigationOptions: {
//       headerStyle: {
//         backgroundColor: "pink",
//       },
//     },
//   }
// );

// const MealsFavTabNavigator = createBottomTabNavigator(
//   {
//     Pending: {
//       screen: TodoNavigator,
//       navigationOptions: {
//         tabBarIcon: (tabInfo) => {
//           return (
//             <Ionicons
//               name="ios-restaurant"
//               size={25}
//               color={tabInfo.tintColor}
//             />
//           );
//         },
//       },
//     },
//     Completed: {
//       screen: TodoCompletedNavigator,
//       navigationOptions: {
//         tabBarIcon: (tabInfo) => {
//           return (
//             <Ionicons name="ios-star" size={25} color={tabInfo.tintColor} />
//           );
//         },
//       },
//     },
//   },
//   {
//     tabBarOptions: {
//       activeTintColor: "pink",
//     },
//   }
// );

export default createAppContainer(TodoNavigator);
