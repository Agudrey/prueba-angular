export interface Countrie{
  "description": string
  "id": string,
  "countryName": string,
  "population": string,
  "capital": string,
  "continentName": string,
  "img": string
}

export interface Field{
  "label": string,
  "key": keyof Countrie,
  "placeHolder": string
}
