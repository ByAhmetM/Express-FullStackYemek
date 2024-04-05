const express = require("express");
const cors = require("cors");
const app = express();
const recipeRoutes = require("./routes/recipeRoutes");
const PORT = 4000;

app.use(express.json());

app.use(cors());

app.use(recipeRoutes);

app.listen(PORT, () => {
  console.log(`Server ${PORT} portunu dinlemeye başladı`);
});
