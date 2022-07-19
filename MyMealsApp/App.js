import { useContext, useState, useEffect } from "react";
import { StyleSheet, View } from "react-native";
import FlashMessage from "react-native-flash-message";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import { showMessage } from "react-native-flash-message";
import { Provider } from "react-redux";
import Store from "./store/Main";
import MyMealsNavigations from "./navigation/MyMealsNavigations";
import AuthContextProvider, { AuthContext } from "./store/AuthContext";
import Auth from "./screens/Auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch } from "react-redux";
import SplashScreen from "./layouts/SplashScreen";
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
function Root() {
  const authContext = useContext(AuthContext);
  const dispatch = useDispatch();
  const [isTryingLogin, setIsTryingLogin] = useState(true);
  useEffect(() => {
    async function fetchToken() {
      const storedToken = await AsyncStorage.getItem("token");
      const darkMode = await AsyncStorage.getItem("darMode");

      if (storedToken) {
        authContext.loginUser(storedToken);
      }
      if (darkMode) {
        dispatch({
          type: "CHANGE_DARK_MODE",
          payload: darkMode == "true" ? true : false,
        });
      }
      setIsTryingLogin(false);
    }
    fetchToken();
  }, []);

  if (isTryingLogin) {
    <AppLoading />;
  }
  return <Navigation />;
}
function Navigation() {
  const authContext = useContext(AuthContext);
  const [showComponent, setShowComponent] = useState(true);
  useEffect(() => {
    const toRef = setTimeout(() => {
      setShowComponent(false);
      clearTimeout(toRef);
    }, 1200);
  }, [showComponent]);
  if (showComponent) {
    return <SplashScreen />;
  }
  return (
    <View style={{ flex: 1 }}>
      {authContext.isLogin && <MyMealsNavigations />}
      {!authContext.isLogin && <Auth />}
    </View>
  );
}
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
    <AuthContextProvider>
      <Provider store={Store}>
        <View style={styles.screen}>
          {/* <Auth /> */}
          {/* <MyMealsNavigations /> */}
          <Root />
          <FlashMessage
            position="bottom"
            statusBarHeight={0}
            icon={"auto"}
            floating={true}
          />
        </View>
      </Provider>
    </AuthContextProvider>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
