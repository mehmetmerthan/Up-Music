import axios from "axios";
import { encode as btoa } from "base-64";
import React, { useEffect, useState } from "react";
import { ListItem, Avatar } from "@rneui/themed";
import {
  FlatList,
  TextInput,
  View,
  StyleSheet,
  TouchableOpacity,
  Keyboard,
  Text,
} from "react-native";

export default function SpotifySearch({
  setSelectedSong,
  spotifySong,
  setSpotifySong,
}) {
  const clientId = "05f18f0974804052b4c02354ba8a6d26";
  const clientSecret = "12e00a6f65e44e48bbd289e69b9b655f";
  const base64Credentials = btoa(`${clientId}:${clientSecret}`);
  const accessTokenEndpoint = "https://accounts.spotify.com/api/token";
  const searchEndpoint = "https://api.spotify.com/v1/search";
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const getAccessToken = async () => {
    try {
      const response = await axios.post(
        accessTokenEndpoint,
        "grant_type=client_credentials",
        {
          headers: {
            Authorization: `Basic ${base64Credentials}`,
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );

      const accessToken = response.data.access_token;
      return accessToken;
    } catch (error) {
      console.error("Error getting access token:", error);
      throw error;
    }
  };

  useEffect(() => {
    const handleSearch = async () => {
      if (searchQuery.trim() === "") {
        setSearchResults([]);
      } else {
        searchSongs(searchQuery);
      }
    };
    handleSearch();
    const timeoutId = setTimeout(() => {
      handleSearch();
    }, 100);
    return () => clearTimeout(timeoutId);
  }, [searchQuery]);

  const searchSongs = async (query) => {
    try {
      const accessToken = await getAccessToken();
      const response = await axios.get(searchEndpoint, {
        params: {
          q: query,
          type: "track",
          limit: 5,
        },
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      const results = response.data.tracks.items;
      setSearchResults(results);
    } catch (error) {
      console.error("Error searching songs:", error);
    }
  };
  function renderItem({ item }) {
    return (
      <TouchableOpacity
        onPress={() => {
          setSelectedSong(item);
          setSpotifySong(item);
          setSearchResults([]);
          setSearchQuery("");
          Keyboard.dismiss();
        }}
      >
        <ListItem bottomDivider>
          <Avatar rounded source={{ uri: item.album.images[0].url }} />
          <ListItem.Content>
            <ListItem.Title>{item.name}</ListItem.Title>
            <ListItem.Subtitle>{item.artists[0].name}</ListItem.Subtitle>
          </ListItem.Content>
        </ListItem>
      </TouchableOpacity>
    );
  }
  return (
    <View style={styles.container}>
      {spotifySong.name && (
        <View style={styles.songContainer}>
          <Avatar
            size={52}
            rounded
            source={{ uri: spotifySong.album?.images[2]?.url }}
          />
          <View style={styles.content}>
            <Text style={styles.songText}>{spotifySong?.name} </Text>
            <Text style={styles.artistText}>
              {spotifySong?.artists[0]?.name}
            </Text>
          </View>
        </View>
      )}
      <TextInput
        style={styles.input}
        placeholder="Search song from Spotify"
        value={searchQuery}
        onChangeText={(text) => setSearchQuery(text)}
      />
      <FlatList
        style={styles.list}
        data={searchResults}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => renderItem({ item })}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#ccc",
    padding: 10,
    marginVertical: 10,
  },
  list: {
    marginTop: 8,
  },
  songContainer: {
    flexDirection: "row",
    marginBottom: 10,
  },
  content: {
    marginLeft: 10,
    width: "80%",
    flexDirection: "column",
  },
  songText: {
    fontSize: 18,
  },
  artistText: {
    fontWeight: "300",
    fontSize: 18,
  },
});
