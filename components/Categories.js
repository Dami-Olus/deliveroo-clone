import React from "react";
import { View, Text, ScrollView } from "react-native";
import CategoryCard from "./CategoryCard";

const Categories = () => {
  return (
    <ScrollView
      contentContainerStyle={{ paddingHorizontal: 15, paddingTop: 10 }}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      {/* Categories card */}
      <CategoryCard
        imgUrl="https://links.papareact.com/wru"
        title="testing 1"
      />
      <CategoryCard
        imgUrl="https://links.papareact.com/wru"
        title="testing 2"
      />
      <CategoryCard
        imgUrl="https://links.papareact.com/wru"
        title="testing 3"
      />
     
    </ScrollView>
  );
};

export default Categories;
