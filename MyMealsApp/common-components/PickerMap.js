import { TextInput, StyleSheet, View, Text } from "react-native";
import Colors from "../constants/Color";
import { GlobalStyle } from "../constants/GlobleStyle";
import { useSelector } from "react-redux";
import Button from "./PrimaryButton";
import ScreenData from "../common-components/ScreenData";
import MapView from "react-native-maps";
import { Marker } from "react-native-maps";
import { useState, useEffect } from "react";
const PickerMap = (props) => {
  const mode = useSelector((state) => state.DarkLightModeChangerData.darkMode);
  const screenData = ScreenData();
  const [coordination, setCoordination] = useState(null);
  const styles = StyleSheet.create({
    screen: {
      flex: 1,
      backgroundColor: mode
        ? Colors.backgroundColorDark
        : Colors.backgroundColor,
      padding: 20,
      paddingHorizontal: screenData.isLandscape ? 60 : 20,
    },
  });
  const handleMapChange = (event) => {
    const lat = event.nativeEvent.coordinate.latitude;
    const lon = event.nativeEvent.coordinate.longitude;
    setCoordination({ latitude: lat, longitude: lon });
  };
  return (
    <View style={styles.screen}>
      <MapView
        style={{ width: "100%", height: "90%", marginBottom: 20 }}
        initialRegion={{
          latitude: 6.9004796,
          longitude: 79.9350184,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        onPress={handleMapChange}
      >
        {coordination && <Marker coordinate={coordination} />}
      </MapView>
      <Button
        title="SET LOCATION"
        onPress={() => {
          props.handleCloseMapView(coordination);
        }}
      />
    </View>
  );
};

export default PickerMap;
