import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import styles from '../../Styles/OnBoardingStyle';
import useMedia from '../../Components/PickerComponents/useMedia';
import { Avatar } from '@rneui/themed';
const OnboardingScreen5 = () => {
  const navigation = useNavigation();
  const { MyImagePicker, image } = useMedia();

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Select a profile picture</Text>
      <MyImagePicker />
      {image !== null ? (
        <Avatar
          size={150}
          rounded
          source={{ uri: image }}
          containerStyle={{ alignSelf: 'center' }}
        />
      ) : (
        <Avatar
          size={150}
          rounded
          icon={{ name: 'user', type: 'font-awesome' }}
          containerStyle={{ backgroundColor: '#595959', alignSelf: 'center' }}
        />
      )}
      <View style={styles.pageViewContainer}>
        <View style={styles.pageViewEmpty} />
        <View style={styles.pageViewEmpty} />
        <View style={styles.pageViewEmpty} />
        <View style={styles.pageViewEmpty} />
        <View style={styles.pageViewFill} />
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
          onPress={() => navigation.navigate('HomeScreen')}
        >
          <Text style={styles.buttonText}>Finish</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default OnboardingScreen5;


