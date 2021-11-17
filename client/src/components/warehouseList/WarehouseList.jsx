import "./WarehouseList.scss";
import Btn from "../Button/Btn";

function WarehouseList(props) {
  console.log("warehouseList props", props);
  return (
    <div className="warehouseListPage">
     <div className="warehouseListPage__heading">
    <h1 className="warehouseListPage__heading--text">Warehouses</h1>
    </div>
    <input
        className="warehouseListPage__input"
        type="text"
        id="search"
        name="search"
        placeholder="Search"
      />
            <Btn className="warehouseListPage__button" text="Add New Warehouse" />

      <ul className="warehouseList">
        {props.warehouses.map((warehouse) => {
          return (
            <li key={warehouse.id}>
            <div warehouse>
              <p  className="warehouseListPage__heading--text">{warehouse.name}</p>
              </div>
              <p>{warehouse.address}</p>
              <p>{warehouse.contact.name}</p>
              <p>{warehouse.contact.position}</p>
              <p>{warehouse.contact.phone}</p>
              <p>{warehouse.contact.email}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default WarehouseList;
