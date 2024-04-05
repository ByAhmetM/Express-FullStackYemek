const express = require("express");
const {
  getRecipe,
  getAllRecipes,
  createRecipe,
  deleteRecipe,
} = require("../controllers/recipeController");
const { controlId } = require("../middleware");

const router = express.Router();

router.route("/api/recipes").get(getAllRecipes).post(createRecipe);

router
  .route("/api/recipes/:id")
  .get(controlId, getRecipe) //
  .delete(controlId, deleteRecipe); //

module.exports = router;
