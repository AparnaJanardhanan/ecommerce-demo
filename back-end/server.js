const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');
const jwt = require('jsonwebtoken'); // Import the jsonwebtoken library

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

const users = [
  {
    username: 'user1',
    password: 'password1',
    id: 1,
  },
  {
    username: 'user2',
    password: 'password2',
    id: 2,
  },
];

const secretKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';

app.get('/api/product-list', (req, res) => {
  const filePath = path.join(__dirname, 'products.json');
  const rawData = fs.readFileSync(filePath);
  const productsData = JSON.parse(rawData);
  res.json(productsData);
});

app.post('/api/login', (req, res) => {
  const { username, password } = req.body;
  const user = users.find((user) => user.username === username && user.password === password);

  if (user) {
    const token = jwt.sign({ userId: user.id }, secretKey, { expiresIn: '1h' });

    res.json({ message: 'Login successful', user, token });
  } else {
    res.status(401).json({ message: 'Authentication failed' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
