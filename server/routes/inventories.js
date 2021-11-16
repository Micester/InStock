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

module.exports = router;