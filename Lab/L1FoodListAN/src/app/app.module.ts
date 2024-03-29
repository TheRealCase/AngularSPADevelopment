import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { FooterComponent } from "./footer/footer.component";
import { ToolbarComponent } from "./toolbar/toolbar.component";
import { SidemenuComponent } from "./shared/sidemenu/sidemenu.component";
import { FoodComponent } from "./food/food.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FoodsListComponent } from "./foods/foods-list/foods-list.component";
import { FoodEditComponent } from "./foods/food-edit/food-edit.component";
import { MaterialModule } from "./material-module";
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    ToolbarComponent,
    SidemenuComponent,
    FoodComponent,
    FoodsListComponent,
    FoodEditComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
