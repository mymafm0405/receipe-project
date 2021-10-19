import { Component, OnInit } from '@angular/core';

import { Recepie } from '../recepie.model';

import { RecepieService } from '../recepie.service';

@Component({
  selector: 'app-recepies-list',
  templateUrl: './recepies-list.component.html',
  styleUrls: ['./recepies-list.component.css'],
})
export class RecepiesListComponent implements OnInit {
  recepies: Recepie[];

  constructor(private recepiesService: RecepieService) {}

  ngOnInit(): void {
    this.recepies = this.recepiesService.getRecepies();
  }
}
