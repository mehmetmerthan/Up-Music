import { View, StyleSheet, FlatList } from "react-native";
import { React, useState } from "react";
import { Button } from "@rneui/themed";
import {
  CityPicker,
  CountryPicker,
} from "../../Components/PickerComponents/LocationPicker";
import { useNavigation } from "@react-navigation/native";
import { ListItem } from "@rneui/themed";
export default function StagesFilterScreen() {
  const [selectedCity, setSelectedCity] = useState(null);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [isLoadingReset, setLoadingReset] = useState(false);
  const [expandedCountry, setExpandedCountry] = useState(false);
  const [expandedCity, setExpandedCity] = useState(false);
  const navigation = useNavigation();
  function submitFilter() {
    setLoading(true);
    const filter = {
      or: [],
    };
    if (selectedCity) {
      filter.or.push({ city: { eq: selectedCity.city } });
    }

    if (selectedCountry) {
      filter.or.push({ country: { eq: selectedCountry } });
    }

    if (filter.or.length > 0) {
      navigation.navigate("StagesScreen", { filter: filter });
    } else {
      navigation.navigate("StagesScreen");
    }
    setLoading(false);
  }
  function reset() {
    setLoadingReset(true);
    setSelectedCity(null);
    setSelectedCountry(null);

    navigation.navigate("StagesScreen");
    setLoadingReset(false);
  }
  function renderItem() {
    return (
      <View style={styles.container}>
        <ListItem.Accordion
          content={
            <ListItem.Content>
              <ListItem.Title>Country</ListItem.Title>
            </ListItem.Content>
          }
          isExpanded={expandedCountry}
          onPress={() => {
            setExpandedCountry(!expandedCountry);
          }}
          topDivider
        >
          <CountryPicker setSelectedLocation={setSelectedCountry} />
        </ListItem.Accordion>
        <ListItem.Accordion
          content={
            <ListItem.Content>
              <ListItem.Title>City</ListItem.Title>
            </ListItem.Content>
          }
          isExpanded={expandedCity}
          onPress={() => {
            setExpandedCity(!expandedCity);
          }}
          topDivider
        >
          <CityPicker setSelectedLocation={setSelectedCity} />
        </ListItem.Accordion>
        <Button
          title="Filter"
          loading={isLoading}
          buttonStyle={{
            borderRadius: 10,
          }}
          containerStyle={{
            marginHorizontal: 70,
            marginTop: 20,
          }}
          onPress={submitFilter}
        />
        <Button
          title={"Reset"}
          loading={isLoadingReset}
          buttonStyle={{
            borderRadius: 10,
          }}
          containerStyle={{
            marginHorizontal: 100,
            marginTop: 20,
          }}
          onPress={reset}
          type="outline"
        />
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <FlatList
      decelerationRate={0.5}
        data={[1]}
        renderItem={renderItem}
        keyExtractor={(item) => item.toString()}
        keyboardShouldPersistTaps="always"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 10,
  },
  container: {
    flex: 1,
  },
});
