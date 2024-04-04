const { getData } = require("../utils/getData");

const data = getData();

exports.getAllRecipes = (req, res) => {
  const searchTerm = req.query?.title?.trim()?.toLowerCase();

  const filtred = data.filter((recipe) =>
    recipe.recipeName.toLowerCase().includes(searchTerm)
  );

  if (searchTerm) {
    res.status(200).json({
      message: `Tarifler ${searchTerm} kelimesine göre filtrelendi.`,
      results: filtred.length,
      recipes: filtred,
    });
  } else {
    res.status(200).json({
      message: "Tarifler başarıyla alındı",
      results: data.length,
      recipes: data,
    });
  }
};

exports.getRecipe = (req, res) => {
  res.end("Bir tur alındı");
};
