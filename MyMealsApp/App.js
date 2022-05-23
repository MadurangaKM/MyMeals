import { useState } from "react";
import { StyleSheet, View } from "react-native";
import Header from "./layouts/Header";
import FlashMessage from "react-native-flash-message";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import { showMessage } from "react-native-flash-message";
import { Provider } from "react-redux";
import Store from "./store/Main";
import DarkLightModeChanger from "./common-components/DarkLightModeChanger";
import MyMealsNavigations from "./navigation/MyMealsNavigations";
const fetchFonts = () => {
  return Font.loadAsync({
    "poppins-bold": require("./assets/fonts/Poppins-Bold.otf"),
    "poppins-light": require("./assets/fonts/Poppins-Light.otf"),
    "poppins-medium": require("./assets/fonts/Poppins-Medium.otf"),
    "poppins-semiBold": require("./assets/fonts/Poppins-SemiBold.otf"),
    "poppins-thin": require("./assets/fonts/Poppins-Thin.otf"),
    "poppins-regular": require("./assets/fonts/Poppins-Regular.otf"),
  });
};

export default function App() {
  const [isDataLoaded, setIsDataLoaded] = useState(false);
  if (!isDataLoaded) {
    return (
      <AppLoading
        startAsync={fetchFonts}
        onFinish={() => setIsDataLoaded(true)}
        onError={(error) => {
          showMessage({
            message: error,
            type: "danger",
          });
        }}
      />
    );
  }

  return (
    <Provider store={Store}>
      <View style={styles.screen}>
        {/* <Header title={"MyMeals App"} />
        <DarkLightModeChanger /> */}
        <MyMealsNavigations/>
        <FlashMessage
          position="bottom"
          statusBarHeight={0}
          icon={"auto"}
          floating={true}
        />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
