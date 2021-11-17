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
            <div className="warehouseList__line1">
            <div className="warehouseList__Name">
            <p className="warehouseList__Name--label">WAREHOUSE</p>
              <p  className="warehouseList__Name--input">{warehouse.name}</p>
              </div>
              <div className="warehouseList__ContactName">
              <p className="warehouseList__ContactName--label">CONTACT NAME</p>
              <p className="warehouseList__ContactName--input">{warehouse.contact.name}</p>
              </div>
              </div>
              <div className="warehouseList__Address">
              <p className="warehouseList__Address--label">ADDRESS</p>
              <p className="warehouseList__Address--input">{warehouse.address}</p>
              </div>

              <div className="warehouseList__ContactInformation">
              <p className="warehouseList__ContactInformation--label">CONTACT NAME</p>

              <p className="warehouseList__ContactInformation--input">{warehouse.contact.phone}</p>
              <p className="warehouseList__ContactInformation--input">{warehouse.contact.email}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default WarehouseList;
