import { React, useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Tag from '../../Components/TagComponents/Tag';
import { roleData } from '../../../data/TagData';
import styles from '../../Styles/OnBoardingStyle';
const OnboardingScreen3 = ({ route }) => {
  const { selectedStyleTags = [] } = route?.params || {};
  const navigation = useNavigation();
  const [selectedTags, setSelectedTags] = useState([]);
  function navigateToNextScreen() {
    navigation.navigate('OnboardingScreen4', {
      selectedStyleTags,
      selectedRoleTags: selectedTags,
    });
  }
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Select you roles</Text>
      <Tag tagData={roleData} selectedTags={selectedTags} setSelectedTags={setSelectedTags} />
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
          onPress={navigateToNextScreen}
        >
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default OnboardingScreen3;


