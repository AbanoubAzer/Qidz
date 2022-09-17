import React, { useContext, useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import MovieListItem from "../Components/MovieListItem";
import ScreenTitle from "../Components/Shared/ScreenTitle";
import { primary } from "../Theme/colors";
import { getMovies } from "../Services/MoviesService";
import { removeUserSession } from "../Utils/StorageManager";
import AuthContext from "../Contexts/AuthContext";
import { inject, observer } from "mobx-react";

const MovieList = (props) => {
  const { movies, setMovies } = props.store;
  const [isLoading, setIsLoading] = useState(false);
  const authContext = useContext(AuthContext);
  const [searchText, setSearchText] = useState("car");

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    console.log("fetchMovies");
    setIsLoading(true);
    await getMovies(searchText)
      .then((res) => {
        console.log(JSON.stringify(res.data.Search, null, 2));
        console.log("movie asd#2", res.data.Search);

        setMovies(res.data.Search);
      })
      .catch((err) => {
        console.log("err", err.response);
      });

    setIsLoading(false);
  };

  const logout = async () => {
    await removeUserSession()
      .then(() => {
        authContext.setIsLoggedIn(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScreenTitle title={"Movies"} logout={true} onLogoutPress={logout} />
      {isLoading ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color={primary} />
        </View>
      ) : (
        <FlatList
          data={movies}
          contentContainerStyle={styles.contentContainer}
          renderItem={({ item }) => {
            return <MovieListItem movie={item} />;
          }}
          keyExtractor={(item) => {
            return item.imdbID;
          }}
          initialNumToRender={6}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}
          ListEmptyComponent={() => {
            return <Text style={styles.emptyText}>{"No Movies Found"}</Text>;
          }}
          ItemSeparatorComponent={() => <View style={{ height: 15 }} />}
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  contentContainer: { paddingVertical: 20, alignItems: "center" },
  emptyText: {
    color: "gray",
    opacity: 0.5,
    fontSize: 16,
    alignSelf: "center",
    marginTop: 20,
  },
  loadingContainer: { flex: 1, justifyContent: "center", alignItems: "center" },
});

export default inject("store")(observer(MovieList));
