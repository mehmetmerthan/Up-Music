import { React, useState } from "react";
import { View, ScrollView, TextInput, Text, Pressable } from "react-native";
import styles from "../../Styles/UserProfileStyle";
import { EvilIcons, AntDesign, MaterialIcons, Ionicons } from "@expo/vector-icons";
import Post from "../../Components/PostComponents/UserPost";
import { Avatar, Dialog, Button, Chip } from '@rneui/themed';
import { useNavigation } from "@react-navigation/native";
import DropDownPicker from 'react-native-dropdown-picker';
const EditPorfileScreen = () => {
    const allInstruments = ["Guitar", "Piano", "Drums", "Bass", "Violin", "Cello", "Saxophone", "Trumpet", "Flute", "Clarinet", "Trombone", "French Horn", "Oboe", "Viola", "Banjo", "Harp", "Mandolin", "Ukulele", "Accordion", "Bagpipes", "Bassoon", "Cajon", "Castanets", "Cymbals", "Didgeridoo", "Djembe", "Glockenspiel", "Harmonica", "Maracas", "Marimba", "Ocarina", "Organ", "Pan Flute", "Piccolo", "Recorder", "Steel Drums", "Triangle", "Tuba", "Xylophone", "Zither", "Vocals", "Other"];
    const allMusicStyles = ["Rock", "Pop", "Jazz", "Hip Hop", "Classical", "Country", "Folk", "Electronic", "R&B", "Blues", "Metal", "Punk", "Reggae", "Latin", "World", "New Age", "Other"];
    const aboutText = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. At aut debitis enim eos facilis, impedit labore mollitia placeat praesentium quos sit suscipit totam veritatis. Deleniti incidunt necessitatibus omnis porro unde!";
    const musicT = ["Rock", "Pop", "Jazz", "Hip Hop"];
    const instrumentsT = ["Guitar", "Piano", "Drums", "Bass"];
    const [text, onChangeText] = useState(aboutText);
    const [musicStyles, setMusicStyles] = useState(musicT);
    const [instruments, setInstruments] = useState(instrumentsT);
    const [isVisibleStyleModal, setVisibleStyleModal] = useState(false);
    const [isVisibleInstrumentModal, setVisibleInstrumentModal] = useState(false);
    const [openStyleDrop, setOpenStyleDrop] = useState(false);
    const [openInstrumentDrop, setOpenInstrumentDrop] = useState(false);
    const [valueStyleDrop, setValueStyleDrop] = useState(null);
    const [valueInstrumentDrop, setValueInstrumentDrop] = useState(null);
    const [itemsStyleDrop, setItemsStyleDrop] = useState([]);
    const [itemsInstrumentDrop, setItemsInstrumentDrop] = useState([]);
    const navigation = useNavigation();
    function editProfile() {
        navigation.navigate("ProfileScreen");
    }
    function handleMusicStyleRemove(tag) {
        const newMusicStyles = musicStyles.filter((t) => t !== tag);
        setMusicStyles(newMusicStyles);
    }
    function handleInstrumentsRemove(tag) {
        const newInstruments = instruments.filter((t) => t !== tag);
        setInstruments(newInstruments);
    }
    function handleMusicStyleAdd(tag) {
        const newMusicStyles = [...musicStyles, ...tag];
        setMusicStyles(newMusicStyles);
    }
    function handleInstrumentsAdd(tag) {
        const newInstruments = [...instruments, ...tag];
        setInstruments(newInstruments);
    }
    function addStyle() {
        setValueStyleDrop(null)
        setOpenStyleDrop(false)
        setVisibleStyleModal(true)
        const newItems = allMusicStyles.filter((style) => !musicStyles.includes(style));
        setItemsStyleDrop(newItems.map(item => ({ label: item, value: item })));
    }
    function addTag() {
        setValueInstrumentDrop(null)
        setOpenInstrumentDrop(false)
        setVisibleInstrumentModal(true)
        const newItems = allInstruments.filter((instrument) => !instruments.includes(instrument));
        setItemsInstrumentDrop(newItems.map(item => ({ label: item, value: item })));
    }
    function okStyle() {
        setVisibleStyleModal(false)
        if (valueStyleDrop !== null) {
            handleMusicStyleAdd(valueStyleDrop)
        }
    }
    function okInstrument() {
        setVisibleInstrumentModal(false)
        if (valueInstrumentDrop !== null) {
            handleInstrumentsAdd(valueInstrumentDrop)
        }

    }
    return (

        <ScrollView >

            <View style={styles.userProfileTop}>
                <Avatar
                    style={styles.userProfileTopBg}
                    source={{
                        uri: "https://source.unsplash.com/800x600/?",
                    }}
                >
                    <Avatar.Accessory size={50} style={{
                        position: 'absolute',
                        top: 0, // En üstte
                        right: 0, // Sağda
                    }} />
                </Avatar>
                <View style={styles.userProfileTopOverlay} />
                <Avatar
                    size={150}
                    rounded
                    source={{ uri: 'https://randomuser.me/api/portraits/women/57.jpg' }}
                >
                    <Avatar.Accessory size={50} />
                </Avatar>

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
                            Save
                        </Text>
                    </Pressable>
                </View>
                <View style={styles.divider} />
                <View style={styles.grid}>
                    <View style={styles.gridContent}>
                        <View style={styles.gridItem}>
                            <View style={styles.section}>
                                <View style={styles.sectionHeading}>
                                    <Text
                                        style={styles.sectionHeadingText}
                                        numberOfLines={1}
                                    >
                                        About
                                    </Text>
                                </View>
                                <View style={styles.sectionContent}>
                                    <TextInput
                                        style={styles.input}
                                        onChangeText={onChangeText}
                                        value={text}
                                        multiline={true}
                                        maxLength={1000}
                                        placeholder="Write something about yourself"
                                    />
                                </View>
                            </View>
                        </View>
                        <View style={styles.divider} />
                        <View style={styles.gridItem}>
                            <View style={styles.section}>
                                <View style={styles.sectionHeading}>
                                    <Text
                                        style={styles.sectionHeadingText}
                                        numberOfLines={1}
                                    >
                                        Music Styles
                                    </Text>
                                </View>

                                <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginHorizontal: 10, marginTop: 5 }}>
                                    {musicStyles.map((item, index) => (
                                        <Chip
                                            key={index}
                                            title={item}
                                            titleStyle={{ color: "#3c3c3c", fontSize: 12 }}
                                            buttonStyle={{ borderColor: "#000000" }}
                                            type="outline"
                                            containerStyle={{ marginVertical: 5, marginHorizontal: 5 }}
                                            style={{ backgroundColor: "#ccc" }}
                                            icon={<AntDesign name="closecircle" size={14} color="black" style={styles.tagIcon} onPress={() => handleMusicStyleRemove(item)} />}
                                            iconRight
                                        />
                                    ))}
                                    <Chip
                                        iconRight
                                        title={"add"}
                                        icon={<MaterialIcons name="add-circle-outline" size={18} color="#ccc" style={styles.tagIconAdd} onPress={addTag} />}
                                        titleStyle={{ color: "#1c1c1c", color: "#ccc", }}
                                        buttonStyle={{ backgroundColor: "#008000" }}
                                    />
                                </View>
                            </View>
                        </View>
                        <View style={styles.divider} />
                        <View style={styles.sectionHeading}>
                            <Text
                                style={styles.sectionHeadingText}
                                numberOfLines={1}
                            >
                                Instruments Played
                            </Text>
                        </View>
                        <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginHorizontal: 10, marginTop: 5 }}>
                            {instruments.map((item, index) => (
                                <Chip
                                    key={index}
                                    title={item}
                                    titleStyle={{ color: "#3c3c3c", fontSize: 12 }}
                                    buttonStyle={{ borderColor: "#000000" }}
                                    type="outline"
                                    containerStyle={{ marginVertical: 5, marginHorizontal: 5 }}
                                    style={{ backgroundColor: "#ccc" }}
                                    icon={<AntDesign name="closecircle" size={14} color="black" style={styles.tagIcon} onPress={() => handleInstrumentsRemove(item)} />}
                                    iconRight
                                />
                            ))}
                            <Chip
                                iconRight
                                title={"add"}
                                icon={<MaterialIcons name="add-circle-outline" size={18} color="#ccc" style={styles.tagIconAdd} onPress={addTag} />}
                                titleStyle={{ color: "#1c1c1c", color: "#ccc", }}
                                buttonStyle={{ backgroundColor: "#008000" }}
                            />



                        </View>
                    </View>
                </View>
                <Dialog
                    isVisible={isVisibleStyleModal}
                    onBackdropPress={() => setVisibleStyleModal(!isVisibleStyleModal)}
                >
                    <DropDownPicker
                        open={openStyleDrop}
                        value={valueStyleDrop}
                        items={itemsStyleDrop}
                        setOpen={setOpenStyleDrop}
                        setValue={setValueStyleDrop}
                        setItems={setItemsStyleDrop}
                        placeholder="Select a style"
                        multiple={true}
                        searchable={true}
                    />
                    <Button
                        title="Ok"
                        loading={false}
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
                        onPress={okStyle}
                    />
                </Dialog>
                <Dialog
                    isVisible={isVisibleInstrumentModal}
                    onBackdropPress={() => setVisibleInstrumentModal(!isVisibleInstrumentModal)}
                >
                    <DropDownPicker
                        open={openInstrumentDrop}
                        value={valueInstrumentDrop}
                        items={itemsInstrumentDrop}
                        setOpen={setOpenInstrumentDrop}
                        setValue={setValueInstrumentDrop}
                        setItems={setItemsInstrumentDrop}
                        placeholder="Select a instrument"
                        multiple={true}
                        searchable={true}
                    />
                    <Button
                        title="Ok"
                        loading={false}
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
                        onPress={okInstrument}
                    />
                </Dialog>
                <View style={styles.divider} />
                <Text style={styles.PostText}> Posts </Text>
                <Post />
            </View>
        </ScrollView>

    );
};
export default EditPorfileScreen;

