const express = require('express');
const fs = require('fs');
const router =  express.Router();

module.exports = router;

let warehouseRead = () => {
    const warehouseParse = JSON.parse(fs.readFileSync('./data/warehouses.json', 'utf8', (err, data) => {
        if (err) {
            console.log(err);
        }
        return data;
    }));
    return warehouseParse
}

router.get('/', (req, res) => {
    const warehouseData = warehouseRead();
    res.status(200).json(warehouseData);
})

router.get('/:warehouseId', (req, res) => {
    const warehouseData = warehouseRead();
    const warehouseId = req.params.warehouseId;
    const foundWarehouse = warehouseData.find(item => item.id === warehouseId);
    if (!foundWarehouse) {
        res.status(404).json({
            error: "Item not found"
        })
    }
    res.status(200).json(foundWarehouse);
})

module.exports = router;