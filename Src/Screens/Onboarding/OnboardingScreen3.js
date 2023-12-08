import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Tag from '../../Components/TagComponents/Tag';
import { roleData } from '../../../data/TagData';
import styles from '../../Styles/OnBoardingStyle';
const OnboardingScreen3 = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Select you roles</Text>
      <Tag tagData={roleData} />
      <View style={styles.pageViewContainer}>
        <View style={styles.pageViewEmpty} />
        <View style={styles.pageViewEmpty} />
        <View style={styles.pageViewFill} />
        <View style={styles.pageViewEmpty} />
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
          onPress={() => navigation.navigate('OnboardingScreen4')}
        >
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default OnboardingScreen3;


