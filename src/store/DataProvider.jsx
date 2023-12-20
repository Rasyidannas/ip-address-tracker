import { useReducer } from "react";
import DataContext from "./data-context";

const defaultState = {
  datas: {},
  lat: "",
  lng: "",
};

const dataReducer = (state, action) => {};

const DataProvider = ({ children }) => {
  const [dataState, dispatchDataAction] = useReducer(dataReducer, defaultState);

  return <DataContext.Provider>{children}</DataContext.Provider>;
};
