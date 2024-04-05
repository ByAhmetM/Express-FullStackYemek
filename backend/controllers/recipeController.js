const { getData } = require("../utils/getData");
const { setData } = require("../utils/setData");
const crypto = require("crypto");

let data = getData();

exports.getAllRecipes = (req, res) => {
  let recipes = [...data];

  const searchTerm = req.query?.title?.trim()?.toLowerCase();

  const order = req.query.order;

  if (searchTerm) {
    recipes = data.filter((recipe) =>
      recipe.recipeName.toLowerCase().includes(searchTerm)
    );
  }

  if (order) {
    recipes.sort((a, b) =>
      order === "asc"
        ? a.recipeTime - b.recipeTime
        : b.recipeTime - a.recipeTime
    );
  }

  res.status(200).json({
    message: "Tarifler başarıyla alındı",
    results: recipes.length,
    recipes: recipes,
  });
};

exports.getRecipe = (req, res) => {
  res.status(200).json({
    message: "Aradığınız tarif bulundu",
    recipe: req.recipe,
  });
};

exports.createRecipe = (req, res) => {
  //1 ) İsteğin bodysine eriş
  const newRecipe = req.body;

  // 2) verinin bütün değerleri tanımlanmış mı kontrol et
  if (
    !newRecipe.recipeName ||
    !newRecipe.recipeTime ||
    !newRecipe.category ||
    !newRecipe.ingredients ||
    !newRecipe.instructions ||
    !newRecipe.image
  ) {
    return res
      .status(400)
      .json({ message: "Lütfen bütün değerleri tanımlayınız." });
  }

  // 3) veriye id ekle
  newRecipe.id = crypto.randomUUID();

  // 4) yeni tarifi diziye ekle

  data.push(newRecipe);

  // 5) yeni diziyi json dosyasına yaz

  setData(data);

  // 6) cevap gönder

  res.status(201).json({
    message: "Yeni Tarif Başarıyla eklendi.",
    recipe: newRecipe,
  });
};

exports.deleteRecipe = (req, res) => {
  const index = data.findIndex((i) => i.id == req.params.id);

  data.splice(index, 1);

  setData(data);

  res.status(204).json({ message: "Başarıyla silindi" });
};
