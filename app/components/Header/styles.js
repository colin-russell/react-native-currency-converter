import { getStatusBarHeight } from "react-native-status-bar-height";
import EStyleSheet from "react-native-extended-stylesheet";

const styles = EStyleSheet.create({
  container: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    paddingTop: getStatusBarHeight()
  },
  button: {
    alignSelf: "flex-end",
    paddingVertical: 5,
    paddingHorizontal: 20
  },
  icon: {
    width: 18,
    resizeMode: "contain"
  }
});

export default styles;
