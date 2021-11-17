import React from "react";
import WarehouseList from "../../components/warehouseList/WarehouseList";
import warehouses from "../../data/warehouses.json"

class Warehouse extends React.Component {
  state={
    warehouses:warehouses,
    currentWarehouse:{}
  }
  render() {
    return (
        <WarehouseList  warehouses={this.state.warehouses}/>
    );
  }
}


// function Warehouse(props) {

//   return (
//     <div>
//     <h1>Hello</h1>
//     <WarehouseList />
//     </div>
//   );
// }

export default Warehouse;
