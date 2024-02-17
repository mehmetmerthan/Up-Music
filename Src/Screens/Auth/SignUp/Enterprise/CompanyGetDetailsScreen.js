import { React, useState } from "react";
import { View, Text, FlatList } from "react-native";
import { Button, Divider } from "@rneui/themed";
import { useNavigation } from "@react-navigation/native";
import styles from "../../../../Styles/OnBoardingStyle";
import { LocationPicker } from "../../../../Components/PickerComponents/LocationPicker";
import useMedia from "../../../../Components/PickerComponents/useMedia";
const CompanyGetDetailsScreen = () => {
  const { MediaPickerAvatarComponent, image } = useMedia();
  const [selectedLocation, setSelectedLocation] = useState({});
  const navigation = useNavigation();
  function navigateToNextScreen() {
    navigation.navigate("CompanySignUpScreen", {
      location: selectedLocation,
      image: image,
    });
  }
  function renderItem() {
    return (
      <View style={styles.container}>
        <Text style={styles.subText}>Select your place</Text>
        <LocationPicker setSelectedLocation={setSelectedLocation} />
        <Divider />
        <Text style={styles.subText}>Select your place picture</Text>
        <MediaPickerAvatarComponent />
        <Divider />
        <Button
          title={"Next"}
          buttonStyle={styles.button}
          onPress={navigateToNextScreen}
        />
      </View>
    );
  }
  return (
    <FlatList
      data={[1]}
      renderItem={renderItem}
      keyExtractor={(item) => item.toString()}
      keyboardShouldPersistTaps="always"
    />
  );
};

export default CompanyGetDetailsScreen;
