import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Countrie } from "../interfaces/interfaces";
import { Observable } from "rxjs";

@Injectable({providedIn: 'root'})

export class DataService {
  private apiUrl = "http://localhost:3000"

  constructor(private http: HttpClient) {}

  getCountries(): Observable<Countrie[]>{
    return this.http.get<Countrie[]>(`${this.apiUrl}/paises`)
  }

  getCountrie(id: string): Observable<Countrie>{
    return this.http.get<Countrie>(`${this.apiUrl}/paises/${id}`)
  }

  addCountrie(countrie: Countrie): Observable<Countrie>{
    return this.http.post<Countrie>(`${this.apiUrl}/paises`, countrie)
  }

  deleteCountrie(id: string): Observable<Countrie>{
    return this.http.delete<Countrie>(`${this.apiUrl}/paises/${id}`)
  }
}
