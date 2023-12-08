import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import OnboardingScreen1 from '../../Screens/Onboarding/OnboardingScreen1';
import OnboardingScreen2 from '../../Screens/Onboarding/OnboardingScreen2';
import OnboardingScreen3 from '../../Screens/Onboarding/OnboardingScreen3';
import OnboardingScreen4 from '../../Screens/Onboarding/OnboardingScreen4';
import OnboardingScreen5 from '../../Screens/Onboarding/OnboardingScreen5';

const Stack = createStackNavigator();

const OnboardingStack = () => {
    return (

        <Stack.Navigator
            initialRouteName="OnboardingScreen1"
            screenOptions={{
                cardStyleInterpolator: ({ current, layouts }) => {
                    return {
                        cardStyle: {
                            transform: [
                                {
                                    translateX: current.progress.interpolate({
                                        inputRange: [0, 1],
                                        outputRange: [layouts.screen.width, 0],
                                    }),
                                },
                            ],
                        },
                    };
                },
                transitionSpec: {
                    open: { animation: 'timing', config: { duration: 600 } },
                    close: { animation: 'timing', config: { duration: 600 } },
                },
            }}
        >
            <Stack.Screen name="OnboardingScreen1" component={OnboardingScreen1} options={{ headerShown: false, title: "" }} />
            <Stack.Screen name="OnboardingScreen2" component={OnboardingScreen2} options={{ headerShown: false, title: "" }} />
            <Stack.Screen name="OnboardingScreen3" component={OnboardingScreen3} options={{ headerShown: false, title: "" }} />
            <Stack.Screen name="OnboardingScreen4" component={OnboardingScreen4} options={{ headerShown: false, title: "" }} />
            <Stack.Screen name="OnboardingScreen5" component={OnboardingScreen5} options={{ headerShown: false, title: "" }} />
        </Stack.Navigator>

    );
};

export default OnboardingStack;
