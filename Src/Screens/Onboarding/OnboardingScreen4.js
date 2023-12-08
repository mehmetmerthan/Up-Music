import { React, useState } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from '../../Styles/OnBoardingStyle';
const OnboardingScreen4 = () => {
  const [text, onChangeText] = useState("");
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Tell about yourself ..</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        placeholder="I am a .."
        value={text}
      />
      <View style={styles.pageViewContainer}>
        <View style={styles.pageViewEmpty} />
        <View style={styles.pageViewEmpty} />
        <View style={styles.pageViewEmpty} />
        <View style={styles.pageViewFill} />
        <View style={styles.pageViewEmpty} />
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.buttonLeft}
          onPress={() => navigation.goBack()}
        >
          <Text style={styles.buttonText}>Back</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonRight}
          onPress={() => navigation.navigate('OnboardingScreen5')}
        >
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default OnboardingScreen4;


