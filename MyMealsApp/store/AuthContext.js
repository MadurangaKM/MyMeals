import { createContext, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
export const AuthContext = createContext({
  token: "",
  isLogin: false,
  loginUser: (token) => {},
  logout: () => {},
});
function AuthContextProvider({ children }) {
  const [authToken, setAuthToken] = useState();
  const logInUser = (token) => {
    setAuthToken(token);
    AsyncStorage.setItem("token", token);
  };
  const logout = () => {
    setAuthToken(null);
    AsyncStorage.removeItem("token");
  };
  const value = {
    token: authToken,
    isLogin: !!authToken,
    loginUser: logInUser,
    logout: logout,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export default AuthContextProvider;
