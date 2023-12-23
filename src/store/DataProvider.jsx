import { useReducer } from "react";
import DataContext from "./data-context";

const defaultState = {
  datas: {},
  lat: "",
  lng: "",
};

const dataReducer = (state, action) => {
  if (action.type === "ADD") {
    return {
      datas: {
        ip: action.data.ip,
        isp: action.data.isp,
        location: action.data.location,
        timezone: action.data.timezone,
      },
      lat: action.data.lat,
      lng: action.data.lng,
    };
  }
};

const DataProvider = ({ children }) => {
  const [dataState, dispatchDataAction] = useReducer(dataReducer, defaultState);

  const addDataHandler = (data) => {
    dispatchDataAction({ type: "ADD", data: data });
  };

  const dataContext = {
    datas: dataState.datas,
    lat: dataState.lat,
    lng: dataState.lng,
    addData: addDataHandler,
  };

  return (
    <DataContext.Provider value={dataContext}>{children}</DataContext.Provider>
  );
};

export default DataProvider;
