const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bookRoutes = require("./Routes/bookRoutes");

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/books", bookRoutes);

mongoose.connect("mongodb://localhost:27017/BookstoreDB", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Connected to Database"))
    .catch(err => console.log("Database Connection Error:", err));

const PORT = 3241;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
