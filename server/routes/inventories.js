const express = require('express');
const fs = require('fs');
const router =  express.Router();

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

module.exports = router;