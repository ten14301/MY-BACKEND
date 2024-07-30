const express = require('express');
const app = express();
const port = 5827;

app.use(express.json());

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});