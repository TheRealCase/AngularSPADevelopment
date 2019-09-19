import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { FoodItem } from "src/app/shared/foodItem";
import {
  FormBuilder,
  FormGroup,
  ValidationErrors,
  Validators
} from "@angular/forms";

@Component({
  selector: "app-food-edit",
  templateUrl: "./food-edit.component.html",
  styleUrls: ["./food-edit.component.scss"]
})
export class FoodEditComponent implements OnInit {
  constructor(private fb: FormBuilder) {}

  @Input() food: FoodItem;
  @Output() saveFood: EventEmitter<FoodItem> = new EventEmitter();

  foodForm: FormGroup;

  ngOnInit() {
    this.initForm();
    this.subscribeChanges();
  }

  private initForm() {
    this.foodForm = this.fb.group({
      name: [this.food.name, [Validators.required, Validators.minLength(4)]],
      price: [this.food.price, [Validators.min(0.01), Validators.max(9999.99)]],
      calories: [
        this.food.calories,
        [Validators.min(1), Validators.max(99999.99)]
      ]
    });
  }

  private subscribeChanges() {
    this.foodForm.valueChanges.subscribe(vals => {
      console.log("changes happening @form: ", vals);
    });
  }

  submitFood(foodForm): void {
    this.saveFood.emit(foodForm);
  }
}
