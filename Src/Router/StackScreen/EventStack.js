import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Event from "../../Screens/Home/EventScreen";

const MyEventStack = createStackNavigator();

const EventStack = () => (
  <MyEventStack.Navigator>
    <MyEventStack.Screen
      name="Event"
      component={Event}
      options={{ headerShown: false }}
    />
  </MyEventStack.Navigator>
);

export default EventStack;
