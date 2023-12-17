import { React, useState } from 'react';
import { View, Text, TouchableOpacity, Image, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from '../../Styles/OnBoardingStyle';
const OnboardingScreen1 = () => {
    const navigation = useNavigation();
    function navigateToNextScreen() {
        navigation.navigate('OnboardingScreen2');
    }
    function navigateToSignIn() {
        navigation.navigate('SignInScreen');
    }
    return (
        <View style={styles.container}>
            <Text style={styles.headerText}>Welcome !</Text>
            <Image source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }} style={styles.image} />
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    style={styles.buttonLeft}
                    onPress={navigateToSignIn}
                >
                    <Text style={styles.buttonText}>SignIn</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.buttonRight}
                    onPress={navigateToNextScreen}
                >
                    <Text style={styles.buttonText}>SignUp</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default OnboardingScreen1;


