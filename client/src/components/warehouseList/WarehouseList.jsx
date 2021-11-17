import "./WarehouseList.scss";
import Btn from "../Button/Btn";
import Chevron from "../../assets/icons/chevron_right-24px.svg";
import Delete from "../../assets/icons/delete_outline-24px.svg";
import Edit from "../../assets/icons/edit-24px.svg";
import SortDefault from "../../assets/icons/sort-24px.svg";



function WarehouseList(props) {
  console.log("warehouseList props", props);
  return (
    <div className="warehouseListPage">
          <div className="warehouseListPage__header">
        <div className="warehouseListPage__heading">
          <h1 className="warehouseListPage__heading--text">Warehouses</h1>
        </div>
        <div className="warehouseListPage__inputbutton">
          <input
            className="warehouseListPage__input"
            type="text"
            id="search"
            name="search"
            placeholder="Search"
          />
          <Btn
            className="warehouseListPage__button"
            text="+ Add New Warehouse"
          />
        </div>
      </div>
      <div className="warehouseListPage__table-title" >
      <div className="warehouseListPage__table-title--sortdefault">
        <p className="warehouseListPage__table-title--text">WAREHOUSE</p>
        <img
                  src={SortDefault}
                  alt="SortDefault"
                />
                </div>

        <div className="warehouseListPage__table-title--address-text">
        <div className="warehouseListPage__table-title--sortdefault-add">
        <p className="warehouseListPage__table-title--text">ADDRESS</p>
        <img
                  src={SortDefault}
                  alt="SortDefault"
                />
                </div>
                <div className="warehouseListPage__table-title--sortdefault-add">
        <p className="warehouseListPage__table-title--text">CONTACT NAME</p>
        <img
                  src={SortDefault}
                  alt="SortDefault"
                />
                </div>
                <div className="warehouseListPage__table-title--sortdefault-add">
        <p className="warehouseListPage__table-title--text">CONTACT INFORMATION</p>
        <img
                  src={SortDefault}
                  alt="SortDefault"
                />
        </div>
        </div>
        <div className="warehouseListPage__table-title--sortdefault">
        <p className="warehouseListPage__table-title--text">ACTIONS</p>
        <img
                  src={SortDefault}
                  alt="SortDefault"
                />
      </div>
      </div>
      <ul className="warehouseList">
        {props.warehouses.map((warehouse) => {
          return (
            <li className="warehouseList__list"key={warehouse.id}>
              <div className="warehouseList__line1">
                <div className="warehouseList__name">
                  <p className="warehouseList__name--label">WAREHOUSE</p>
                  <div className="warehouseList__name--ic">
                    <p className="warehouseList__name--input">
                      {warehouse.name}
                    </p>
                    <img
                      className="warehouseList__name--chevron"
                      src={Chevron}
                      alt="Chevron"
                    />
                  </div>
                </div>
                <div className="warehouseList__contactName">
                  <p className="warehouseList__contactName--label">
                    CONTACT NAME
                  </p>
                  <p className="warehouseList__contactName--input">
                    {warehouse.contact.name}
                  </p>
                </div>
              </div>
              <div className="warehouseList__line2">
                <div className="warehouseList__Address">
                  <p className="warehouseList__Address--label">ADDRESS</p>
                  <div className="warehouseList__Address--complete">
                    <p className="warehouseList__Address--input">
                      {warehouse.address + ", "}
                    </p>
                    <p className="warehouseList__Address--input">
                      {warehouse.city + ", "}
                    </p>
                    <p className="warehouseList__Address--input">
                      {warehouse.country}
                    </p>
                  </div>
                </div>
                <p className="warehouseList__contactName--tablet">
                    {warehouse.contact.name}
                  </p>
                <div className="warehouseList__ContactInformation">
                  <p className="warehouseList__ContactInformation--label">
                    CONTACT INFORMATION
                  </p>

                  <p className="warehouseList__ContactInformation--input">
                    {warehouse.contact.phone}
                  </p>
                  <p className="warehouseList__ContactInformation--input">
                    {warehouse.contact.email}
                  </p>
                </div>
              </div>
              <div className="warehouseList__line3">
                <img
                  className="warehouseList__image--delete"
                  src={Delete}
                  alt="Delete"
                />
                <img
                  className="warehouseList__image--edit"
                  src={Edit}
                  alt="Edit"
                />
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default WarehouseList;
