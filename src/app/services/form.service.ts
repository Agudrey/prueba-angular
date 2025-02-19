import { Injectable } from "@angular/core";
import { Field } from "../interfaces/interfaces";

@Injectable({providedIn: 'root'})

export class FormService {
  getFields():Field[] {
    return[
      {label: "Nombre", key: "countryName", placeHolder: "Ex. Colombia"},
      {label: "Capital", key: "capital", placeHolder: "Ex. Bogotá"},
      {label: "Nombre del continente", key: "continentName", placeHolder: "Ex. America"},
      {label: "Población", key: "population", placeHolder: "Ex. 50 millones"},
      {label: "Url de la imagen", key: "img", placeHolder: ""}
    ]
  }
}
