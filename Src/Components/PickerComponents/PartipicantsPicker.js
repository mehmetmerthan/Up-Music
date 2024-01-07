import React, { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Text,
} from "react-native";
import { ListItem, Avatar, Button } from "@rneui/themed";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
const PartipicantsPicker = ({
  //participantsData,
  selectedPartipicants,
  setSelectedPartipicants,
}) => {
  const [text, onChangeText] = useState("");
  const [tempData, setTempData] = useState([]);
  const [visible, setVisible] = useState(false);
  //const [selectedPartipicants, setSelectedPartipicants] = useState([]);
  const filteredData = tempData
    .filter((item) => item.title.toLowerCase().includes(text.toLowerCase()))
    .sort((a, b) => {
      const indexOfA = a.title.toLowerCase().indexOf(text.toLowerCase());
      const indexOfB = b.title.toLowerCase().indexOf(text.toLowerCase());
      return indexOfA - indexOfB;
    })
    .slice(0, 1);
  useEffect(() => {
    axios
      .get("https://randomuser.me/api/?results=20")
      .then((response) => {
        const data = response.data.results.map((item) => ({
          id: uuidv4(),
          title: `${item.name.first} ${item.name.last}`,
          subtitle: item.email,
          avatar_url: item.picture.thumbnail,
        }));
        setTempData(data);
        //console.log(tempData);
      })
      .catch((error) => console.log(error));
  }, []);
  const handleParticipantSelection = (participant) => {
    const isSelected = selectedPartipicants.some(
      (p) => p.id === participant.id
    );
    if (isSelected) {
      const updatedParticipants = selectedPartipicants.filter(
        (p) => p.id !== participant.id
      );
      setSelectedPartipicants(updatedParticipants);
    } else {
      setSelectedPartipicants([...selectedPartipicants, participant]);
    }
  };
  function participantsSave() {
    setSelectedPartipicants(tempData);
    setVisible(false);
  }
  function participantsCancel() {
    setSelectedPartipicants([]);
    setVisible(false);
  }
  return (
    <View style={styles.container}>
      <Text style={styles.baseText}>
        {selectedPartipicants?.length > 0
          ? `Selected ${selectedPartipicants?.length} participants`
          : text !== ""
          ? "No participants selected"
          : null}
      </Text>
      {visible ? (
        <>
          <TextInput
            style={styles.input}
            onChangeText={(text) => {
              onChangeText(text);
            }}
            placeholder="Search ..."
            value={text}
          />
          <View style={styles.searchArea}>
            {text.trim() !== "" &&
              filteredData.map((item, index) => (
                <TouchableOpacity
                  key={index}
                  onPress={() => handleParticipantSelection(item)}
                >
                  <ListItem
                    bottomDivider
                    containerStyle={{
                      backgroundColor: selectedPartipicants.some(
                        (p) => p.id === item.id
                      )
                        ? "#ADD8E6" // Change color for selected participants
                        : "transparent",
                    }}
                  >
                    <Avatar rounded source={{ uri: item.avatar_url }} />
                    <ListItem.Content>
                      <ListItem.Title>{item.title}</ListItem.Title>
                      <ListItem.Subtitle>{item.subtitle}</ListItem.Subtitle>
                    </ListItem.Content>
                  </ListItem>
                </TouchableOpacity>
              ))}
          </View>
          {selectedPartipicants && (
            <View style={styles.buttonContainer}>
              <Button
                title={"Save"}
                buttonStyle={styles.buttonPropertySave}
                onPress={participantsSave}
              />
              <Button
                title={"Cancel"}
                buttonStyle={styles.buttonPropertyCancel}
                onPress={participantsCancel}
              />
            </View>
          )}
        </>
      ) : (
        <Button
          buttonStyle={styles.button}
          onPress={() => setVisible(true)}
          title="Invite friends"
        />
      )}
    </View>
  );
};
export default PartipicantsPicker;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
  },
  input: {
    height: 40,
    width: "80%",
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    borderColor: "#ccc",
    alignSelf: "center",
  },
  button: {
    borderRadius: 10,
    alignSelf: "center",
    width: "50%",
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    alignSelf: "center",
    marginTop: 20,
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
  baseText: {
    fontSize: 20,
    fontWeight: "400",
    color: "#7b7b7bff",
    alignSelf: "center",
    marginBottom: 10,
  },
});
