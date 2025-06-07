const Recipe = require('../models/Recipe');

exports.getAllRecipes = async (req, res) => {
  const { page = 1, limit = 10 } = req.query;
  const skip = (page - 1) * limit;

  const total = await Recipe.countDocuments();
  const recipes = await Recipe.find()
    .sort({ rating: -1 })
    .skip(parseInt(skip))
    .limit(parseInt(limit));

  res.json({ page: parseInt(page), total, data: recipes });
};

exports.searchRecipes = async (req, res) => {
  const { title, cuisine, total_time, rating, calories, prep_time, cook_time, serves, protein, min_time, max_time } = req.query;
  const query = {};

  if (title) query.title = new RegExp(title, 'i');
  if (cuisine) query.cuisine = new RegExp(cuisine, 'i');
  if (total_time) query.total_time = { $lte: parseInt(total_time) };
  if (rating) query.rating = { $gte: parseFloat(rating) };
  if (calories) query['nutrients.calories'] = new RegExp(calories, 'i');
  if (prep_time) query.prep_time = { $lte: parseInt(prep_time) };
  if (cook_time) query.cook_time = { $lte: parseInt(cook_time) };
  if (serves) query.serves = new RegExp(serves, 'i');
  if (protein) query['nutrients.proteinContent'] = new RegExp(protein, 'i');

  if (min_time || max_time) {
    query.total_time = {};
    if (min_time) query.total_time.$gte = parseInt(min_time);
    if (max_time) query.total_time.$lte = parseInt(max_time);
  }

  const results = await Recipe.find(query);
  res.json({ data: results });
};
