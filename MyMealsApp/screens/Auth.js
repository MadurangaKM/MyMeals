import React, { useContext } from "react";
import {
  StyleSheet,
  Image,
  Text,
  Platform,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Colors from "../constants/Color";
import { GlobalStyle } from "../constants/GlobleStyle";
import ScreenData from "../common-components/ScreenData";
import Logo from "../assets/logo.png";
import TextInputField from "../common-components/TextInput";
import Button from "../common-components/PrimaryButton";
import SecondaryButton from "../common-components/SecondaryButton";
import { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import Config from "../config/Config";
import { showMessage } from "react-native-flash-message";
import LoadingOverlay from "../common-components/LoadingOverlay";
import { AuthContext } from "../store/AuthContext";
import { useDispatch } from "react-redux";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
const Auth = (props) => {
  const screenData = ScreenData();
  const authContext = useContext(AuthContext);
  const [isSignUp, setIsSignUp] = useState(false);
  const [isLoading, setisLoading] = useState(false);
  const dispatch = useDispatch();
  const styles = StyleSheet.create({
    screen: {
      flex: 1,
    },
  });
  const handleSecondaryButton = () => {
    setIsSignUp(!isSignUp);
  };
  useEffect(() => {
    // AsyncStorage.setItem("darMode", "true");
    dispatch({
      type: "CHANGE_DARK_MODE",
      payload: true,
    });
  }, []);
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      reEnterPassword: "",
    },

    validationSchema: Yup.object({
      email: Yup.string()
        .email("Must be a valid email")
        .max(255)
        .required("Email is required"),
      password: Yup.string()
        .required("Password is required")
        .matches(
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
          "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
        ),
      reEnterPassword: isSignUp
        ? Yup.string()
            .required("Confirm password is required")
            .oneOf([Yup.ref("password"), null], "Passwords must match")
        : Yup.string().notRequired(),
    }),
    onSubmit: (values) => {
      if (isSignUp) {
        createUser(values.email, values.password);
        return;
      } else {
        loginInUser(values.email, values.password);
        return;
      }
    },
  });
  const handleInputChange = (name, value) => {
    let event = {
      target: {
        name: name,
        value: value,
      },
    };
    formik.handleChange(event);
  };
  const createUser = (email, password) => {
    setisLoading(true);
    axios
      .post(
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=" +
          Config.apiKey,
        {
          email: email,
          password: password,
          returnSecureToken: true,
        }
      )
      .then((response) => {
        authContext.loginUser(response.data.idToken);
        setTimeout(() => {
          authContext.logout();
        }, 1800000);
      })
      .catch((error) => {
        showMessage({
          message: error.message,
          type: "danger",
        });
        setisLoading(false);
      });
  };
  const loginInUser = (email, password) => {
    setisLoading(true);
    axios
      .post(
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=" +
          Config.apiKey,
        {
          email: email,
          password: password,
          returnSecureToken: true,
        }
      )
      .then((response) => {
        authContext.loginUser(response.data.idToken);
        setTimeout(() => {
          authContext.logout();
        }, 1800000);
      })
      .catch((error) => {
        showMessage({
          message: "Invalid Credentials",
          type: "danger",
        });
        setisLoading(false);
      });
  };
  if (isLoading) {
    return <LoadingOverlay />;
  }
  return (
    <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      colors={[
        Colors.primaryGradientColorOne,
        Colors.primaryGradientColorTwo,
        Colors.primaryGradientColorThree,
      ]}
      style={styles.screen}
    >
      <KeyboardAwareScrollView
        contentContainerStyle={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          style={{
            height: "22%",
            width: "100%",
            resizeMode: "contain",
          }}
          source={Logo}
        />
        <View
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.2)",
            marginTop: 20,
            borderRadius: 20,
            padding: 20,
            width: "90%",
          }}
        >
          <TextInputField
            placeholder="Enter Email"
            id="email"
            name="email"
            value={formik.values.email}
            onChangeText={handleInputChange.bind(this, "email")}
            error={Boolean(formik.errors.email)}
            errorMessage={formik.errors.email}
          />
          <TextInputField
            placeholder="Enter Password"
            id="password"
            name="password"
            value={formik.values.password}
            onChangeText={handleInputChange.bind(this, "password")}
            error={Boolean(formik.errors.password)}
            errorMessage={formik.errors.password}
            secureTextEntry={true}
          />
          {isSignUp && (
            <TextInputField
              placeholder="Re-Enter Password"
              id="reEnterPassword"
              name="reEnterPassword"
              value={formik.values.reEnterPassword}
              onChangeText={handleInputChange.bind(this, "reEnterPassword")}
              error={Boolean(formik.errors.reEnterPassword)}
              errorMessage={formik.errors.reEnterPassword}
              secureTextEntry={true}
            />
          )}
          <Button
            title={isSignUp ? "SIGN UP" : "LOGIN"}
            onPress={formik.handleSubmit}
          />
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                ...GlobalStyle.BodyOne,
                marginTop: 10,
                marginLeft: 15,
                color: Colors.surfaceColor,
              }}
            >
              {isSignUp ? "Do you have account?" : "Don't have account?"}
            </Text>
            <SecondaryButton
              onPress={handleSecondaryButton}
              style={{ marginTop: 10, marginLeft: -15 }}
              title={isSignUp ? "LOGIN" : "SIGN UP"}
            />
          </View>
        </View>
      </KeyboardAwareScrollView>
    </LinearGradient>
  );
};

export default Auth;
