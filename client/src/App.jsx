import "./App.scss";
import Warehouse from "./pages/warehouse/Warehouse";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Warehouse />
    </BrowserRouter>
  );
}

export default App;
