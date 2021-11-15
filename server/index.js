require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const { PORT } = process.env;
const warehouseRoutes = require('./routes/warehouses');
const inventoryRoutes = require('./routes/inventories');

app.use(cors());
app.use(express.json());

app.use('/warehouses', warehouseRoutes);
app.use('/inventory', inventoryRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})
