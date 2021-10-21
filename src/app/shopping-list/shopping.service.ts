import { Injectable, EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Injectable({ providedIn: 'root' })
export class ShoppingService {
  updatedIngs = new EventEmitter<Ingredient[]>();

  ingredients: Ingredient[] = [
    new Ingredient('Tomato', 10),
    new Ingredient('Carrot', 5),
  ];

  getIngs() {
    return this.ingredients.slice();
  }

  addIng(newIng: Ingredient) {
    this.ingredients.push(newIng);
    this.updatedIngs.emit(this.ingredients.slice());
  }
}
