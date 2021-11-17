const express = require('express');
const fs = require('fs');
const router =  express.Router();
const { v4: uuidv4 } = require('uuid');

let inventoryRead = () => {
    const inventoryParse = JSON.parse(fs.readFileSync('./data/inventories.json', 'utf8', (err, data) => {
        if (err) {
            console.log(err);
        }
        return data;
    }));
    return inventoryParse
}

router.get('/', (req, res) => {
    const inventoryData = inventoryRead();
    res.status(200).json(inventoryData);
})

router.get('/:itemId', (req, res) => {
    const inventoryData = inventoryRead();
    const itemId = req.params.itemId;
    const foundItem = inventoryData.find(item => item.id === itemId);
    if (!foundItem) {
        res.status(404).json({
            error: "Item not found"
        })
    }
    res.status(200).json(foundItem);
})

router.get('/warehouse/:warehouseId', (req, res) => {
    const inventoryData = inventoryRead();
    const warehouseId = req.params.warehouseId;
    const foundWarehouse = inventoryData.filter(item => item.warehouseID === warehouseId);
    if (!foundWarehouse) {
        res.status(400).json({
            error: "Warehouse not found"
        })
    }
    res.status(200).json(foundWarehouse);
})

let warehouseRead = () => {
    const warehouseParse = JSON.parse(fs.readFileSync('./data/warehouses.json', 'utf8', (err, data) => {
        if (err) {
            console.log(err);
        }
        return data;
    }));
    return warehouseParse;
}


let inventoryWrite = (file) => {
    fs.writeFile('./data/inventories.json', JSON.stringify(file), (err) => {
        if (err) {
            console.log(err);
        }
        console.log('file written successfully');
    })
}

router.post('/', (req, res) => {
    const inventoryData = inventoryRead();
    const warehouseData = warehouseRead();
    const foundWarehouse = warehouseData.find(warehouse => req.body.warehouseName === warehouse.name);
    const newInventoryItem = {
        id: uuidv4(),
        warehouseID: foundWarehouse.id,
        warehouseName: req.body.warehouseName,
        itemName: req.body.itemName,
        description: req.body.description,
        category: req.body.category,
        status: req.body.status,
        quantity: req.body.quantity
    }
    inventoryData.push(newInventoryItem);
    inventoryWrite(inventoryData);
    res.status(201).json(newInventoryItem);
})

router.put('/:itemId/update', (req, res) => {
    const inventoryData = inventoryRead();
    const warehouseData = warehouseRead();
    const foundWarehouse = warehouseData.find(warehouse => req.body.warehouseName === warehouse.name);
    const foundItem = inventoryData.find(item => req.params.itemId === item.id);
    if (!foundItem) {
        res.status(404).json({
            error: "Item not found"
        });
    }
    foundItem.warehouseID = foundWarehouse.id;
    foundItem.warehouseName = req.body.warehouseName || foundItem.warehouseName;
    foundItem.itemName = req.body.itemName || foundItem.itemName;
    foundItem.description = req.body.description || foundItem.description;
    foundItem.category = req.body.category || foundWarehouse.category;
    foundItem.status = req.body.status || foundItem.status;
    inventoryWrite(inventoryData);
    res.status(200).json(foundItem);
})

module.exports = router;