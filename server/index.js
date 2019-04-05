const express = require('express');
const getProducts = require('./getProducts')
const getProductById = require('./getProduct')

const app = express();

const port = 5000

app.get('/api/products', getProducts.getProducts)
app.get('/api/product/:id', getProductById.getProductById)

app.listen(port, () => console.log(`It's over Anakin. I have the ${port} port`))