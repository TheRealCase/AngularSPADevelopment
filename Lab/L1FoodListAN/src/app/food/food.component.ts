import { Component, OnInit } from "@angular/core";
import { FoodsService } from "../foods/foods.service";
import { Food } from "../foods/food";

@Component({
  selector: "app-food",
  templateUrl: "./food.component.html",
  styleUrls: ["./food.component.scss"]
})
export class FoodComponent implements OnInit {
  constructor(private foodsService: FoodsService) {}

  foods: Food[];
  current: Food;

  ngOnInit() {
    this.foodsService.getFoods().subscribe(data => {
      this.foods = data;
    });
  }

  onFoodSelected(f: Food) {
    this.current = { ...f };
  }

  onFoodSaved(f: Food) {
    let existing: Food = this.foods.find(i => i.id == f.id);
    if (existing != null) {
      Object.assign(existing, f);
    } else {
      this.foods.push(f);
    }
  }
}
