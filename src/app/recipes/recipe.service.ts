import { Injectable } from '@angular/core';
import { Subject } from "rxjs/Subject";

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';



@Injectable()

export class RecipeService {
    recipesChanged = new Subject<Recipe[]>();

    private recipes: Recipe[] = [
    new Recipe ('Test', 'Zobaczmy czy działa', 'http://www.zajadam.pl/wp-content/uploads/hamburger-przepis-469x313.jpg', [
        new Ingredient('Meat', 1),
        new Ingredient('French Fries', 20)
    ]),
    new Recipe ('Test', 'Zobaczmy czy działa', 'http://www.zajadam.pl/wp-content/uploads/hamburger-przepis-469x313.jpg', [
        new Ingredient('Buns', 2),
        new Ingredient('Meat', 1)
    ])
  ];

  constructor(private slService: ShoppingListService) {

  }

  getRecipes() {
      return this.recipes.slice();
  }

  getRecipe(index: number) {
      return this.recipes[index];
  }

  addIngredientToShoppingList(ingredient: Ingredient[]) {
    this.slService.addIngredients(ingredient);
  }

  addRecipe(recipe: Recipe) {
      this.recipes.push(recipe);
      this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
      this.recipes[index] = newRecipe;
      this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
      this.recipes.splice(index, 1);
      this.recipesChanged.next(this.recipes.slice());
  }
}