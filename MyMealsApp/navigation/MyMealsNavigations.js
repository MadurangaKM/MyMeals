import React, { useContext } from "react";
import { View } from "react-native";
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
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import Filters from "../screens/Filters";
import ShopingList from "../screens/ShopingList";
import { MaterialIcons } from "@expo/vector-icons";
import Button from "../common-components/PrimaryButton";
import { AuthContext } from "../store/AuthContext";
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();
function MyMealsNavigations() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Categories"
        component={Categories}
        options={({ navigation, route }) => ({
          header: (props) => (
            <Header
              {...props}
              onPress={navigation.openDrawer}
              name={route.name}
              isMenu={true}
            />
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
function TabNavigation() {
  const mode = useSelector((state) => state.DarkLightModeChangerData.darkMode);
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Category"
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
                color={focused ? Colors.primaryDark : Colors.darkTitleTextColor}
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
                color={focused ? Colors.primaryDark : Colors.darkTitleTextColor}
              />
            );
          },
          header: (props) => (
            <Header
              {...props}
              name={"Favorites"}
              isMenu={true}
              onPress={navigation.openDrawer}
            />
          ),
        })}
      />
    </Tab.Navigator>
  );
}
export default function DrawerNav() {
  const mode = useSelector((state) => state.DarkLightModeChangerData.darkMode);

  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Main Category"
        drawerContent={CustomDrawerContent}
      >
        <Drawer.Screen
          name="Home"
          component={TabNavigation}
          options={({ navigation, route }) => ({
            headerShown: false,
            drawerStyle: {
              backgroundColor: mode
                ? Colors.backgroundColorDark
                : Colors.backgroundColor,
            },
            drawerActiveTintColor: Colors.primaryDark,
            drawerLabelStyle: {
              ...GlobalStyle.ButtonText,
              color: mode ? Colors.darkTitleTextColor : Colors.normalTextColor,
            },
            drawerIcon: ({ focused, size }) => (
              <Ionicons
                name="ios-home"
                size={size}
                color={focused ? Colors.primaryDark : Colors.darkTitleTextColor}
              />
            ),
            header: (props) => (
              <Header {...props} name={"Favorites"} isMenu={true} />
            ),
          })}
        />
        <Drawer.Screen
          name="Filters"
          component={Filters}
          options={({ navigation, route }) => ({
            drawerStyle: {
              backgroundColor: mode
                ? Colors.backgroundColorDark
                : Colors.backgroundColor,
            },
            drawerIcon: ({ focused, size }) => (
              <Ionicons
                name="filter"
                size={size}
                color={focused ? Colors.primaryDark : Colors.darkTitleTextColor}
              />
            ),
            drawerActiveTintColor: Colors.primaryDark,
            drawerLabelStyle: {
              ...GlobalStyle.ButtonText,
              color: mode ? Colors.darkTitleTextColor : Colors.normalTextColor,
            },
            header: (props) => (
              <Header
                {...props}
                onPress={navigation.openDrawer}
                name={route.name}
                isMenu={true}
              />
            ),
          })}
        />
        <Drawer.Screen
          name="Shoping List"
          component={ShopingList}
          options={({ navigation, route }) => ({
            drawerStyle: {
              backgroundColor: mode
                ? Colors.backgroundColorDark
                : Colors.backgroundColor,
            },
            drawerIcon: ({ focused, size }) => (
              <MaterialIcons
                name="shopping-cart"
                size={size}
                color={focused ? Colors.primaryDark : Colors.darkTitleTextColor}
              />
            ),
            drawerActiveTintColor: Colors.primaryDark,
            drawerLabelStyle: {
              ...GlobalStyle.ButtonText,
              color: mode ? Colors.darkTitleTextColor : Colors.normalTextColor,
            },
            header: (props) => (
              <Header
                {...props}
                onPress={navigation.openDrawer}
                name={route.name}
                isMenu={true}
              />
            ),
          })}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
function CustomDrawerContent(props) {
  const authContext = useContext(AuthContext);
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <View
        style={{
          width: "60%",
          marginTop: 10,
          marginLeft: "7%",
        }}
      >
        <Button
          isIcon={true}
          iconName="power-sharp"
          title="LOGOUT"
          onPress={authContext.logout}
        />
      </View>
    </DrawerContentScrollView>
  );
}
