import { Recepie } from './../recepie.model';
import { Component, Input } from '@angular/core';
import { ShoppingService } from 'src/app/shopping-list/shopping.service';

@Component({
  selector: 'app-recepie-details',
  templateUrl: './recepie-details.component.html',
  styleUrls: ['./recepie-details.component.css'],
})
export class RecepieDetailsComponent {
  @Input() currentRecepie: Recepie;

  constructor(private shoppingService: ShoppingService) {}

  sendToShopping() {
    this.currentRecepie.ings.map((ing) => {
      this.shoppingService.addIng(ing);
    });
  }
}
