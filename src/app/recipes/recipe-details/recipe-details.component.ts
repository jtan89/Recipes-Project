import { Component, OnInit } from '@angular/core';
import { UserRecipesService } from 'src/app/user-recipes.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {

  public activeRecipe: any;

  constructor(private userRecipesService: UserRecipesService) {}

  ngOnInit() {
    this.activeRecipe = this.userRecipesService.selectedRecipe;
    console.log(this.activeRecipe);
  }

}
