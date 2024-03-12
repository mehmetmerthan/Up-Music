import { React, useState } from "react";
import { View, Text, FlatList, TextInput } from "react-native";
import { Button, Divider } from "@rneui/themed";
import styles from "../Styles/OnBoardingStyle";
import Tag from "./Tag";
import StyleTags from "../../Constants/Data/StyleTags";
import RoleTags from "../../Constants/Data/RoleTags";
import SpotifySearch from "./SpotifySearch";
import { isEmpty } from "lodash";
import { useTranslation } from "react-i18next";
const AddExperience = ({
  setExperiences,
  experiences,
  setVisibleExperience,
}) => {
  const { t } = useTranslation();
  const [selectedExperienceRoleTags, setSelectedExperienceRoleTags] = useState(
    []
  );
  const [selectedExperienceStyleTags, setSelectedExperienceStyleTags] =
    useState([]);
  const [selectedSong, setSelectedSong] = useState({});
  const [spotifySong, setSpotifySong] = useState({});
  const [aboutExperience, setAboutExperience] = useState("");
  function addExperience() {
    if (
      aboutExperience === "" &&
      selectedExperienceRoleTags.length === 0 &&
      selectedExperienceStyleTags.length === 0 &&
      isEmpty(selectedSong)
    ) {
      setVisibleExperience && setVisibleExperience(false);
      return;
    }
    if (aboutExperience === "") {
      alert(t("addExperienceAlertAbout"));
      return;
    }
    if (selectedExperienceRoleTags.length === 0) {
      alert(t("addExperienceAlertRoles"));
      return;
    }
    if (selectedExperienceStyleTags.length === 0) {
      alert(t("addExperienceAlertStyles"));
      return;
    }
    const newExperience = {
      about: aboutExperience,
      tag_roles: selectedExperienceRoleTags,
      tag_styles: selectedExperienceStyleTags,
      song_link:
        (selectedSong &&
          selectedSong.album &&
          selectedSong.album.images[0]?.url) ||
        "",
      song_name: (selectedSong && selectedSong.name) || "",
      song_artist:
        (selectedSong &&
          selectedSong.artists &&
          selectedSong.artists[0]?.name) ||
        "",
    };

    experiences
      ? setExperiences([...experiences, newExperience])
      : setExperiences([newExperience]);
    setAboutExperience("");
    setSelectedExperienceRoleTags([]);
    setSelectedExperienceStyleTags([]);
    setSelectedSong({});
    setSpotifySong({});
    setVisibleExperience && setVisibleExperience(false);
  }
  function renderItem() {
    return (
      <View style={styles.container}>
        <Text style={styles.subText}>{t("tellUsExperience")}</Text>
        <TextInput
          style={styles.input}
          placeholder="About your experience"
          onChangeText={(text) => setAboutExperience(text)}
          value={aboutExperience}
        />
        <Divider />
        <Text style={styles.subText}>{t("experienceWhichRole")}</Text>
        <Tag
          tagData={RoleTags}
          selectedTags={selectedExperienceRoleTags}
          setSelectedTags={setSelectedExperienceRoleTags}
        />
        <Divider />
        <Text style={styles.subText}>{t("experienceWhichStyle")}</Text>
        <Tag
          tagData={StyleTags}
          selectedTags={selectedExperienceStyleTags}
          setSelectedTags={setSelectedExperienceStyleTags}
        />
        <Divider />
        <Text style={styles.subText}>{t("experienceWhichSong")}</Text>
        <SpotifySearch
          setSelectedSong={setSelectedSong}
          setSpotifySong={setSpotifySong}
          spotifySong={spotifySong}
        />
        <Divider />
        <Button
          title={t("completeExperience")}
          onPress={addExperience}
          buttonStyle={styles.button}
          color={"black"}
        />
      </View>
    );
  }
  return (
    <FlatList
      decelerationRate={0.8}
      data={[1]}
      renderItem={renderItem}
      keyExtractor={(item) => item.toString()}
      keyboardShouldPersistTaps="always"
    />
  );
};

export default AddExperience;
