const express = require('express');
const cors = require('cors'); 
const fs = require('fs');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());

app.get('/api/product-list', (req, res) => {
  console.log("inside server");
  const filePath = path.join(__dirname, 'products.json');
  const rawData = fs.readFileSync(filePath);
  const productsData = JSON.parse(rawData);
  res.json(productsData);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
