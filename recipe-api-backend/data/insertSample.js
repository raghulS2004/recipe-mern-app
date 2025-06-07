require('dotenv').config();
const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');
const Recipe = require('../models/Recipe');

const isValidNumber = val => !isNaN(val) && val !== null && val !== undefined;

async function insertData() {
  await mongoose.connect(process.env.MONGO_URI);
  const rawData = fs.readFileSync(path.join(__dirname, '../US_recipes_null.json'));
  const recipes = JSON.parse(rawData);

  const parsedRecipes = Object.values(recipes).map(recipe => ({
    cuisine: recipe.cuisine || '',
    title: recipe.title || '',
    rating: isValidNumber(recipe.rating) ? recipe.rating : null,
    prep_time: isValidNumber(recipe.prep_time) ? recipe.prep_time : null,
    cook_time: isValidNumber(recipe.cook_time) ? recipe.cook_time : null,
    total_time: isValidNumber(recipe.total_time) ? recipe.total_time : null,
    description: recipe.description || '',
    nutrients: recipe.nutrients || {},
    serves: recipe.serves || ''
  }));

  await Recipe.insertMany(parsedRecipes);
  console.log('Data inserted successfully');
  mongoose.disconnect();
}

insertData();
