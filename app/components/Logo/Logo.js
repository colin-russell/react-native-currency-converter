import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  View,
  Text,
  Keyboard,
  Animated,
  StyleSheet,
  Platform
} from "react-native";

import styles from "./styles";

const ANIMATION_DURATION = 250;

class Logo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      containerImageWidth: new Animated.Value(styles.$largeContainerSize),
      imageWidth: new Animated.Value(styles.$largeImageSize)
    };
  }

  componentDidMount() {
    var keyboardDidOrWillListener = "Will"; // only exists on iOS
    if (Platform.OS === "android") {
      keyboardDidOrWillListener = "Did";
    }
    this.keyboardShowListener = Keyboard.addListener(
      "keyboard" + keyboardDidOrWillListener + "Show",
      this.keyboardShow
    );
    this.keyboardHideListener = Keyboard.addListener(
      "keyboard" + keyboardDidOrWillListener + "Hide",
      this.keyboardHide
    );
  }

  componentWillUnmount() {
    this.keyboardShowListener.remove();
    this.keyboardHideListener.remove();
  }

  keyboardShow = () => {
    const { containerImageWidth, imageWidth } = this.state;
    Animated.parallel([
      Animated.timing(containerImageWidth, {
        toValue: styles.$smallContainerSize,
        duration: ANIMATION_DURATION
      }),
      Animated.timing(imageWidth, {
        toValue: styles.$smallImageSize,
        duration: ANIMATION_DURATION
      })
    ]).start();
  };

  keyboardHide = () => {
    const { containerImageWidth, imageWidth } = this.state;
    Animated.parallel([
      Animated.timing(containerImageWidth, {
        toValue: styles.$largeContainerSize,
        duration: ANIMATION_DURATION
      }),
      Animated.timing(imageWidth, {
        toValue: styles.$largeImageSize,
        duration: ANIMATION_DURATION
      })
    ]).start();
  };

  render() {
    const { containerImageWidth, imageWidth } = this.state;
    const { tintColor } = this.props;

    const containerImageStyles = [
      styles.containerImage,
      { width: containerImageWidth, height: containerImageWidth }
    ];

    const imageStyles = [
      styles.logo,
      { width: imageWidth },
      tintColor ? { tintColor } : null
    ];

    return (
      <View style={styles.container}>
        <Animated.View style={containerImageStyles}>
          <Animated.Image
            style={[StyleSheet.absoluteFill, containerImageStyles]}
            resizeMode="contain"
            source={require("./images/background.png")}
          />
          <Animated.Image
            style={imageStyles}
            resizeMode="contain"
            source={require("./images/logo.png")}
          />
        </Animated.View>
        <Text style={styles.text}>Currency Converter</Text>
      </View>
    );
  }
}

export default Logo;
