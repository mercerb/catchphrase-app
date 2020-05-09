import React from "react";
import { InitialState } from "./GlobalState";

const AppContext = React.createContext(InitialState);

export default AppContext;
