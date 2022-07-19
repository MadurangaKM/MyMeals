import {
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
  ScrollView,
} from "react-native";
import DrakLightModeChanger from "../common-components/DarkLightModeChanger";
import ImageTitleCard from "../common-components/ImageTitleCard";
import { useSelector, useDispatch } from "react-redux";
import ScreenData from "../common-components/ScreenData";
import Colors from "../constants/Color";
import Card from "../common-components/Card";
import TextInputField from "../common-components/TextInput";
import { useFormik } from "formik";
import * as Yup from "yup";
import Button from "../common-components/PrimaryButton";
import DropDown from "../common-components/DropDown";
import Def from "../config/Def";
import { useState } from "react";
import FilterSwitch from "../common-components/FilterSwitch";
import {
  launchCameraAsync,
  useCameraPermissions,
  PermissionStatus,
} from "expo-image-picker";
import { showMessage } from "react-native-flash-message";
import {
  getCurrentPositionAsync,
  requestForegroundPermissionsAsync,
} from "expo-location";
import { mapPreview } from "../common-components/MapPreview";
import LoadingOverlay from "../common-components/LoadingOverlay";
import PickerMap from "../common-components/PickerMap";
const AddFavorites = ({ route, navigation }) => {
  const mode = useSelector((state) => state.DarkLightModeChangerData.darkMode);
  const [isVegan, setIsVegan] = useState(false);
  const [isGluten, setIsGluten] = useState(false);
  const [imageUrl, setImageUrl] = useState(null);
  const [locationData, setLocationData] = useState(null);
  const [isLoading, setisLoading] = useState(false);
  const [mapView, setMapView] = useState(false);
  const screenData = ScreenData();
  const dispatch = useDispatch();
  const styles = StyleSheet.create({
    screen: {
      flex: 1,
      backgroundColor: mode
        ? Colors.backgroundColorDark
        : Colors.backgroundColor,
    },
    scrollView: {
      flex: 1,
      padding: 20,
      paddingTop: 10,
      width: "100%",
    },
  });
  const formik = useFormik({
    initialValues: {
      title: "",
      category: "",
    },

    validationSchema: Yup.object({
      title: Yup.string().max(255).required("Title is required"),
      category: Yup.string().max(255).required("Category is required"),
    }),
    onSubmit: (values) => {
      if (!locationData) {
        showMessage({
          message: "No Location Added",
          type: "danger",
        });
        return;
      }
      if (!imageUrl) {
        showMessage({
          message: "No Meal Photo Added",
          type: "danger",
        });
        return;
      }
      dispatch({
        type: "ADD_FAVORITE_DATA",
        payload: {
          categoryId: values.category + 1,
          isVegan: isVegan,
          isGluten: isGluten,
          rootId: values.category + 1,
          url: imageUrl,
          name: values.title,
          location: locationData,
        },
      });
      navigation.navigate("Favorites", {});
    },
  });
  const handleInputChange = (name, value) => {
    if (name == "category") {
      let event = {
        target: {
          name: name,
          value: value,
        },
      };
      formik.handleChange(event);
      return;
    }
    let event = {
      target: {
        name: name,
        value: value,
      },
    };
    formik.handleChange(event);
  };
  const handleFilter = (name) => {
    if (name === "gluten") {
      setIsGluten(!isGluten);
    }
    if (name === "vegan") {
      setIsVegan(!isVegan);
    }
  };
  const [cameraPermisionInfo, requestPermission] = useCameraPermissions();
  async function verifyPermissionsCamera() {
    if (cameraPermisionInfo.status === PermissionStatus.UNDETERMINED) {
      const permissionResponce = await requestPermission();
      return permissionResponce.granted;
    }
    if (cameraPermisionInfo.status === PermissionStatus.DENIED) {
      showMessage({
        message:
          "Insufficient Permissions! Grant camera permissions to take photo",
        type: "danger",
      });
      return false;
    }
    return true;
  }
  const takeImageHandler = async () => {
    const hasPermission = await verifyPermissionsCamera();
    if (!hasPermission) {
      return;
    }
    const image = await launchCameraAsync({
      allowsEditing: true,
      quality: 0.5,
      aspect: [16, 9],
    });
    setImageUrl(image.uri);
  };
  const getLocationHandler = async () => {
    setisLoading(true);
    let { status } = await requestForegroundPermissionsAsync();
    if (status !== "granted") {
      showMessage({
        message:
          "Insufficient Permissions! Grant location permission to get location",
        type: "danger",
      });
      return;
    }

    let location = await getCurrentPositionAsync({});
    setLocationData({
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
    });
    setisLoading(false);
  };
  const getMapPicerHandler = () => {
    setMapView(true);
  };
  const handleCloseMapView = (locations) => {
    if (!locations) {
      showMessage({
        message: "No Location picked",
        type: "danger",
      });
    }
    setLocationData(locations);
    setMapView(false);
  };
  if (isLoading) {
    return <LoadingOverlay />;
  }
  if (mapView) {
    return <PickerMap handleCloseMapView={handleCloseMapView} />;
  }
  return (
    <View style={styles.screen}>
      <DrakLightModeChanger />
      <ScrollView style={styles.scrollView} nestedScrollEnabled={true}>
        <Card style={{ padding: 10 }}>
          <TextInputField
            placeholder="Enter Title"
            id="title"
            name="title"
            value={formik.values.title}
            onChangeText={handleInputChange.bind(this, "title")}
            error={Boolean(formik.errors.title)}
            errorMessage={formik.errors.title}
          />
          <DropDown
            title={"Select Category"}
            data={Def.category}
            onSelect={handleInputChange.bind(this, "category")}
            error={Boolean(formik.errors.category)}
            errorMessage={formik.errors.category}
          />
          <View
            style={{
              flexDirection: "row",
              flex: 1,
              justifyContent: "space-between",
              paddingTop: 0,
            }}
          >
            <FilterSwitch
              name={"Gluten"}
              style={{ flex: 0.49 }}
              value={isGluten}
              onValueChange={handleFilter.bind(this, "gluten")}
            />
            <FilterSwitch
              name={"Vegan"}
              style={{ flex: 0.49 }}
              value={isVegan}
              onValueChange={handleFilter.bind(this, "vegan")}
            />
          </View>
          {!!imageUrl && (
            <Image
              style={{
                height: 200,
                resizeMode: "cover",
                borderRadius: 10,
                marginBottom: 10,
              }}
              source={{
                uri: imageUrl,
              }}
            />
          )}
          <Button
            title="Take Image"
            isIcon={true}
            iconName="camera"
            isBorder={true}
            onPress={takeImageHandler}
            style={{ marginBottom: 15 }}
          />
          {!!locationData && (
            <Image
              style={{
                height: 200,
                resizeMode: "cover",
                borderRadius: 10,
                marginBottom: 10,
              }}
              source={{
                uri: mapPreview(locationData.latitude, locationData.longitude),
              }}
            />
          )}
          <View
            style={{
              flexDirection: screenData.isSmallScreen ? "column" : "row",
              justifyContent: "space-between",
            }}
          >
            <Button
              title="Locate Place"
              isIcon={true}
              iconName="location-sharp"
              onPress={getLocationHandler}
              isBorder={true}
              style={{
                paddingHorizontal: 21,
                marginBottom: screenData.isSmallScreen ? 15 : 0,
              }}
            />
            <Button
              title="Pick On Map"
              isIcon={true}
              iconName="map"
              onPress={getMapPicerHandler}
              isBorder={true}
              style={{ paddingHorizontal: 21 }}
            />
          </View>
        </Card>
        <Button
          title="ADD MEAL"
          isIcon={true}
          iconName="add-circle-sharp"
          onPress={formik.handleSubmit}
          style={{ marginBottom: 50 }}
        />
      </ScrollView>
    </View>
  );
};
export default AddFavorites;
