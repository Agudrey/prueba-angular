import { Routes } from "@angular/router";
import { CountriesListComponent } from "./countries-list.component";
import { CountriesFormComponent } from "./countries-form/countries-form.component";
import { CountrieDetailComponent } from "./countrie-detail/countrie-detail.component";
import { ErrorPageComponent } from "../error-page/error-page.component";

export const countries_routes: Routes = [
  {path: "list", component: CountriesListComponent},
  {path: "form", component: CountriesFormComponent},
  {path: ":id", component: CountrieDetailComponent},
  {path: "", redirectTo: "list", pathMatch: "full"},
  {path: "error", component: ErrorPageComponent},
  {path: "**", redirectTo: "error"}
];
