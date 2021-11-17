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

module.exports = router;