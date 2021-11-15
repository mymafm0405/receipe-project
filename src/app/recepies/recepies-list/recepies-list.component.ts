import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { Recepie } from '../recepie.model';

import { RecepieService } from '../recepie.service';

@Component({
  selector: 'app-recepies-list',
  templateUrl: './recepies-list.component.html',
  styleUrls: ['./recepies-list.component.css'],
})
export class RecepiesListComponent implements OnInit, OnDestroy {
  recepies: Recepie[];
  updateSub: Subscription;

  constructor(private recepiesService: RecepieService) {}

  ngOnInit(): void {
    this.recepies = this.recepiesService.getRecepies();
    this.updateSub = this.recepiesService.recepiesUpdated.subscribe(
      (newRecepies: Recepie[]) => {
        this.recepies = newRecepies;
      }
    );
  }

  ngOnDestroy() {
    this.updateSub.unsubscribe();
  }
}
