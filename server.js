const express = require("express");
const connectDb = require("./config/dbConnection");
const errorHandler = require("./middleware/errorHandler");
const dotenv = require("dotenv").config();

connectDb();
const app = express();

const port = process.env.PORT || 5000;

app.use(express.json());


// This line tells Express to use the middleware defined in the contactRoutes.js file for any
// HTTP requests that match the path /api/contacts. In other words, when a client sends an HTTP 
// request to your server with a URL that starts with /api/contacts, Express will route that request 
// to the functions defined in contactRoutes.js.

// require("./routes/contactRoutes") loads the routing logic defined in the contactRoutes.js file and 
// associates it with the /api/contacts path
app.use("/api/contacts", require("./routes/contactRoutes"));

app.use("/api/users", require("./routes/userRoutes"));
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});



