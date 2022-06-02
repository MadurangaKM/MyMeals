import React, { useContext } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import DrakLightModeChanger from "../common-components/DarkLightModeChanger";
import { useSelector } from "react-redux";
import ScreenData from "../common-components/ScreenData";
import Colors from "../constants/Color";
import PrimaryButton from "../common-components/PrimaryButton";
import TextInputField from "../common-components/TextInput";
import { useState, useEffect } from "react";
import CardList from "../common-components/CardList";
import { showMessage } from "react-native-flash-message";
import Config from "../config/Config";
import axios from "axios";
import LoadingOverlay from "../common-components/LoadingOverlay";
import { AuthContext } from "../store/AuthContext";
const ShopingList = ({ route, navigation }) => {
  const mode = useSelector((state) => state.DarkLightModeChangerData.darkMode);
  const screenData = ScreenData();
  const [enteredList, setEnteredList] = useState("");
  const [allListsset, setAllListsset] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const authContext = useContext(AuthContext);
  const token = authContext.token;
  const textInputHandler = (text) => {
    setEnteredList(text);
  };
  useEffect(() => {
    fetchData();
  }, [token]);
  const fetchData = () => {
    setisLoading(true);
    axios
      .get(Config.baseUrl + "/shoppingList.json?auth=" + token)
      .then((response) => {
        const data = [];
        for (const key in response.data) {
          const shoppingObj = {
            id: key,
            value: response.data[key].value,
          };
          data.push(shoppingObj);
        }
        setAllListsset(data);
        setisLoading(false);
      })
      .catch((error) => {
        showMessage({
          message: error.message,
          type: "danger",
        });
        setisLoading(false);
      });
  };

  const addHanler = () => {
    if (enteredList == "") {
      showMessage({
        message: "Item Can Not Be Bank",
        type: "danger",
      });
      return;
    }
    let isSame = allListsset.filter((item) => {
      return item.value == enteredList;
    });

    if (Object.keys(isSame).length !== 0) {
      showMessage({
        message: "Item Is Already Exit",
        type: "warning",
      });
      return;
    }
    setisLoading(true);
    axios
      .post(Config.baseUrl + "/shoppingList.json?auth=" + token, {
        value: enteredList,
      })
      .then((response) => {
        setEnteredList("");
        showMessage({
          message: "Sucessfully Added Item",
          type: "success",
        });
        fetchData();
      })
      .catch((error) => {
        showMessage({
          message: error.message,
          type: "danger",
        });
        setisLoading(false);
      });
  };
  const handleDelete = (id) => {
    setisLoading(true);
    axios
      .delete(Config.baseUrl + "/shoppingList/" + id + ".json?auth=" + token)
      .then((response) => {
        showMessage({
          message: "Sucessfully Deleted Item",
          type: "success",
        });
        fetchData();
      })
      .catch((error) => {
        showMessage({
          message: error.message,
          type: "danger",
        });
        setisLoading(false);
      });
  };
  if (isLoading) {
    return <LoadingOverlay />;
  }
  const styles = StyleSheet.create({
    screen: {
      flex: 1,
      backgroundColor: mode
        ? Colors.backgroundColorDark
        : Colors.backgroundColor,
    },
    inputView: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: 10,
      marginTop: -20,
      padding: 20,
      paddingHorizontal: screenData.isLandscape ? 60 : 20,
      paddingBottom: 0,
    },
  });
  return (
    <View style={styles.screen}>
      <DrakLightModeChanger />
      <View style={styles.inputView}>
        <View style={{ flex: 0.78, paddingTop: 18 }}>
          <TextInputField
            placeholder="Type your item"
            onChangeText={textInputHandler}
            value={enteredList}
            onSubmitEditing={addHanler}
          />
        </View>
        <View style={{ flex: 0.2 }}>
          <PrimaryButton
            onPress={addHanler}
            isIcon={true}
            iconName={"add-circle"}
            iconOnly={true}
          />
        </View>
      </View>
      <FlatList
        data={allListsset}
        renderItem={(itemData) => (
          <CardList
            value={itemData.item.value}
            onPress={handleDelete.bind(this, itemData.item.id)}
          />
        )}
        keyExtractor={(item, index) => item.id}
      />
    </View>
  );
};
export default ShopingList;
