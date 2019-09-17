import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";
import { FoodsService } from "../foods.service";
import { Food } from "../food";

@Component({
  selector: "app-foods-list",
  templateUrl: "./foods-list.component.html",
  styleUrls: ["./foods-list.component.scss"]
})
export class FoodsListComponent implements OnInit {
  constructor(private foodsService: FoodsService) {}

  @Input() foods: Food[];
  @Output() foodSelected: EventEmitter<Food> = new EventEmitter();

  ngOnInit() {}

  selectFood(f: Food) {
    this.foodSelected.emit(f);
  }
}
