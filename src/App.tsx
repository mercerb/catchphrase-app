import React, { useContext, useReducer, useEffect } from "react";
import AsyncStorage from "@react-native-community/async-storage";

import Login from "./screens/Login/index";
import AppContainer from "./routes";

import AppContext from "./store/AppContext";
import { MainReducer } from "./store/Reducer";

import ApiService, { Context } from "./services/api";

const App = (props: any) => {
  const initialState = useContext(AppContext);
  const [state, dispatch]: any = useReducer<any>(MainReducer, initialState);
  const value: any = { state, dispatch };

  useEffect(() => {
  }, []);

  return (
    <AppContext.Provider value={value}>
      <AppContainer />
    </AppContext.Provider>
  );
};

export default App;
