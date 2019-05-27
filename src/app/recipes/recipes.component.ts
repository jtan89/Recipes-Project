import { Component, OnInit} from '@angular/core';
import { UserRecipesService } from '../user-recipes.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  // public userRecipes = [];
  public currentBook;

  constructor(private userRecipesService: UserRecipesService) { }

  ngOnInit() {
    this.currentBook = this.userRecipesService.selectedBook;
    // this.userRecipesService.getUserRecipes()
    //   .subscribe((data) => {
    //     this.userRecipes = data;
    //   });
    console.log(this.currentBook);
  }

}
