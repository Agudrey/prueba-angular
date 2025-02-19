import { Component, OnInit } from '@angular/core';
import { of, catchError } from 'rxjs';
import { DataService } from '../../../services/data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NavigationService } from '../../../services/navigation.service';

@Component({
  selector: 'app-countrie-detail',
  imports: [],
  templateUrl: './countrie-detail.component.html',
  styleUrl: './countrie-detail.component.css'
})
export class CountrieDetailComponent implements OnInit {
  countrie: any;

  constructor(private readonly router: Router, private route: ActivatedRoute, private dataService: DataService, private navigateService: NavigationService) {}

  ngOnInit(): void {
    const countrieId = this.route.snapshot.paramMap.get('id')
    if(countrieId){
      this.getCountryById(countrieId)
    }
  }

  getCountryById(id: string) {
    this.dataService.getCountrie(id).pipe(
      catchError((error) => {
        console.error('Error al obtener el país:', error);
        this.router.navigate(['/error']);
        return of(null);
      })
    ).subscribe((data) => {
      if (data) {
        this.countrie = data;
      }
    });
  }

  public navigateToCountriesList(): void {
    this.navigateService.goToCountriesList()
  }
}
