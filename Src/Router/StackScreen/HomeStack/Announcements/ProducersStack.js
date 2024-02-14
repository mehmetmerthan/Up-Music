import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import BeatmakerScreen from "../../../../Screens/Home/Announcements/Producers/BeatmakerScreen";
import ComposerScreen from "../../../../Screens/Home/Announcements/Producers/ComposerScreen";
import MixingScreen from "../../../../Screens/Home/Announcements/Producers/MixingScreen";
import ProducersScreen from "../../../../Screens/Home/Announcements/Producers/ProducersScreen";
import BeatmakerFilterScreen from "../../../../Screens/Filter/Announcements/Producers/BeatmakerFilterScreen";
import ComposerFilterScreen from "../../../../Screens/Filter/Announcements/Producers/ComposerFilterScreen";
import MixingFilterScreen from "../../../../Screens/Filter/Announcements/Producers/MixingFilterScreen";
import ProducersFilterScreen from "../../../../Screens/Filter/Announcements/Producers/ProducersFilterScreen";
import SongwriterScreen from "../../../../Screens/Home/Announcements/Producers/SongwriterScreen";
import SongwriterFilterScreen from "../../../../Screens/Filter/Announcements/Producers/SongwriterFilterScreen";
import HeaderRight from "../../../../Components/PostComponents/Headers/HeaderRight";
const Stack = createStackNavigator();
export default function ProducersStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="AnnouncementsProducersScreen"
        component={ProducersScreen}
        options={{
          headerShown: true,
          title: "Producers",
          headerRight: () => <HeaderRight screenName="ProducersFilterScreen" />,
        }}
      />
      <Stack.Screen
        name="AnnouncementsBeatmakerScreen"
        component={BeatmakerScreen}
        options={{
          headerShown: true,
          title: "Beatmaker",
          headerRight: () => <HeaderRight screenName="BeatmakerFilterScreen" />,
        }}
      />
      <Stack.Screen
        name="AnnouncementsComposerScreen"
        component={ComposerScreen}
        options={{
          headerShown: true,
          title: "Composer",
          headerRight: () => <HeaderRight screenName="ComposerFilterScreen" />,
        }}
      />
      <Stack.Screen
        name="AnnouncementsMixingScreen"
        component={MixingScreen}
        options={{
          headerShown: true,
          title: "Mixing Engineer",
          headerRight: () => <HeaderRight screenName="MixingFilterScreen" />,
        }}
      />
      <Stack.Screen
        name="AnnouncementsSongwriterScreen"
        component={SongwriterScreen}
        options={{
          headerShown: true,
          title: "Songwriter",
          headerRight: () => (
            <HeaderRight screenName="SongwriterFilterScreen" />
          ),
        }}
      />
      <Stack.Screen
        name="AnnouncementsBeatmakerFilterScreen"
        component={BeatmakerFilterScreen}
        options={{
          headerShown: true,
          title: "Beatmaker",
        }}
      />
      <Stack.Screen
        name="AnnouncementsComposerFilterScreen"
        component={ComposerFilterScreen}
        options={{
          headerShown: true,
          title: "Composer",
        }}
      />
      <Stack.Screen
        name="AnnouncementsMixingFilterScreen"
        component={MixingFilterScreen}
        options={{
          headerShown: true,
          title: "Mixing Engineer",
        }}
      />
      <Stack.Screen
        name="AnnouncementsProducersFilterScreen"
        component={ProducersFilterScreen}
        options={{
          headerShown: true,
          title: "Producers",
        }}
      />
      <Stack.Screen
        name="AnnouncementsSongwriterFilterScreen"
        component={SongwriterFilterScreen}
        options={{
          headerShown: true,
          title: "Songwriter",
        }}
      />
    </Stack.Navigator>
  );
}
