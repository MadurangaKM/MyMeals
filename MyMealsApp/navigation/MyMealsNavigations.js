import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Categories from "../screens/Categories";
import CategoryMeals from "../screens/CategoryMeals";
import MealDetails from "../screens/MealDetail";
import Header from "../layouts/Header";
const Stack = createNativeStackNavigator();
export default function MyMealsNavigations() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Categories"
          component={Categories}
          options={({ navigation, route }) => ({
            header: (props) => (
              <Header
                {...props}
                onPress={navigation.goBack}
                name={route.name}
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
                name={route.name}
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
                name={route.name}
              />
            ),
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
