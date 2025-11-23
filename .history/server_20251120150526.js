const express = require("express");
const app = express();
const port = 5500;

app.use(express.static(__dirname));

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});


// Serve index.html for the root route
// This is optional since express.static will handle it