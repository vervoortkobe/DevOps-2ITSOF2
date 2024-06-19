const express = require('express');

const app = express();

const port = 3000;

const firstName = "Kobe";
const lastName = "Vervoort";
const studentNbr = "s141662";

app.get('/', (req, res) => {
  res.json({
    message: `Hello world! From ${firstName} ${lastName}`, 
    firstName, 
    lastName,
    studentNbr
  });
});

app.listen(port, () => {
  console.log(`Hello world app listening on port ${port}`);
});
