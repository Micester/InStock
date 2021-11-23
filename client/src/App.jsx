import "./App.scss";
import Warehouse from "./pages/warehouse/Warehouse";
import Main_Inv from "./pages/inventory/Main_Inv";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    {/* Header Component Goes Here */}
    <Switch>
      <Route path='/' exact component={Warehouse} /> {/* WarehousePage */}
      <Route path='/warehouses' exact component={Warehouse} /> {/* WarehousePage */}
      <Route path='/warehouses/:warehouseId' exact component/> {/* WarehouseSinglePage */}
      <Route path='/warehouses/add/new' exact component /> {/* WarehouseAddPage */}
      <Route path='/warehouses/:warehouseId/edit' component /> {/* WarehouseEditPage */}
      <Route path='/inventories' exact component = {Main_Inv}/> {/* InventoryPage */}
      <Route path='/inventories/:itemId' exact component /> {/* InventorySinglePage */}
      <Route path='/inventories/add/new' component /> {/* InventoryAddPage */}
      <Route path='/inventories/:itemId/edit' component /> {/* InventoryEditPage */}
      {/* If there's time I'll probably do a 404 page and put the route here - Nigel */}
    </Switch>
    {/* Footer Component Goes Here */}
    </BrowserRouter>
  );
}
export default App;