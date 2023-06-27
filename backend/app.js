const express = require("express");
const logger = require("morgan");
const productsRouter = require("./routes/productRouter");

const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(express.json());

app.get("/", function (req, res) {
  res.send("DataBase of FenyaDB");
});

app.use("/api/products", productsRouter);
app.use(express.static("public"));

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

module.exports = app;

// const express = require("express");
// const logger = require("morgan");
// const productsRouter = require("./routes/productRouter");
// const { errorHandler } = require("./helpers/index");
// const contactsRouter = require("./routes/api/contacts");
// const usersRouter = require("./routes/api/users");


// const app = express();

// const formatsLogger = app.get("env") === "development" ? "dev" : "short";

// app.use(logger(formatsLogger));
// app.use(express.json());

// app.get("/", function (req, res) {
//   res.send("DataBase of FenyaDB");
// });

// app.use("/api/users", usersRouter);
// app.use("/api/contacts", contactsRouter);
// app.use("/api/products", productsRouter);
// app.use(express.static("public"));

// app.use((req, res) => {
//   res.status(404).json({ message: "Not found" });
// });

// app.use(errorHandler);

// module.exports = app;