import { Recepie } from './recepie.model';
import { Component } from '@angular/core';

@Component({
  selector: 'app-recepies',
  templateUrl: './recepies.component.html',
})
export class RecepiesComponent {
  recepie: Recepie;

  onGetRecepie(currentRecepie: Recepie) {
    this.recepie = currentRecepie;
  }
}
