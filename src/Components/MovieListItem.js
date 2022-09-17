import React from "react";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import { Icon } from "react-native-elements";
import { darkGray } from "../Theme/colors";

const { width, height } = Dimensions.get("window");
const MovieListItem = (props) => {
  const { movie } = props;
  console.log("movie asd#1", movie);

  return (
    <View onPress={props.onPress} style={styles.container}>
      <Image source={{ uri: movie.Poster }} style={styles.imageStyle} />
      <View style={styles.infoContainer}>
        <Text style={styles.movieTitleStyle}>{movie.Title}</Text>
        <Text style={styles.genreStyle}>{movie.Year}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: width - 40,
    padding: 15,
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "white",
    borderRadius: 10,
    shadowColor: "#000000",
    shadowOpacity: 0.15,
    shadowRadius: 8,
    shadowOffset: {
      height: 0,
      width: 0,
    },
    elevation: 10,
    zIndex: 10,
  },
  movieTitleStyle: {
    fontSize: 16,
    color: darkGray,
    fontWeight: "bold",
    textAlign: "left",
  },
  genreStyle: { color: darkGray, marginTop: 3 },
  imageStyle: {
    width: 70,
    height: 70 * (9 / 6),
    borderRadius: 5,
    resizeMode: "contain",
    backgroundColor: "gray",
    marginRight: 15,
    overflow: "hidden",
  },
  infoContainer: { height: "100%", alignItems: "flex-start" },
  durationStyle: {
    color: "gray",
  },
  imdbStyle: {
    fontSize: 14,
    fontWeight: "bold",
    marginLeft: 2,
  },
  ratingContainer: {
    flexDirection: "row",
    width: "100%",
    marginTop: 5,
    alignItems: "center",
  },
});
export default MovieListItem;
