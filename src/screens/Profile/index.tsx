import React, { useContext, useEffect, useState } from "react";
import { View, Text, Linking } from "react-native";

import AsyncStorage from "@react-native-community/async-storage";
import AppContext from "../../store/AppContext";

// Components
import Headline from "../../components/typography/Headline";

// Hooks

// Services
import ApiService from "../../services/api";

export default function Profile(props: any, navigation: any) {
  const { state, dispatch }: any = useContext(AppContext);
  const [userInfo, setUserInfo]: any = useState({});

  const handleLogout = async () => {
    await dispatch({ type: "CLEAR_AUTH_TOKEN" });
    return AsyncStorage.clear();
  };

  const getUserInfo = async () => {
    let response = await ApiService.GetUserInfo();
    if (response !== undefined) {
      return setUserInfo(response);
    }
  };

  useEffect(() => {}, []);

  return (
    <View>
      <Headline>Profile</Headline>
    </View>
  );
}
