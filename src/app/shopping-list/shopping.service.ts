import { Ingredient } from './../shared/ingredient.model';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ShoppingService {
  updatedIngs = new Subject<Ingredient[]>();
  ingSelected = new Subject<number>();

  ingredients: Ingredient[] = [
    new Ingredient('Tomato', 10),
    new Ingredient('Carrot', 5),
  ];

  getIngs() {
    return this.ingredients.slice();
  }

  addIng(newIng: Ingredient) {
    const foundIng = this.ingredients.find((ing) => ing.name === newIng.name);
    foundIng
      ? (foundIng.amount = foundIng.amount + newIng.amount)
      : this.ingredients.push(newIng);
    this.updatedIngs.next(this.ingredients.slice());
  }

  getSelectedIng(index: number) {
    return this.ingredients[index];
  }

  updateCurrentIng(index: number, ing: Ingredient) {
    this.ingredients[index] = ing;
    this.updatedIngs.next(this.ingredients.slice());
  }
}
