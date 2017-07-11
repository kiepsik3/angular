import { EventEmitter, Injectable } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';


@Injectable()

export class RecipeService {
recipeSelected = new EventEmitter<Recipe>();

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

  addIngredientToShoppingList(ingredient: Ingredient[]) {
    this.slService.addIngredients(ingredient);
  }
}