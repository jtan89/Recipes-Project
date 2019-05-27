import { Component, OnInit } from '@angular/core';
import { UserRecipesService } from '../user-recipes.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  public userRecipes = [];

  constructor(private userRecipesService: UserRecipesService) { }

  ngOnInit() {
    this.userRecipesService.getUserRecipes()
    .subscribe((data) => {
      this.userRecipes = data;
    });
  }

  selectBook(book) {
    this.userRecipesService.setSelectedBook(book);
  }

}
