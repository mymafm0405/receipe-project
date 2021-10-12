import { Recepie } from './recepies/recepie.model';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  welcomeMessage = '';
  view = 'recepie';
  loadedRecepie: Recepie;

  onClick() {
    if (!this.welcomeMessage) {
      this.welcomeMessage = 'Welcome again, Dear!!';
    } else {
      this.welcomeMessage = '';
    }
  }

  viewLink(event: string) {
    this.view = event;
  }
}
