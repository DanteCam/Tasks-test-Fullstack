const router = require("./app/controllers/todo_controller");
const express = require("express");
const path = require("path");
const cors = require("cors");

const PORT = process.env.PORT || 8000;
const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(router);

app.get("/", (req, res) => res.send("Test-ToDo Server Online!"));
// app.use(express.static(__dirname));
// app.use(express.static(path.join(__dirname, "build")));
// app.get("/*", function (req, res) {
//   res.sendFile(path.join(__dirname, "build", "index.html"));
// });

app.listen(PORT, () => {
  console.log(`--> Server running on http://localhost:${PORT}/`);
});
