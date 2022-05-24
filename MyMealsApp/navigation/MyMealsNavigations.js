import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Categories from "../screens/Categories";
import CategoryMeals from "../screens/CategoryMeals";
import MealDetails from "../screens/MealDetail";
import Header from "../layouts/Header";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Favorites from "../screens/Favorites";
import { useSelector } from "react-redux";
import Colors from "../constants/Color";
import { GlobalStyle } from "../constants/GlobleStyle";
import { Ionicons } from "@expo/vector-icons";
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
function MyMealsNavigations() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Categories"
        component={Categories}
        options={({ navigation, route }) => ({
          header: (props) => (
            <Header {...props} onPress={navigation.goBack} name={route.name} />
          ),
        })}
      />
      <Stack.Screen
        name="Category Meals"
        component={CategoryMeals}
        options={({ navigation, route }) => ({
          header: (props) => (
            <Header
              {...props}
              isBack={true}
              onPress={navigation.goBack}
              name={route.params.categoriesName}
            />
          ),
        })}
      />
      <Stack.Screen
        name="Meal Details"
        component={MealDetails}
        options={({ navigation, route }) => ({
          header: (props) => (
            <Header
              {...props}
              isBack={true}
              onPress={navigation.goBack}
              name={route.params.categoriesName}
            />
          ),
        })}
      />
    </Stack.Navigator>
  );
}
export default function TabNavigation() {
  const mode = useSelector((state) => state.DarkLightModeChangerData.darkMode);
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={MyMealsNavigations}
          options={({ navigation, route }) => ({
            headerShown: false,
            tabBarLabelStyle: { ...GlobalStyle.ButtonText, marginTop: -12 },
            tabBarActiveTintColor: Colors.primaryDark,
            tabBarIconStyle: { marginTop: 4 },
            tabBarIcon: ({ focused, color, size }) => {
              return (
                <Ionicons
                  name={"ios-list-circle-sharp"}
                  size={40}
                  color={
                    focused ? Colors.primaryDark : Colors.darkTitleTextColor
                  }
                />
              );
            },
            tabBarStyle: {
              backgroundColor: mode
                ? Colors.backgroundColorDark
                : Colors.backgroundColor,
              height: "13%",
            },
            header: (props) => (
              <Header
                {...props}
                name={"Categories"}
                onPress={navigation.goBack}
              />
            ),
          })}
        />
        <Tab.Screen
          name="Favorites"
          component={Favorites}
          options={({ navigation, route }) => ({
            tabBarLabelStyle: { ...GlobalStyle.ButtonText, marginTop: -12 },
            tabBarActiveTintColor: Colors.primaryDark,
            tabBarStyle: {
              backgroundColor: mode
                ? Colors.backgroundColorDark
                : Colors.backgroundColor,
              height: "13%",
            },
            tabBarIconStyle: { marginTop: 4 },
            tabBarIcon: ({ focused, color, size }) => {
              return (
                <Ionicons
                  name={"heart"}
                  size={40}
                  color={
                    focused ? Colors.primaryDark : Colors.darkTitleTextColor
                  }
                />
              );
            },
            header: (props) => <Header {...props} name={"Favorites"} />,
          })}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
