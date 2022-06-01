import React from "react";
import {
  StyleSheet,
  Image,
  Text,
  Platform,
  View,
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
const Auth = (props) => {
  const screenData = ScreenData();
  const [isSignUp, setIsSignUp] = useState(false);
  const styles = StyleSheet.create({
    screen: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
  });
  const handleSecondaryButton = () => {
    setIsSignUp(!isSignUp);
  };
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
      console.log("Check Values", values);
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
      <Image
        style={{
          height: "25%",
          width: "50%",
          resizeMode: "contain",
        }}
        source={Logo}
      />
      <View
        style={{
          width: "90%",
          backgroundColor: "rgba(255, 255, 255, 0.2)",
          marginTop: 20,
          borderRadius: 20,
          padding: 20,
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
    </LinearGradient>
  );
};

export default Auth;
