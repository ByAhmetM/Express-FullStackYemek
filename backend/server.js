const express = require("express");
const cors = require("cors");
const { getAllRecipes, getRecipe } = require("./controllers/recipeController");
const app = express();
const PORT = 4000;

app.use(cors());

app.route("/api/recipes").get(getAllRecipes);

app.route("/api/recipes/:id").get(getRecipe);

app.listen(PORT, () => {
  console.log(`Server ${PORT} portunu dinlemeye başladı`);
});
