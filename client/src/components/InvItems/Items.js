import React from "react";
import Buttons from '../InvButton/Button'
import Divider from "../InvDivider/Divider";
import '../InvItems/Items.scss';

function Items(props) {
    console.log('The Items Api', props);

    return (
        //Inventory-Main__Contact Information (Address, Name, Phone #)
        <section className="Inventory">

            <section className="Inventory-Mobile">
                <Divider />
                <div className="Inventory-info">
                    {/* Item : 1 Hard Coded from Inventories JSON*/}
                    <div className="Inventory-info-Left">
                        <div className="Inventory-info-Left-Item">
                            <p className="Inventory-info-Left-Item__Title">INVENTORY ITEM</p>
                            <p className="Inventory-info-Left-Item__Data__Link">{props.ItemApi[0].itemName}</p>
                        </div>
                        <div className="Inventory-info-Left-Category">
                            <p className="Inventory-info-Left-Item__Title">Category</p>
                            <p className="Inventory-info-Left-Item__Data">{props.ItemApi[0].category}</p>
                        </div>
                    </div>
                    <div className="Inventory-info-Right">
                        <div className="Inventory-info-Right-Status">
                            <p className="Inventory-info-Right-Status__Title">STATUS</p>
                            <p className="Inventory-info-Right-Status__Data__Stock">{props.ItemApi[0].status}</p>
                        </div>
                        <div className="Inventory-info-Right-Quantity">
                            <p className="Inventory-info-Right-Status__Title">QTY</p>
                            <p className="Inventory-info-Right-Status__Data">{props.ItemApi[0].quantity}</p>
                        </div>
                        <div className="Inventory-info-Right-Warehouse">
                            <p className="Inventory-info-Right-Status__Title">WAREHOUSE</p>
                            <p className="Inventory-info-Right-Status__Data">{props.ItemApi[0].warehouseName}</p>
                        </div>
                    </div>
                </div>

                <div className="Inventory-Buttons">
                    <Buttons />
                </div>

                <Divider />

                <div className="Inventory-info">
                    {/* Item : 2 Hard Coded from Inventories JSON*/}
                    <div className="Inventory-info-Left">
                        <div className="Inventory-info-Left-Item">
                            <p className="Inventory-info-Left-Item__Title">INVENTORY ITEM</p>
                            <p className="Inventory-info-Left-Item__Data__Link">{props.ItemApi[1].itemName}</p>
                        </div>
                        <div className="Inventory-info-Left-Category">
                            <p className="Inventory-info-Left-Item__Title">CATEGORY</p>
                            <p className="Inventory-info-Left-Item__Data">{props.ItemApi[1].category}</p>
                        </div>
                    </div>
                    <div className="Inventory-info-Right">
                        <div className="Inventory-info-Right-Status">
                            <p className="Inventory-info-Right-Status__Title">STATUS</p>
                            <p className="Inventory-info-Right-Status__Data__OutStock">{props.ItemApi[1].status}</p>
                        </div>
                        <div className="Inventory-info-Right-Quantity">
                            <p className="Inventory-info-Right-Status__Title">QTY</p>
                            <p className="Inventory-info-Right-Status__Data">{props.ItemApi[1].quantity}</p>
                        </div>
                        <div className="Inventory-info-Right-Warehouse">
                            <p className="Inventory-info-Right-Status__Title">WAREHOUSE</p>
                            <p className="Inventory-info-Right-Status__Data">{props.ItemApi[1].warehouseName}</p>
                        </div>
                    </div>
                </div>

                <div className="Inventory-Buttons">
                    <Buttons />
                </div>

                <Divider />

                <div className="Inventory-info">
                    {/* Item : 3 Hard Coded from Inventories JSON*/}
                    <div className="Inventory-info-Left">
                        <div className="Inventory-info-Left-Item">
                            <p className="Inventory-info-Left-Item__Title">INVENTORY ITEM</p>
                            <p className="Inventory-info-Left-Item__Data__Link">{props.ItemApi[2].itemName}</p>
                        </div>
                        <div className="Inventory-info-Left-Category">
                            <p className="Inventory-info-Left-Item__Title">CATEGORY</p>
                            <p className="Inventory-info-Left-Item__Data">{props.ItemApi[2].category}</p>
                        </div>
                    </div>
                    <div className="Inventory-info-Right">
                        <div className="Inventory-info-Right-Status">
                            <p className="Inventory-info-Right-Status__Title">STATUS</p>
                            <p className="Inventory-info-Right-Status__Data__OutStock">{props.ItemApi[2].status}</p>
                        </div>
                        <div className="Inventory-info-Right-Quantity">
                            <p className="Inventory-info-Right-Status__Title">QTY</p>
                            <p className="Inventory-info-Right-Status__Data">{props.ItemApi[2].quantity}</p>
                        </div>
                        <div className="Inventory-info-Right-Warehouse">
                            <p className="Inventory-info-Right-Status__Title">WAREHOUSE</p>
                            <p className="Inventory-info-Right-Status__Data">{props.ItemApi[2].warehouseName}</p>
                        </div>
                    </div>
                </div>

                <div className="Inventory-Buttons">
                    <Buttons />
                </div>
                <Divider />
                <div className="Inventory-info">
                    {/* Item : 4 Hard Coded from Inventories JSON*/}
                    <div className="Inventory-info-Left">
                        <div className="Inventory-info-Left-Item">
                            <p className="Inventory-info-Left-Item__Title">INVENTORY ITEM</p>
                            <p className="Inventory-info-Left-Item__Data__Link">{props.ItemApi[3].itemName}</p>
                        </div>
                        <div className="Inventory-info-Left-Category">
                            <p className="Inventory-info-Left-Item__Title">CATEGORY</p>
                            <p className="Inventory-info-Left-Item__Data">{props.ItemApi[3].category}</p>
                        </div>
                    </div>
                    <div className="Inventory-info-Right">
                        <div className="Inventory-info-Right-Status">
                            <p className="Inventory-info-Right-Status__Title">STATUS</p>
                            <p className="Inventory-info-Right-Status__Data__Stock">{props.ItemApi[3].status}</p>
                        </div>
                        <div className="Inventory-info-Right-Quantity">
                            <p className="Inventory-info-Right-Status__Title">QTY</p>
                            <p className="Inventory-info-Right-Status__Data">{props.ItemApi[3].quantity}</p>
                        </div>
                        <div className="Inventory-info-Right-Warehouse">
                            <p className="Inventory-info-Right-Status__Title">WAREHOUSE</p>
                            <p className="Inventory-info-Right-Status__Data">{props.ItemApi[3].warehouseName}</p>
                        </div>
                    </div>
                </div>

                <div className="Inventory-Buttons">
                    <Buttons />
                </div>
                <Divider />
                <div className="Inventory-info">
                    {/* Item : 5 Hard Coded from Inventories JSON*/}
                    <div className="Inventory-info-Left">
                        <div className="Inventory-info-Left-Item">
                            <p className="Inventory-info-Left-Item__Title">INVENTORY ITEM</p>
                            <p className="Inventory-info-Left-Item__Data__Link">{props.ItemApi[4].itemName}</p>
                        </div>
                        <div className="Inventory-info-Left-Category">
                            <p className="Inventory-info-Left-Item__Title">CATEGORY</p>
                            <p className="Inventory-info-Left-Item__Data">{props.ItemApi[4].category}</p>
                        </div>
                    </div>
                    <div className="Inventory-info-Right">
                        <div className="Inventory-info-Right-Status">
                            <p className="Inventory-info-Right-Status__Title">STATUS</p>
                            <p className="Inventory-info-Right-Status__Data__Stock">{props.ItemApi[4].status}</p>
                        </div>
                        <div className="Inventory-info-Right-Quantity">
                            <p className="Inventory-info-Right-Status__Title">QTY</p>
                            <p className="Inventory-info-Right-Status__Data">{props.ItemApi[4].quantity}</p>
                        </div>
                        <div className="Inventory-info-Right-Warehouse">
                            <p className="Inventory-info-Right-Status__Title">WAREHOUSE</p>
                            <p className="Inventory-info-Right-Status__Data">{props.ItemApi[4].warehouseName}</p>
                        </div>
                    </div>
                </div>

                <div className="Inventory-Buttons">
                    <Buttons />
                </div>
                <Divider />
                <div className="Inventory-info">
                    {/* Item : 6 Hard Coded from Inventories JSON*/}
                    <div className="Inventory-info-Left">
                        <div className="Inventory-info-Left-Item">
                            <p className="Inventory-info-Left-Item__Title">INVENTORY ITEM</p>
                            <p className="Inventory-info-Left-Item__Data__Link">{props.ItemApi[5].itemName}</p>
                        </div>
                        <div className="Inventory-info-Left-Category">
                            <p className="Inventory-info-Left-Item__Title">CATEGORY</p>
                            <p className="Inventory-info-Left-Item__Data">{props.ItemApi[5].category}</p>
                        </div>
                    </div>
                    <div className="Inventory-info-Right">
                        <div className="Inventory-info-Right-Status">
                            <p className="Inventory-info-Right-Status__Title">STATUS</p>
                            <p className="Inventory-info-Right-Status__Data__Stock">{props.ItemApi[5].status}</p>
                        </div>
                        <div className="Inventory-info-Right-Quantity">
                            <p className="Inventory-info-Right-Status__Title">QTY</p>
                            <p className="Inventory-info-Right-Status__Data">{props.ItemApi[5].quantity}</p>
                        </div>
                        <div className="Inventory-info-Right-Warehouse">
                            <p className="Inventory-info-Right-Status__Title">WAREHOUSE</p>
                            <p className="Inventory-info-Right-Status__Data">{props.ItemApi[5].warehouseName}</p>
                        </div>
                    </div>
                </div>
                <div className="Inventory-Buttons">
                    <Buttons />
                </div>
                <Divider />

                <div className="Inventory-info">
                    {/* Item : 7 Hard Coded from Inventories JSON*/}
                    <div className="Inventory-info-Left">
                        <div className="Inventory-info-Left-Item">
                            <p className="Inventory-info-Left-Item__Title">INVENTORY ITEM</p>
                            <p className="Inventory-info-Left-Item__Data__Link">{props.ItemApi[6].itemName}</p>
                        </div>
                        <div className="Inventory-info-Left-Category">
                            <p className="Inventory-info-Left-Item__Title">CATEGORY</p>
                            <p className="Inventory-info-Left-Item__Data">{props.ItemApi[6].category}</p>
                        </div>
                    </div>
                    <div className="Inventory-info-Right">
                        <div className="Inventory-info-Right-Status">
                            <p className="Inventory-info-Right-Status__Title">STATUS</p>
                            <p className="Inventory-info-Right-Status__Data__Stock">{props.ItemApi[6].status}</p>
                        </div>
                        <div className="Inventory-info-Right-Quantity">
                            <p className="Inventory-info-Right-Status__Title">QTY</p>
                            <p className="Inventory-info-Right-Status__Data">{props.ItemApi[6].quantity}</p>
                        </div>
                        <div className="Inventory-info-Right-Warehouse">
                            <p className="Inventory-info-Right-Status__Title">WAREHOUSE</p>
                            <p className="Inventory-info-Right-Status__Data">{props.ItemApi[6].warehouseName}</p>
                        </div>
                    </div>
                </div>
                <div className="Inventory-Buttons">
                    <Buttons />
                </div>
                <Divider />

                <div className="Inventory-info">
                    {/* Item : 8 Hard Coded from Inventories JSON*/}
                    <div className="Inventory-info-Left">
                        <div className="Inventory-info-Left-Item">
                            <p className="Inventory-info-Left-Item__Title">INVENTORY ITEM</p>
                            <p className="Inventory-info-Left-Item__Data__Link">{props.ItemApi[7].itemName}</p>
                        </div>
                        <div className="Inventory-info-Left-Category">
                            <p className="Inventory-info-Left-Item__Title">CATEGORY</p>
                            <p className="Inventory-info-Left-Item__Data">{props.ItemApi[7].category}</p>
                        </div>
                    </div>
                    <div className="Inventory-info-Right">
                        <div className="Inventory-info-Right-Status">
                            <p className="Inventory-info-Right-Status__Title">STATUS</p>
                            <p className="Inventory-info-Right-Status__Data__OutStock">{props.ItemApi[7].status}</p>
                        </div>
                        <div className="Inventory-info-Right-Quantity">
                            <p className="Inventory-info-Right-Status__Title">QTY</p>
                            <p className="Inventory-info-Right-Status__Data">{props.ItemApi[7].quantity}</p>
                        </div>
                        <div className="Inventory-info-Right-Warehouse">
                            <p className="Inventory-info-Right-Status__Title">WAREHOUSE</p>
                            <p className="Inventory-info-Right-Status__Data">{props.ItemApi[7].warehouseName}</p>
                        </div>
                    </div>
                </div>

                <div className="Inventory-Buttons">
                    <Buttons />
                </div>
            </section>


























            <section className="Inventory-Desktop">
                <div className="Inventory-Desktop-rows">

                    {/* Very Top Row */}
                    <div className="Inventory-Desktop-rows-info-topBar">
                        <div className="Inventory-Desktop-rows-info-topBar__Left">
                            <p className="Inventory-Desktop-rows-info-topBar__Item">INVENTORY ITEM</p>
                            <p className="Inventory-Desktop-rows-info-topBar__Cate">CATEGORY</p>
                            <p className="Inventory-Desktop-rows-info-topBar__Status">STATUS</p>
                        </div>

                        <div className="Inventory-Desktop-rows-info-topBar__Right">
                            <p className="Inventory-Desktop-rows-info-topBar__QTY">QTY</p>
                            <p className="Inventory-Desktop-rows-info-topBar__Warehousu">WAREHOUSE</p>
                            <p className="Inventory-Desktop-rows-info-topBar__Label-buttons">ACTIONS</p>
                        </div>
                    </div>


                    {/* First Row */}
                    <div className="Inventory-info-InventoryBar">
                        <div className="Inventory-info-InventoryBar__Left">
                            <p className="Inventory-info-Left-Item__Data__Link">{props.ItemApi[0].itemName}</p>
                            <p className="Inventory-info-Left-Item__Data">{props.ItemApi[0].category}</p>
                            <p className="Inventory-info-Right-Status__Data__Stock">{props.ItemApi[0].status}</p>
                        </div>

                        <div className="Inventory-info-InventoryBar__Right">
                            <p className="Inventory-info-Right-Status__Data__Quant">{props.ItemApi[0].quantity}</p>
                            <p className="Inventory-info-Right-Status__Data__Warehouse">{props.ItemApi[0].warehouseName}</p>
                            <div className="Inventory-info-Right-Buttons">
                                <Buttons />
                            </div>
                        </div>
                    </div>
                    <Divider />

                    <div className="Inventory-info-InventoryBar">
                        <div className="Inventory-info-InventoryBar__Left">
                            <p className="Inventory-info-Left-Item__Data__Link">{props.ItemApi[1].itemName}</p>
                            <p className="Inventory-info-Left-Item__Data">{props.ItemApi[1].category}</p>
                            <p className="Inventory-info-Left-Status__Data__OutStock">{props.ItemApi[1].status}</p>
                        </div>

                        <div className="Inventory-info-InventoryBar__Right">
                            <p className="Inventory-info-Right-Status__Data__Quant">{props.ItemApi[1].quantity}</p>
                            <p className="Inventory-info-Right-Status__Data__Warehouse">{props.ItemApi[1].warehouseName}</p>
                            <div className="Inventory-info-Right-Buttons">
                                <Buttons />
                            </div>
                        </div>
                    </div>
                    <Divider />

                    <div className="Inventory-info-InventoryBar">
                        <div className="Inventory-info-InventoryBar__Left">
                            <p className="Inventory-info-Left-Item__Data__Link">{props.ItemApi[2].itemName}</p>
                            <p className="Inventory-info-Left-Item__Data">{props.ItemApi[2].category}</p>
                            <p className="Inventory-info-Left-Status__Data__OutStock">{props.ItemApi[2].status}</p>
                        </div>

                        <div className="Inventory-info-InventoryBar__Right">
                            <p className="Inventory-info-Right-Status__Data__Quant">{props.ItemApi[2].quantity}</p>
                            <p className="Inventory-info-Right-Status__Data__Warehouse">{props.ItemApi[2].warehouseName}</p>
                            <div className="Inventory-info-Right-Buttons">
                                <Buttons />
                            </div>
                        </div>
                        
                    </div>
                    <Divider />

                    <div className="Inventory-info-InventoryBar">
                        <div className="Inventory-info-InventoryBar__Left">
                            <p className="Inventory-info-Left-Item__Data__Link">{props.ItemApi[3].itemName}</p>
                            <p className="Inventory-info-Left-Item__Data">{props.ItemApi[3].category}</p>
                            <p className="Inventory-info-Right-Status__Data__Stock">{props.ItemApi[3].status}</p>
                        </div>

                        <div className="Inventory-info-InventoryBar__Right">
                            <p className="Inventory-info-Right-Status__Data__Quant">{props.ItemApi[3].quantity}</p>
                            <p className="Inventory-info-Right-Status__Data__Warehouse">{props.ItemApi[3].warehouseName}</p>
                            <div className="Inventory-info-Right-Buttons">
                                <Buttons />
                            </div>
                        </div>
                    </div>
                    <Divider />

                    <div className="Inventory-info-InventoryBar">
                        <div className="Inventory-info-InventoryBar__Left">
                            <p className="Inventory-info-Left-Item__Data__Link">{props.ItemApi[4].itemName}</p>
                            <p className="Inventory-info-Left-Item__Data">{props.ItemApi[4].category}</p>
                            <p className="Inventory-info-Right-Status__Data__Stock">{props.ItemApi[4].status}</p>
                        </div>

                        <div className="Inventory-info-InventoryBar__Right">
                            <p className="Inventory-info-Right-Status__Data__Quant">{props.ItemApi[4].quantity}</p>
                            <p className="Inventory-info-Right-Status__Data__Warehouse">{props.ItemApi[4].warehouseName}</p>
                            <div className="Inventory-info-Right-Buttons">
                                <Buttons />
                            </div>
                        </div>
                    </div>
                    <Divider />

                    <div className="Inventory-info-InventoryBar">
                        <div className="Inventory-info-InventoryBar__Left">
                            <p className="Inventory-info-Left-Item__Data__Link">{props.ItemApi[5].itemName}</p>
                            <p className="Inventory-info-Left-Item__Data">{props.ItemApi[5].category}</p>
                            <p className="Inventory-info-Right-Status__Data__Stock">{props.ItemApi[5].status}</p>
                        </div>

                        <div className="Inventory-info-InventoryBar__Right">
                            <p className="Inventory-info-Right-Status__Data__Quant">{props.ItemApi[5].quantity}</p>
                            <p className="Inventory-info-Right-Status__Data__Warehouse">{props.ItemApi[5].warehouseName}</p>
                            <div className="Inventory-info-Right-Buttons">
                                <Buttons />
                            </div>
                        </div>
                    </div>
                    <Divider />

                    <div className="Inventory-info-InventoryBar">
                        <div className="Inventory-info-InventoryBar__Left">
                            <p className="Inventory-info-Left-Item__Data__Link">{props.ItemApi[6].itemName}</p>
                            <p className="Inventory-info-Left-Item__Data">{props.ItemApi[6].category}</p>
                            <p className="Inventory-info-Right-Status__Data__Stock">{props.ItemApi[6].status}</p>
                        </div>

                        <div className="Inventory-info-InventoryBar__Right">
                            <p className="Inventory-info-Right-Status__Data__Quant">{props.ItemApi[6].quantity}</p>
                            <p className="Inventory-info-Right-Status__Data__Warehouse">{props.ItemApi[6].warehouseName}</p>
                            <div className="Inventory-info-Right-Buttons">
                                <Buttons />
                            </div>
                        </div>
                    </div>
                    <Divider />

                    {/* Last Row */}
                    <div className="Inventory-info-InventoryBar">
                        <div className="Inventory-info-InventoryBar__Left">
                            <p className="Inventory-info-Left-Item__Data__Link">{props.ItemApi[7].itemName}</p>
                            <p className="Inventory-info-Left-Item__Data">{props.ItemApi[7].category}</p>
                            <p className="Inventory-info-Left-Status__Data__OutStock">{props.ItemApi[7].status}</p>
                        </div>

                        <div className="Inventory-info-InventoryBar__Right">
                            <p className="Inventory-info-Right-Status__Data__Quant">{props.ItemApi[7].quantity}</p>
                            <p className="Inventory-info-Right-Status__Data__Warehouse">{props.ItemApi[7].warehouseName}</p>
                            <div className="Inventory-info-Right-Buttons">
                                <Buttons />
                            </div>
                        </div>
                    </div>

                    <Divider />
                </div>
            </section>
        </section>
    )
}
export default Items;
