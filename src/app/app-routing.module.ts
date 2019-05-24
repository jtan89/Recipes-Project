import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BooksComponent } from './books/books.component';
import { RecipesComponent } from './recipes/recipes.component';
import { HomeComponent } from './home/home.component';
import { RecipeDetailsComponent } from './recipes/recipe-details/recipe-details.component';


const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'books', component: BooksComponent},
  { path: 'cards', component: RecipesComponent},
  { path: 'recipe', component: RecipeDetailsComponent}
  // {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [
  HomeComponent,
  BooksComponent,
  RecipesComponent,
  RecipeDetailsComponent
];
