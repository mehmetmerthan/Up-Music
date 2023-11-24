import { React } from "react";
import { View, ScrollView, Text, Pressable } from "react-native";
import styles from "../../Styles/UserProfileStyle";
import { EvilIcons } from "@expo/vector-icons";
import Post from "../../Components/PostComponents/UserPost";
import { Avatar } from '@rneui/themed';
import { useNavigation } from "@react-navigation/native";
const UserProfile = () => {
  const aboutText = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At aut debitis enim eos facilis, impedit labore mollitia placeat praesentium quos sit suscipit totam veritatis. Deleniti incidunt necessitatibus omnis porro unde!";
  const musicStyles = ["Rock", "Pop", "Jazz", "Hip Hop"];
  const instruments = ["Guitar", "Piano", "Drums", "Bass"];
  const navigation = useNavigation();
  function editProfile() {
    navigation.navigate("EditProfileScreen");
  }
  return (
    <View style={styles.flexA}>
      <ScrollView contentContainerStyle={styles.base}>
        <View style={styles.userProfile}>
          <View style={styles.userProfileTop}>
            <Avatar
              style={styles.userProfileTopBg}
              source={{
                uri: "https://source.unsplash.com/800x600/?",
              }}
            >
            </Avatar>
            <View style={styles.userProfileTopOverlay} />
            <Avatar
              size={150}
              rounded
              source={{ uri: 'https://randomuser.me/api/portraits/women/57.jpg' }}
            >
            </Avatar>
            <View style={styles.userProfileInfo}>
              <Text style={styles.userProfileInfoName}>Amelie Stevens</Text>
              <View style={styles.userProfileInfoLocation}>
                <EvilIcons
                  name="location"
                  size={20}
                  color="rgba(255, 255, 255, 0.5)"
                />
                <Text style={styles.userProfileInfoLocationText}>
                  New York, USA
                </Text>
              </View>
              <Text style={styles.userProfileInfoJobTitle}>
                Guitarist, Singer
              </Text>
            </View>
            <View style={[styles.userProfileWidget, styles.widget]}>
              <View style={styles.widgetItem}>
                <Text style={styles.widgetItemLabel}>FOLLOWING</Text>
                <Text style={styles.widgetItemValue}>638</Text>
              </View>
              <View style={[styles.widgetItem, styles.widgetItemLast]}>
                <Text style={styles.widgetItemLabel}>FOLLOWERS</Text>
                <Text style={styles.widgetItemValue}>356</Text>
              </View>
            </View>
          </View>
          <View style={styles.userProfileBody}>
            <View style={styles.flexB}>
              <Pressable style={styles.btnB} activeOpacity={0.8} onPress={editProfile}>
                <Text style={styles.btnTextB} numberOfLines={1}>
                  Edit Profile
                </Text>
              </Pressable>
            </View>
            <View style={styles.divider} />
            <View style={styles.grid}>
              <View style={styles.gridContent}>
                <View style={styles.gridItem}>
                  <View style={styles.section}>
                    <View style={styles.sectionHeading}>
                      <View style={styles.sectionHeadingMain}>
                        <Text
                          style={styles.sectionHeadingText}
                          numberOfLines={1}
                        >
                          About
                        </Text>
                      </View>
                    </View>
                    <View style={styles.sectionContent}>
                      <Text style={styles.typography}>
                        {aboutText}
                      </Text>
                    </View>
                  </View>
                </View>
                <View style={styles.divider} />
                <View style={styles.gridItem}>
                  <View style={styles.section}>
                    <View style={styles.sectionHeading}>
                      <View style={styles.sectionHeadingMain}>
                        <Text
                          style={styles.sectionHeadingText}
                          numberOfLines={1}
                        >
                          Music Styles
                        </Text>
                      </View>
                    </View>
                    <View style={styles.sectionContent}>
                      <View style={styles.hStack}>
                        <View style={styles.hStackContent}>
                          {musicStyles.map((tag, index) => (
                            <View style={styles.hStackItemWrap} key={index}>
                              <View style={styles.tag}>
                                <Text style={styles.tagText} numberOfLines={1}>
                                  {tag}
                                </Text>
                              </View>
                            </View>
                          ))}
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
                <View style={styles.divider} />
                <View style={styles.gridItem}>
                  <View style={styles.section}>
                    <View style={styles.sectionHeading}>
                      <View style={styles.sectionHeadingMain}>
                        <Text
                          style={styles.sectionHeadingText}
                          numberOfLines={1}
                        >
                          Instruments Played
                        </Text>
                      </View>
                    </View>
                    <View style={styles.sectionContent}>
                      <View style={styles.hStack}>
                        <View style={styles.hStackContent}>
                          {instruments.map((tag, index) => (
                            <View style={styles.hStackItemWrap} key={index}>
                              <View style={styles.tag}>
                                <Text style={styles.tagText} numberOfLines={1}>
                                  {tag}
                                </Text>
                              </View>
                            </View>
                          ))}
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.divider} />
            <Text style={styles.PostText}> Posts </Text>
            <Post />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
export default UserProfile;

