import { Text, View, StyleSheet, FlatList } from "react-native";
import { React, useState } from "react";
import Tag from "../Components/Tag";
import { Divider, Button } from "@rneui/themed";
import {
  CityPicker,
  CountryPicker,
} from "../Components/PickerComponents/LocationPicker";
import { styleTagData, roleData } from "../../data/TagData";
import { useNavigation } from "@react-navigation/native";
export default function FilterScreen() {
  const [selectedStyleTags, setSelectedStyleTags] = useState([]);
  const [selectedRoleTags, setSelectedRoleTags] = useState([]);
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");
  const [isLoading, setLoading] = useState(false);
  const navigation = useNavigation();
  async function submitFilter() {
    setLoading(true);
    const filter = {
      or: [],
    };
    if (selectedCity) {
      filter.or.push({ city: { contains: selectedCity } });
    }

    if (selectedCountry) {
      filter.or.push({ country: { contains: selectedCountry } });
    }

    if (selectedStyleTags.length > 0) {
      selectedStyleTags.forEach((tag) => {
        filter.or.push({ tag_styles: { contains: tag } });
      });
    }

    if (selectedRoleTags.length > 0) {
      selectedRoleTags.forEach((tag) => {
        filter.or.push({ tag_roles: { contains: tag } });
      });
    }

    if (filter.or.length > 0) {
      navigation.navigate("HomeScreen", { filter: filter });
    }else{
      navigation.navigate("HomeScreen");
    }
    setLoading(false);
  }
  function renderItem() {
    return (
      <View style={styles.container}>
        <CountryPicker setSelectedLocation={setSelectedCountry} />
        <Divider orientation="vertical" style={{ borderWidth: 0.5 }} />
        <CityPicker setSelectedLocation={setSelectedCity} />
        <Divider orientation="vertical" style={{ borderWidth: 0.5 }} />
        <Text style={styles.header}>Select Categories</Text>
        <Divider inset={true} insetType="middle" orientation="vertical" />
        <Tag
          selectedTags={selectedStyleTags}
          setSelectedTags={setSelectedStyleTags}
          tagData={styleTagData}
        />
        <Divider orientation="vertical" style={{ borderWidth: 0.5 }} />
        <Text style={styles.header}>Select Roles</Text>
        <Divider inset={true} insetType="middle" orientation="vertical" />
        <Tag
          selectedTags={selectedRoleTags}
          setSelectedTags={setSelectedRoleTags}
          tagData={roleData}
        />
        <Divider orientation="vertical" style={{ borderWidth: 0.5 }} />
        <Button
          title="Share"
          loading={isLoading}
          buttonStyle={{
            borderColor: "#ccc",
            borderWidth: 1,
            borderRadius: 10,
          }}
          titleStyle={{ color: "white" }}
          containerStyle={{
            marginHorizontal: 70,
            marginVertical: 10,
          }}
          onPress={submitFilter}
        />
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <FlatList
        data={[1]}
        renderItem={renderItem}
        keyExtractor={(item) => item.toString()}
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
