import { Ingredient } from './../shared/ingredient.model';
export class Recepie {
  constructor(
    public name: string,
    public description: string,
    public imagePath: string,
    public ings: Ingredient[]
  ) {}
}
