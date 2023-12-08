import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from '../../Styles/OnBoardingStyle';
const OnboardingScreen1 = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Text style={styles.headerText}>Let's complate your profile !</Text>
            <Image source={{ uri: "https://reactnative.dev/img/tiny_logo.png" }} style={styles.image}/>
            <View style={styles.pageViewContainer}>
                <View style={styles.pageViewFill} />
                <View style={styles.pageViewEmpty} />
                <View style={styles.pageViewEmpty} />
                <View style={styles.pageViewEmpty} />
                <View style={styles.pageViewEmpty} />
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    style={styles.buttonStart}
                    onPress={() => navigation.navigate('OnboardingScreen2')}
                >
                    <Text style={styles.buttonText}>Start</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default OnboardingScreen1;


