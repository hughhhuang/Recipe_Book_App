import {Recipe} from './recipe.model';
import {EventEmitter, Injectable} from '@angular/core';
import {Ingredient} from '../shared/ingredient.model';
import {ShoppingListService} from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Chicken Parmesan',
      'breaded chicken with parm on top',
      '/assets/RecipeImages/chicken_parm.jpg',
      [
        new Ingredient('Chicken Breast', '4'),
        new Ingredient('Breadcrumbs', '3/4 cup'),
        new Ingredient('Butter or Olive Oil', '2 Tbsp'),
        new Ingredient('Mozzarella', '3/4 cup'),
        new Ingredient('Parmesan', '1/4 cup'),
        new Ingredient('Marinara', '1 cup')
      ]),
    new Recipe(
      'Chicken and Kale Soup',
      'hearty, low-cal, protein-packed, delicious',
      '/assets/RecipeImages/Chicken_and_Kale_Soup.png',
      [
        new Ingredient('Chicken Breast', '4'),
        new Ingredient('Kale', '1 lb'),
        new Ingredient('Cannellini beans', '1 15-oz can'),
        new Ingredient('Chicken Broth', '6 cups'),
        new Ingredient('Carrots', '2'),
        new Ingredient('White Onion', '1'),
        new Ingredient('Garlic', '3 cloves')
      ])
  ];

  constructor(private shoppingListService: ShoppingListService) {
  }

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToSL(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}
