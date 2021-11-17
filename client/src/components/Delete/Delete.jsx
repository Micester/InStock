import React from "react";
import Close from "../../assets/icons/close-24px.svg";
import Btn from "../Button/Btn";
import "./Delete.scss"


function Delete(props) {
  return (
    <div className="delete">
    <div className="delete__content">
      <img className="delete__content--close"src={Close} alt="close" />
      <div className="delete__heading">
        <h1 className="delete__heading--text">
          {"Delete" + props.name + "warehouse ?"}
        </h1>
      </div>
      <div className="delete__para">
        <p className="delete__para--text">
          {"Please confirm that you’d like to delete the" +
            props.name +
            "from the list of warehouses. You won’t be able to undo this action."}
        </p>
      </div>
      <div className="delete__button">
        <Btn className="warehouseListPage__button--one" text="Cancel" />
        <Btn className="warehouseListPage__button--two" text="Delete" />
      </div>
    </div>
    </div>
  );
}

export default Delete;
