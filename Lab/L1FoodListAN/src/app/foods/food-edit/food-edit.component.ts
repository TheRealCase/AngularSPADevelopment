import { Component, Input, OnInit, Output, EventEmitter } from "@angular/core";
import { Food } from "../food";

@Component({
  selector: "app-food-edit",
  templateUrl: "./food-edit.component.html",
  styleUrls: ["./food-edit.component.scss"]
})
export class FoodEditComponent implements OnInit {
  @Input() food: Food;
  @Input() editMode: boolean;
  @Output() saveFood: EventEmitter<Food> = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  doSave() {
    this.saveFood.emit(this.food);
  }
}
