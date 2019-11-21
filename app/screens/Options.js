import React, { Component } from "react";
import {
  ScrollView,
  StatusBar,
  SafeAreaView,
  Platform,
  StyleSheet,
  Linking
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { ListItem, Separator } from "../components/List";
import { connectAlert } from "../components/Alert";

const ICON_PREFIX = Platform.OS === "ios" ? "ios" : "md";
const ICON_COLOR = "#868686";
const ICON_SIZE = 23;

const styles = StyleSheet.create({
  container: {
    paddingTop: StatusBar.currentHeight
  }
});

class Options extends Component {
  handleThemesPress = () => {
    this.props.navigation.navigate("Themes", { title: "Themes" });
  };

  handleSitePress = () => {
    Linking.openURL("httpa://fixer.io").catch(() =>
      this.props.alertWithType(
        "info",
        "Sorry!",
        "Fixer.io can't be opened right now"
      )
    );
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <StatusBar translucent={false} barStyle="dark-content" />
          <ListItem
            text="Themes"
            onPress={this.handleThemesPress}
            customIcon={
              <Ionicons
                name={ICON_PREFIX + "-arrow-forward"}
                color={ICON_COLOR}
                size={ICON_SIZE}
              />
            }
          />
          <Separator />
          <ListItem
            text="Fixer.io"
            onPress={this.handleSitePress}
            customIcon={
              <Ionicons
                name={ICON_PREFIX + "-link"}
                color={ICON_COLOR}
                size={ICON_SIZE}
              />
            }
          />
          <Separator />
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default connectAlert(Options);
