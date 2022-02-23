import {Recipe} from './recipe.model';

export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe('Chicken Parmesan', 'breaded chicken with parm on top',
      '/assets/RecipeImages/chicken_parm.jpg'),
    new Recipe('Chicken and Kale Soup', 'hearty, low-cal, protein-packed, delicious',
      '/assets/RecipeImages/Chicken_and_Kale_Soup.png')
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
