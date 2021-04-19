import express from 'express';
import products from './data/product.js';

import dotenv from 'dotenv';

dotenv.config();


const app = express();

app.get("/", function (req, res) {

    res.send("API is running....")
})



app.get("/api/products", (req, res) => {
    res.json(products);
})

app.get("/api/products/:id", (req, res) => {

    // res.send("ok!");
    const product = products.find((p) => p._id === req.params.id);
    res.json(product);
})

const PORT = process.env.PORT || 5000;

app.listen(PORT, function () {

    console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
})