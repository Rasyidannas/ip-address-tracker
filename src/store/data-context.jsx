import { createContext } from "react";

const DataContext = createContext({
  datas: {},
  lat: "",
  lng: "",
  addData: (data) => {},
});

export default DataContext;
