import { Ingredient } from './../../shared/ingredient.model';
import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { ShoppingService } from '../shopping.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @Output() addClicked = new EventEmitter<Ingredient>();
  @ViewChild('f', { static: true }) ingForm: NgForm;

  selectedIndex: number;
  currentIng: Ingredient;
  editMode = false;
  ingSelectSubscription: Subscription;

  constructor(private shoppingService: ShoppingService) {}

  ngOnInit(): void {
    this.ingSelectSubscription = this.shoppingService.ingSelected.subscribe(
      (currentIndex: number) => {
        this.editMode = true;
        this.selectedIndex = currentIndex;
        this.currentIng = this.shoppingService.getSelectedIng(currentIndex);
        this.ingForm.setValue({
          name: this.currentIng.name,
          amount: this.currentIng.amount,
        });
      }
    );
  }

  onAdd(f: NgForm) {
    if (f.value.name !== '' || f.value.amount !== '') {
      const newIng = new Ingredient(f.value.name, f.value.amount);
      this.editMode
        ? this.shoppingService.updateCurrentIng(this.selectedIndex, newIng)
        : this.shoppingService.addIng(newIng);
      f.reset();
      this.editMode = false;
    }
  }

  onDelete() {
    if (this.editMode) {
      this.shoppingService.deleteIng(this.selectedIndex);
      this.onClear();
    }
  }

  onClear() {
    this.ingForm.reset();
    this.editMode = false;
  }

  ngOnDestroy() {
    this.ingSelectSubscription.unsubscribe();
  }
}
