import { Recepie } from './../recepie.model';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-recepie-details',
  templateUrl: './recepie-details.component.html',
  styleUrls: ['./recepie-details.component.css'],
})
export class RecepieDetailsComponent {
  @Input() currentRecepie: Recepie;
}
