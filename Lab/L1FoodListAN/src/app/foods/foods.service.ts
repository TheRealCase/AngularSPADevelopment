import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Food } from "./food";

@Injectable({
  providedIn: "root"
})
export class FoodsService {
  constructor(private httpClient: HttpClient) {}

  getFoods() {
    return this.httpClient.get<Food[]>("assets/foods.json");
  }
}
