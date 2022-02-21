import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasClicked = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('Chicken Parmesan', 'breaded chicken with parm on top',
      '/assets/RecipeImages/chicken_parm.jpg'),
    new Recipe('Chicken and Kale Soup', 'hearty, low-cal, protein-packed, delicious',
      '/assets/RecipeImages/Chicken_and_Kale_Soup.png')
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onRecipeClicked(recipe: Recipe) {
    this.recipeWasClicked.emit(recipe);
  }

}
