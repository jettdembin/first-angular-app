import { EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';

export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'A Test Recipe',
      'This is a test',
      'https://www.foodista.com/sites/default/files/IMG_1363a.jpg'
    ),
    new Recipe(
      'Another Test Recipe',
      'This is a test',
      'https://www.foodista.com/sites/default/files/IMG_1363a.jpg'
    ),
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
