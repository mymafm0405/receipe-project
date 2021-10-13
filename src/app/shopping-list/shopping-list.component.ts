import { Ingredient } from './../shared/ingredient.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('Tomato', 10),
    new Ingredient('Carrot', 5),
  ];

  constructor() {}

  ngOnInit(): void {}

  onAddClicked(newIng: Ingredient) {
    this.ingredients.push(newIng);
  }
}
