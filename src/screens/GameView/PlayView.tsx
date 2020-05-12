import React, { useContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-community/async-storage";
import { View, Text, Linking } from "react-native";

import AppContext from "../../store/AppContext";

// Components
import Headline from "../../components/typography/Headline";

// Services
import ApiService from "../../services/api";

export default function PlayView(props: any, navigation: any) {
  const { state, dispatch }: any = useContext(AppContext);

  useEffect(() => {}, []);

  return (
    <View>
      <Headline>Game View </Headline>
      <Headline>Word </Headline>
    

    </View>
  );
}
