import React, { Component } from "react";
import { SafeAreaView, Text, FlatList, StyleSheet } from "react-native";

import { ListItem, Separator, styles } from "../components/List";
import currencies from "../data/currencies";

const TEMP_CURRENT_CURRENCY = "CAD";

class CurrencyList extends Component {
  handlePress = () => {
    console.log("row press");
  };
  render() {
    return (
      <SafeAreaView>
        <FlatList
          data={currencies}
          renderItem={({ item }) => (
            <ListItem
              text={item}
              selected={item === TEMP_CURRENT_CURRENCY}
              onPress={this.handlePress}
            />
          )}
          keyExtractor={item => item}
          ItemSeparatorComponent={Separator}
        />
      </SafeAreaView>
    );
  }
}

export default CurrencyList;
