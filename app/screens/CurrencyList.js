import React from "react";
import { SafeAreaView, Text, FlatList } from "react-native";
import currencies from "../data/currencies";

const CurrencyList = () => (
  <SafeAreaView>
    <FlatList
      data={currencies}
      renderItem={({ item }) => <Text>{item}</Text>}
      keyExtractor={item => item}
    />
  </SafeAreaView>
);

export default CurrencyList;
