import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { ScrollView } from "react-native";
import Categories from "../components/Categories";
import HeaderTab from "../components/HeaderTab";
import RestaurantItem from "../components/RestaurantItem";
import SearchBar from "../components/SearchBar";

const Home = () => {
  return (
    <View
      style={{
        backgroundColor: "#eee",
        height: "100%",
      }}
    >
      <SafeAreaView
        style={{ marginTop: 20, backgroundColor: "#fff", padding: 15 }}
      >
        <HeaderTab />
        <SearchBar />
        <ScrollView showsVerticalScrollIndicator={false}>
          <Categories />
          <RestaurantItem />
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  header: {
    marginTop: 20,
    backgroundColor: "#eee",
  },
});
