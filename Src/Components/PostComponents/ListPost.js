import {
  FlatList,
  View,
  StyleSheet,
  ActivityIndicator,
  Text,
  ScrollView,
} from "react-native";
import { React, useEffect, useState } from "react";
import { API } from "aws-amplify";
import { listPosts } from "../../Utils/Queries/postQueries";
import MainPost from "./PostTypes/MainPost";
import { styleTagData, roleData } from "../../../data/TagData";
import { Chip, Button } from "@rneui/themed";
import { CityPicker, CountryPicker } from "../PickerComponents/LocationPicker";
import Tag from "../TagComponents/Tag";

export default function ListPost() {
  const [visibleCountry, setVisibleCountry] = useState(false);
  const [visibleCity, setVisibleCity] = useState(false);
  const [visibleRole, setVisibleRole] = useState(false);
  const [visibleStyle, setVisibleStyle] = useState(false);
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedStyleTags, setSelectedStyleTags] = useState([]);
  const [selectedRoleTags, setSelectedRoleTags] = useState([]);
  const [styleTags, setStyleTags] = useState([]);
  const [roleTags, setRoleTags] = useState([]);
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [postNextToken, setPostNextToken] = useState(null);
  const [refreshing, setRefreshing] = useState(false);
  const fetchItems = async () => {
    if (loading || refreshing) return;
    setLoading(true);
    try {
      const variables = {
        limit: 2,
        nextToken: postNextToken,
      };
      const result = await API.graphql({
        query: listPosts,
        variables: variables,
      });
      const newItems = result.data.listPosts.items;
      const filteredItems = handleFilter({ propItems: newItems });
      const newNextToken = result.data.listPosts.nextToken;
      setItems((prevItems) =>
        postNextToken ? [...prevItems, ...filteredItems] : filteredItems
      );
      setPostNextToken(newNextToken);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };
  useEffect(() => {
    if (refreshing) {
      setPostNextToken(null);
      fetchItems();
      setRefreshing(false);
    }
  }, [refreshing]);

  useEffect(() => {
    fetchItems();
  }, [selectedCity, selectedCountry, styleTags, roleTags]);

  const handleLoadMore = () => {
    if (!loading && postNextToken) {
      fetchItems();
    }
  };
  return (
    <FlatList
      data={items}
      renderItem={({ item, index }) => <MainPost item={item} index={index} />}
      keyExtractor={(item) => item.id}
      onEndReached={handleLoadMore}
      onEndReachedThreshold={0}
      ListFooterComponent={loading && <ActivityIndicator />}
      onRefresh={() => setRefreshing(true)}
      refreshing={refreshing}
      ListHeaderComponent={FilterComponet}
      keyboardShouldPersistTaps="always"
    />
  );
  function handleFilter({ propItems }) {
    if (propItems?.length === 0) return [];
    if (
      selectedCountry === "" &&
      selectedCity === "" &&
      styleTags.length === 0 &&
      roleTags.length === 0
    )
      return propItems;
    const filteredItems = propItems?.filter((item) => {
      const hasCountry = selectedCountry
        ? item.country === selectedCountry
        : true;
      const hasCity = selectedCity ? item.city === selectedCity : true;
      const hasRoles =
        roleTags.length > 0
          ? roleTags.some((role) => item?.tag_roles?.includes(role))
          : true;
      const hasStyles =
        styleTags.length > 0
          ? styleTags.some((style) => item?.tag_styles?.includes(style))
          : true;
      return hasCountry && hasCity && hasRoles && hasStyles;
    });

    return filteredItems;
  }
  function FilterComponet() {
    return (
      <View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.chipContainer}>
            <Text>{selectedCountry}</Text>
            <Chip
              buttonStyle={styles.chip}
              title={"Country"}
              size="lg"
              onPress={() => {
                setVisibleCountry(!visibleCountry);
                setVisibleCity(false);
                setVisibleRole(false);
                setVisibleStyle(false);
              }}
            />
            <Text>{selectedCity}</Text>
            <Chip
              buttonStyle={styles.chip}
              title={"City"}
              size="lg"
              onPress={() => {
                setVisibleCountry(false);
                setVisibleCity(!visibleCity);
                setVisibleRole(false);
                setVisibleStyle(false);
              }}
            />
            <Text>{roleTags}</Text>
            <Chip
              buttonStyle={styles.chip}
              title={"Role"}
              size="lg"
              onPress={() => {
                setSelectedRoleTags([]);
                setVisibleCountry(false);
                setVisibleCity(false);
                setVisibleRole(!visibleRole);
                setVisibleStyle(false);
              }}
            />
            <Text>{styleTags}</Text>
            <Chip
              containerStyle={styles.chip}
              title={"Style"}
              size="lg"
              onPress={() => {
                setSelectedStyleTags([]);
                setVisibleCountry(false);
                setVisibleCity(false);
                setVisibleRole(false);
                setVisibleStyle(!visibleStyle);
              }}
            />
            <Chip
              type="outline"
              containerStyle={styles.chip}
              title={"Reset"}
              size="lg"
              onPress={() => {
                setSelectedStyleTags([]);
                setStyleTags([]);
                setSelectedRoleTags([]);
                setRoleTags([]);
                setSelectedCity("");
                setSelectedCountry("");
                setVisibleCountry(false);
                setVisibleCity(false);
                setVisibleRole(false);
                setVisibleStyle(false);
              }}
            />
          </View>
        </ScrollView>
        <FilterComponetChildren />
      </View>
    );
  }
  function FilterComponetChildren() {
    if (visibleCountry) {
      return (
        <CountryPicker
          setSelectedLocation={setSelectedCountry}
          setVisibleCountry={setVisibleCountry}
        />
      );
    }
    if (visibleCity) {
      return (
        <CityPicker
          setSelectedLocation={setSelectedCity}
          setVisibleCity={setVisibleCity}
        />
      );
    }
    if (visibleRole) {
      return (
        <>
          <Tag
            selectedTags={selectedRoleTags}
            setSelectedTags={setSelectedRoleTags}
            tagData={roleData}
          />
          <View style={styles.buttonContainer}>
            <Button
              title={"Save"}
              buttonStyle={styles.buttonPropertySave}
              onPress={() => {
                setRoleTags(selectedRoleTags);
                setVisibleRole(false);
              }}
            />
            <Button
              title={"Cancel"}
              buttonStyle={styles.buttonPropertyCancel}
              onPress={() => {
                setVisibleRole(false);
              }}
            />
          </View>
        </>
      );
    }
    if (visibleStyle) {
      return (
        <>
          <Tag
            selectedTags={selectedStyleTags}
            setSelectedTags={setSelectedStyleTags}
            tagData={styleTagData}
          />
          <View style={styles.buttonContainer}>
            <Button
              title={"Save"}
              buttonStyle={styles.buttonPropertySave}
              onPress={() => {
                setStyleTags(selectedStyleTags);
                setVisibleStyle(false);
              }}
            />
            <Button
              title={"Cancel"}
              buttonStyle={styles.buttonPropertyCancel}
              onPress={() => {
                setVisibleStyle(false);
              }}
            />
          </View>
        </>
      );
    }
    return null;
  }
}

const styles = StyleSheet.create({
  chipContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    marginVertical: 10,
  },
  chip: {
    marginHorizontal: 10,
    width: 100,
  },
  buttonContainer: {
    flexDirection: "row",
    alignSelf: "center",
  },
  buttonPropertySave: {
    flexDirection: "row",
    borderRadius: 10,
    backgroundColor: "#008000",
  },
  buttonPropertyCancel: {
    flexDirection: "row",
    borderRadius: 10,
    backgroundColor: "#ff0000",
    marginLeft: 20,
  },
});
