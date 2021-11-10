import { Ingredient } from './../shared/ingredient.model';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ShoppingService } from './shopping.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[] = [];
  updateIngSub: Subscription;

  constructor(private shoppingService: ShoppingService) {}

  ngOnInit(): void {
    this.ingredients = this.shoppingService.getIngs();
    this.updateIngSub = this.shoppingService.updatedIngs.subscribe(
      (newIngs: Ingredient[]) => {
        this.ingredients = newIngs;
      }
    );
  }

  ngOnDestroy() {
    this.updateIngSub.unsubscribe();
  }

  onIngSelect(index: number) {
    this.shoppingService.ingSelected.next(index);
  }
}
