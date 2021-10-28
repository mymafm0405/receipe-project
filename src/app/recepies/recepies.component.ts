import { Recepie } from './recepie.model';
import { Component, OnInit } from '@angular/core';
import { RecepieService } from './recepie.service';

@Component({
  selector: 'app-recepies',
  templateUrl: './recepies.component.html',
})
export class RecepiesComponent implements OnInit {
  recepie: Recepie;

  constructor(private recepieService: RecepieService) {}

  ngOnInit() {}
}
