import { View, StyleSheet } from "react-native";
import { React, useEffect, useState } from "react";
import { styleTagData, roleData } from "../../data/TagData";
import { Chip } from "@rneui/themed";
import { CityPicker, CountryPicker } from "./PickerComponents/LocationPicker";
import Tag from "./TagComponents/Tag";

export default function useFilter({ data }) {
  const [filterType, setFilterType] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedStyleTags, setSelectedStyleTags] = useState([]);
  const [selectedRoleTags, setSelectedRoleTags] = useState([]);

  const filteredItems = data.filter((item) => {
    const hasCountry = selectedCountry
      ? item.country === selectedCountry
      : true;
    const hasCity = selectedCity ? item.city === selectedCity : true;
    const hasRoles =
      selectedRoleTags.length > 0
        ? selectedRoleTags.every((role) => item?.tag_roles?.includes(role))
        : true;
    const hasStyles =
      selectedStyleTags.length > 0
        ? selectedStyleTags.every((style) => item?.tag_styles?.includes(style))
        : true;
    return hasCountry && hasCity && hasRoles && hasStyles;
  });
  function FilterComponetChildren() {
    switch (filterType) {
      case "country":
        return <CountryPicker setSelectedLocation={setSelectedCountry} />;
      case "city":
        return <CityPicker setSelectedLocation={setSelectedCity} />;
      case "role":
        return (
          <Tag
            selectedTags={selectedRoleTags}
            setSelectedTags={setSelectedRoleTags}
            tagData={roleData}
          />
        );
      case "style":
        return (
          <Tag
            selectedTags={selectedStyleTags}
            setSelectedTags={setSelectedStyleTags}
            tagData={styleTagData}
          />
        );
      default:
        return null;
    }
  }
  function FilterComponet() {
    return (
      <View>
        <View style={styles.chipContainer}>
          <Chip
            buttonStyle={styles.chip}
            title={"Country"}
            size="md"
            onPress={() => setFilterType("country")}
          />
          <Chip
            buttonStyle={styles.chip}
            title={"City"}
            size="md"
            onPress={() => setFilterType("city")}
          />
          <Chip
            buttonStyle={styles.chip}
            title={"Role"}
            size="md"
            onPress={() => setFilterType("role")}
          />
          <Chip
            containerStyle={styles.chip}
            title={"Style"}
            size="md"
            onPress={() => setFilterType("style")}
          />
        </View>
        <FilterComponetChildren />
      </View>
    );
  }
  return { FilterComponet, filteredItems };
}

const styles = StyleSheet.create({
  chipContainer: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 10,
  },
  chip: {
    marginHorizontal: 10,
    width: 75,
  },
});
