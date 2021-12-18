import React from "react";
import { useState, useEffect } from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import { ScrollView } from "react-native";
import Categories from "../components/Categories";
import HeaderTab from "../components/HeaderTab";
import RestaurantItem from "../components/RestaurantItem";
import SearchBar from "../components/SearchBar";
import { localRestaurants } from "../components/RestaurantItem";

const Home = () => {
  const YELP_API_KEY =
    "bdRJutLhFAQJ36t7b89CWjHFBU4OKzjt9wvZzcY-nkgmvTqlNMjZWV1eG7iBQ9R74SyfxRg9LWnBAkZY06BtAZAe4d2dfX-2vuX8a1l5V7foctHfX9UKEyoM5ts3YXYx";

  const [restaurantData, setRestaurantData] = useState(localRestaurants);

//   const getRestaurantsFromYelp = () => {
//     const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=SanDiego`;

//     const apiOptions = {
//       headers: {
//         Authorization: `Bearer ${YELP_API_KEY}`,
//       },
//     };

//     return fetch(yelpUrl, apiOptions)
//       .then((res) => console.log(res.json()))
//       .then((json) =>
//         //   console.log(json.businesses)
//         setRestaurantData(json.businesses)
//       ).catch((err) => console.log(err))
//   };

//   useEffect(() => {
//     getRestaurantsFromYelp();
//   }, []);
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
          <RestaurantItem restaurantData={restaurantData} />
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
