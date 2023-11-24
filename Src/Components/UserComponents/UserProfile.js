import { React, useState } from "react";
import { View, ScrollView, Image, Text, Pressable } from "react-native";
import styles from "../../Styles/UserProfileStyle";
import { EvilIcons } from "@expo/vector-icons";
import Post from "../PostComponents/UserPost";
const UserProfile = () => {
    const [editMode, setEditMode] = useState(false);
    const toggleEditMode = () => {
        setEditMode(!editMode);
    };
    return (
        <View style={styles.flexA}>
            <ScrollView contentContainerStyle={styles.base}>
                <View style={styles.userProfile}>
                    <View style={styles.userProfileTop}>
                        {editMode ? (<></>) :
                            (<Image
                                style={styles.userProfileTopBg}
                                source={{
                                    uri: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
                                }}
                            />
                            )
                        }
                        <View style={styles.userProfileTopOverlay} />
                        <View style={styles.avatar}>
                            <View style={styles.avatarContainer}>
                                <Image
                                    style={styles.avatarImg}
                                    source={{
                                        uri: "https://images.unsplash.com/photo-1620508115467-aa36a8dcf82d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=640&q=80",
                                    }}
                                />
                            </View>
                        </View>
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
                            <Pressable style={styles.btnA} activeOpacity={0.8}>
                                <Text style={styles.btnTextA} numberOfLines={1}>
                                    Follow
                                </Text>
                            </Pressable>
                            <Pressable style={styles.btnB} activeOpacity={0.8}>
                                <Text style={styles.btnTextB} numberOfLines={1}>
                                    Message
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
                                                Lorem ipsum dolor sit amet, consectetur adipisicing
                                                elit. At aut debitis enim eos facilis, impedit labore
                                                mollitia placeat praesentium quos sit suscipit totam
                                                veritatis. Deleniti incidunt necessitatibus omnis porro
                                                unde!
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
                                                    <View style={styles.hStackItemWrap}>
                                                        <View style={styles.tag}>
                                                            <Text style={styles.tagText} numberOfLines={1}>
                                                                Rock
                                                            </Text>
                                                        </View>
                                                    </View>
                                                    <View style={styles.hStackItemWrap}>
                                                        <View style={styles.tag}>
                                                            <Text style={styles.tagText} numberOfLines={1}>
                                                                Pop
                                                            </Text>
                                                        </View>
                                                    </View>
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
                                                    <View style={styles.hStackItemWrap}>
                                                        <View style={styles.tag}>
                                                            <Text style={styles.tagText} numberOfLines={1}>
                                                                Guitar
                                                            </Text>
                                                        </View>
                                                    </View>
                                                    <View style={styles.hStackItemWrap}>
                                                        <View style={styles.tag}>
                                                            <Text style={styles.tagText} numberOfLines={1}>
                                                                Piano
                                                            </Text>
                                                        </View>
                                                    </View>
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
