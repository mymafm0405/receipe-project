import { RecepieService } from './../recepie.service';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
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
    private recepiesService: RecepieService,
    private router: Router
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
    if (this.editMode) {
      this.recepiesService.updateRecepies(this.id, this.recepieForm.value);
    } else {
      console.log('hi');
      this.recepiesService.addRecepie(this.recepieForm.value);
    }
    this.onCancel();
  }
  onCancel() {
    this.router.navigate(['../'], { relativeTo: this.route });
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
      recDescription = currentRecepie.description;
      if (currentRecepie['ings']) {
        for (let ing of currentRecepie.ings) {
          ings.push(
            new FormGroup({
              name: new FormControl(ing.name, Validators.required),
              amount: new FormControl(ing.amount, [
                Validators.required,
                Validators.pattern(/^[1-9]+[0-9]*$/),
              ]),
            })
          );
        }
      }
    }
    this.recepieForm = new FormGroup({
      name: new FormControl(recName, Validators.required),
      imagePath: new FormControl(recImagePath, Validators.required),
      description: new FormControl(recDescription, Validators.required),
      ings,
    });
  }

  getIngs() {
    return (<FormArray>this.recepieForm.get('ings')).controls;
  }

  onAddIng() {
    (<FormArray>this.recepieForm.get('ings')).push(
      new FormGroup({
        name: new FormControl(null, Validators.required),
        amount: new FormControl(null, [
          Validators.required,
          Validators.pattern(/^[1-9]+[0-9]*$/),
        ]),
      })
    );
  }
}
