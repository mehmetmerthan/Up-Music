import React, { useRef } from "react";
import { ScrollView, Text, StyleSheet, Animated } from "react-native";

const Ex = () => {
  const scrollY = useRef(new Animated.Value(0)).current;

  const headerHeight = scrollY.interpolate({
    inputRange: [0, 250],
    outputRange: [250, 0],
    extrapolate: "clamp",
  });

  const imageOpacity = scrollY.interpolate({
    inputRange: [0, 250],
    outputRange: [1, 0],
    extrapolate: "clamp",
  });

  const imageTranslateY = scrollY.interpolate({
    inputRange: [0, 250],
    outputRange: [0, -250],
    extrapolate: "clamp",
  });

  const imageScale = scrollY.interpolate({
    inputRange: [-50, 250],
    outputRange: [1, 1.5],
    extrapolate: "clamp",
  });
  const borderRadius = scrollY.interpolate({
    inputRange: [0, 250],
    outputRange: [60, 0],
    extrapolate: "clamp",
  });
  return (
    <ScrollView
      style={styles.container}
      scrollEventThrottle={16}
      onScroll={Animated.event(
        [{ nativeEvent: { contentOffset: { y: scrollY } } }],
        { useNativeDriver: false }
      )}
    >
      <Animated.View
        style={[styles.profileImageContainer, { height: headerHeight }]}
      >
        <Animated.Image
          source={{ uri: "https://picsum.photos/800/800" }}
          style={[
            styles.profileImage,
            {
              opacity: imageOpacity,
              transform: [
                { translateY: imageTranslateY },
                { scaleX: imageScale },
                { scaleY: imageScale },
              ],
              borderRadius: borderRadius,
            },
          ]}
        />
        <Animated.View style={styles.profileNameContainer}>
          <Text style={styles.profileName}>Kullanıcı Adı</Text>
        </Animated.View>
      </Animated.View>
      <Animated.View
        style={[styles.contentContainer, { paddingTop: headerHeight }]}
      >
        <Text style={styles.content}>Profil içeriği 1</Text>
        <Text style={styles.content}>Profil içeriği 2</Text>
        <Text style={styles.content}>Profil içeriği 3</Text>
        <Text style={styles.content}>Profil içeriği 4</Text>
        <Text style={styles.content}>Profil içeriği 5</Text>
        <Text style={styles.content}>Profil içeriği 6</Text>
      </Animated.View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  profileImageContainer: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f0f0f0",
    width: "100%",
    position: "absolute",
    top: 0,
    zIndex: 1,
  },
  profileImage: {
    width: "100%",
    height: 500,
  },
  profileNameContainer: {
    position: "absolute",
    bottom: -120,
    left: 0,
    right: 0,
    alignItems: "center",
  },
  profileName: {
    fontSize: 24,
    fontWeight: "bold",
  },
  contentContainer: {
    padding: 20,
    marginTop: 25,
  },
  content: {
    fontSize: 18,
    marginBottom: 250,
  },
});

export default Ex;
