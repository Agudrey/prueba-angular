import { Component } from '@angular/core';
import { NgModel, FormsModule, NgForm } from '@angular/forms';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import { FormService } from '../../../services/form.service';
import { Countrie, Field } from '../../../interfaces/interfaces';
import { DataService } from '../../../services/data.service';
import { Router } from '@angular/router';
import { NavigationService } from '../../../services/navigation.service';

@Component({
  selector: 'app-countries-form',
  imports: [MatFormFieldModule, MatButtonModule, MatInputModule, FormsModule],
  templateUrl: './countries-form.component.html',
  styleUrl: './countries-form.component.css'
})
export class CountriesFormComponent {
  fields:Field[] = []

 constructor(private formService: FormService, private dataService: DataService, private router: Router, private navigateService: NavigationService) {
  this.fields = this.formService.getFields()
 }

 model:Countrie = {
  "description": "",
  "id": "",
  "countryName": "",
  "population": "",
  "capital": "",
  "continentName": "",
  "img": ""
 }

 onSubmit({value:formData}: NgForm){
  this.dataService.addCountrie(formData).subscribe(() => this.router.navigate(['/countries/list']))
 }

 public navigateToCountriesList(): void {
  this.navigateService.goToCountriesList()
 }
}
