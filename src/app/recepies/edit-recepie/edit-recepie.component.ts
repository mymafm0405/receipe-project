import { RecepieService } from './../recepie.service';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { Recepie } from '../recepie.model';

@Component({
  selector: 'app-edit-recepie',
  templateUrl: './edit-recepie.component.html',
  styleUrls: ['./edit-recepie.component.css'],
})
export class EditRecepieComponent implements OnInit {
  id: number;
  editMode = false;
  recepieForm: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private recepiesService: RecepieService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.editMode = params['id'] != null;
      this.initForm();
    });
  }

  onSave() {
    console.log(this.recepieForm);
  }

  private initForm() {
    let recName = '';
    let recImagePath = '';
    let recDescription = '';
    let ings = new FormArray([]);

    if (this.editMode) {
      const currentRecepie: Recepie = this.recepiesService.getCurrentRecepie(
        this.id
      );
      recName = currentRecepie.name;
      recImagePath = currentRecepie.imagePath;
      recDescription = currentRecepie.desc;
      if (currentRecepie['ings']) {
        for (let ing of currentRecepie.ings) {
          ings.push(
            new FormGroup({
              name: new FormControl(ing.name),
              amount: new FormControl(ing.amount),
            })
          );
        }
      }
    }
    this.recepieForm = new FormGroup({
      name: new FormControl(recName),
      imagePath: new FormControl(recImagePath),
      description: new FormControl(recDescription),
      ings,
    });
  }

  getIngs() {
    return (<FormArray>this.recepieForm.get('ings')).controls;
  }
}
