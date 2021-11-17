const express = require("express");
const fs = require("fs");
const router = express.Router();
const { v4: uuidv4 } = require("uuid");
const path = require("path");

const warehouseFile = path.join(__dirname, "../data/warehouses.json");

let warehouseRead = () => {
  const warehouseParse = JSON.parse(
    fs.readFileSync("./data/warehouses.json", "utf8", (err, data) => {
      if (err) {
        console.log(err);
      }
      return data;
    })
  );
  return warehouseParse;
};

function addWarehouse(body) {
  const warehouseArr = warehouseRead();
  const warehouse = new Warehouse(
    body.name,
    body.address,
    body.city,
    body.country,
    body.contact
  );
  warehouseArr.push(warehouse);

  fs.writeFileSync(warehouseFile, JSON.stringify(warehouseArr));

  return warehouse;
}

function Warehouse(name, address, city, country, contact) {
  this.id = uuidv4();
  this.name = name;
  this.address = address;
  this.city = city;
  this.country = country;
  this.contact = contact;
}

router.get("/", (req, res) => {
  const warehouseData = warehouseRead();
  res.status(200).json(warehouseData);
});

router.get("/:warehouseId", (req, res) => {
  const warehouseData = warehouseRead();
  const warehouseId = req.params.warehouseId;
  const foundWarehouse = warehouseData.find((item) => item.id === warehouseId);
  if (!foundWarehouse) {
    res.status(404).json({
      error: "Warehouse not found",
    });
  }
  res.status(200).json(foundWarehouse);
});

router.post("/create", (req, res) => {
  if (
    !req.body.name ||
    !req.body.address ||
    !req.body.city ||
    !req.body.country ||
    !req.body.contact
  ) {
    res.status(400).json({
      error: "POST body must contain all required properties",
      requiredProperties: ["name", "address", "city", "country", "contact"],
    });
  }
  res.status(200).json(addWarehouse(req.body));
});

let warehouseUpdate = (data) => {
    fs.writeFile('./data/warehouses.json', JSON.stringify(data), (error) => {
        if (error) {
            console.log(error);
        }
        console.log('Warehouse has been updated');
    })
}

router.patch('/:warehouseId/update', (req, res) => {
    const warehouseData = warehouseRead();
    const foundWarehouse = warehouseData.find(warehouse => req.params.warehouseId === warehouse.id);
    if (!foundWarehouse) {
        res.status(404).json({
            error: "Warehouse not found"
        });
    }
    foundWarehouse.name = req.body.name || foundWarehouse.name;
    foundWarehouse.address = req.body.address || foundWarehouse.address;
    foundWarehouse.city = req.body.city || foundWarehouse.city;
    foundWarehouse.country = req.body.country || foundWarehouse.country;
    foundWarehouse.contact = req.body.contact || foundWarehouse.name;
    warehouseUpdate(warehouseData);
    res.status(200).json(foundWarehouse);
})

module.exports = router;
