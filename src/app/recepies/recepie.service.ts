import { Recepie } from './recepie.model';
import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class RecepieService {
  recepiesUpdated = new Subject<Recepie[]>();

  recepies: Recepie[] = [
    new Recepie(
      'A test recepie',
      'Some details about this item',
      'https://www.simplyrecipes.com/thmb/OCi18J2V8OeKDFV3FxoeKvgq74E=/1423x1067/smart/filters:no_upscale()/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2012__07__grilled-sweet-potatoes-horiz-a-1600-7c8292daa98e4020b447f0dc97a45cb7.jpg',
      [new Ingredient('Meat', 10), new Ingredient('Tomatoes', 5)]
    ),
    new Recepie(
      'A test recepie 2',
      'Some details about this item 2',
      'https://www.indianhealthyrecipes.com/wp-content/uploads/2019/11/samosa-recipe-480x270.jpg',
      [new Ingredient('Chiken', 3), new Ingredient('Fries', 20)]
    ),
  ];

  getRecepies() {
    return this.recepies.slice();
  }

  getCurrentRecepie(currentIndex: number) {
    return this.recepies[currentIndex];
  }

  addRecepie(newRecepie: Recepie) {
    this.recepies.push(newRecepie);
    this.recepiesUpdated.next(this.recepies.slice());
  }

  updateRecepies(index: number, recepie: Recepie) {
    this.recepies[index] = recepie;
    this.recepiesUpdated.next(this.recepies.slice());
  }

  deleteRecepie(index: number) {
    this.recepies.splice(index, 1);
    this.recepiesUpdated.next(this.recepies.slice());
  }
}
