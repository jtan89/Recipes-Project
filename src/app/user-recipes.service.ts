import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUserRecipe } from './userRecipe';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserRecipesService {

  public selectedBook: [];

  private url: string = '/assets/data/recipes.json';

  constructor(private http: HttpClient) { }


  getUserRecipes(): Observable<IUserRecipe[]> {
    return this.http.get<IUserRecipe[]>(this.url);
  }

  setSelectedBook(book) {
    this.selectedBook = book;
    //console.log(this.selectedBook);
  }

}
