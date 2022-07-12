import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

const RestaurantCards = ({
  id,
  imgUrl,
  title,
  rating,
  genre,
  address,
  short_description,
  dishes,
  long,
  lat,
}) => {
  return (
    <TouchableOpacity>
      <Image
      source={{ 
        uri: imgUrl,
      }}
      className="h-36 w-36 rounded-sm"
      />
      <View className="px-3 pb-4">
        <Text className="font-bold text-lg pt-2">{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default RestaurantCards;
