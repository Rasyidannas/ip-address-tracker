import "./App.css";
import Header from "./components/Layouts/Header";
import ResultData from "./components/Result/ResultData";

function App() {
  return (
    <>
      <Header />
      <ResultData className="relative -top-12 left-1/2 -translate-x-1/2 rounded-lg shadow-sm bg-white" />
    </>
  );
}

export default App;
