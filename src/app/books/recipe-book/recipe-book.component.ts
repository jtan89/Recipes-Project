import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-recipe-book',
  templateUrl: './recipe-book.component.html',
  styleUrls: ['./recipe-book.component.css']
})
export class RecipeBookComponent implements OnInit {

  @Input() books: [];

  constructor() { }

  ngOnInit() {
  }
}
