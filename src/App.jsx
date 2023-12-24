import "./App.css";
import Header from "./components/Layouts/Header";
import MapBox from "./components/Map/MapBox";
import DataProvider from "./store/DataProvider.jsx";

function App() {
  return (
    <DataProvider>
      <Header />
      <MapBox />
    </DataProvider>
  );
}

export default App;
