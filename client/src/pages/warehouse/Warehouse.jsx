import React from "react";
import WarehouseList from "../../components/warehouseList/WarehouseList";
import warehouses from "../../data/warehouses.json"
import Delete from "../../components/Delete/Delete";

class Warehouse extends React.Component {
  state={
    warehouses:warehouses,
    currentWarehouse:{}
  }
  render() {
    return (
      <div>
        <WarehouseList  warehouses={this.state.warehouses}/>
        {/* <Delete /> */}
        </div>
        );
  }
}

export default Warehouse;
