import React, { Component } from "react";
import { View, StatusBar, FlatList } from "react-native";
// import PropTypes from "prop-types";

import { ListItem, Separator } from "../components/List";
import currencies from "../data/currencies";

const TEMP_CURRENT_CURRENCY = "CAD";

class CurrencyList extends Component {
  // static propTypes = {
  //   navigation: PropTypes.object
  // };
  handlePress = () => {
    console.log("row press");
    this.props.navigation.goBack(null);
  };
  render() {
    return (
      <View>
        <StatusBar translucent={false} barStyle="dark-content" />
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
      </View>
    );
  }
}

export default CurrencyList;
