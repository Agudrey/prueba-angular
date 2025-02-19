import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root' // Hace que esté disponible en toda la app
})
export class NavigationService {
  constructor(private router: Router) {}

  goToCountriesList(): void {
    this.router.navigate(['/countries/list']);
  }
}
