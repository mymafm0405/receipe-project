import { RecepieService } from './../recepie.service';
import { Recepie } from './../recepie.model';
import { Component, OnInit } from '@angular/core';
import { ShoppingService } from 'src/app/shopping-list/shopping.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-recepie-details',
  templateUrl: './recepie-details.component.html',
  styleUrls: ['./recepie-details.component.css'],
})
export class RecepieDetailsComponent implements OnInit {
  currentRecepie: Recepie;
  recepieId: number;

  constructor(
    private shoppingService: ShoppingService,
    private route: ActivatedRoute,
    private router: Router,
    private recepiesService: RecepieService
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      // this.currentRecepie = this.recepiesService.getCurrentRecepie(
      //   +params['id']
      // );
      this.recepieId = +params['id'];
      this.currentRecepie = this.recepiesService.getRecepies()[+params['id']];
    });
  }

  sendToShopping() {
    this.currentRecepie.ings.map((ing) => {
      this.shoppingService.addIng(ing);
    });
  }

  onEditRecepie() {
    this.router.navigate(['edit'], { relativeTo: this.route });
  }
}
