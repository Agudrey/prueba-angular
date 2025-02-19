import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Countrie } from '../../interfaces/interfaces';
import { RouterModule } from '@angular/router';
import Swal from 'sweetalert2'
import { CountrieCardComponent } from '../../components/countrie-card/countrie-card.component';

@Component({
  selector: 'app-countries-list',
  imports: [RouterModule, CountrieCardComponent],
  templateUrl: './countries-list.component.html',
  styleUrl: './countries-list.component.css'
})
export class CountriesListComponent implements OnInit {
  countries:Countrie[] = []

  constructor(private dataSvc: DataService) {}

  ngOnInit(): void {
    this.dataSvc.getCountries().subscribe((res:Countrie[]) => (this.countries = res))
  }

  onDeleteCountrie(id:string){
    Swal.fire({
      title: "Quieres eliminar este pais?",
      icon: "warning",
      showConfirmButton: true,
      showCancelButton: true,
      confirmButtonText: "Si, borralo",
      cancelButtonText: "Cancelar",
      confirmButtonColor: "#f4511e",
      cancelButtonColor: "#3eec00"
    }).then((result) => {
      if(result.isConfirmed){
        this.dataSvc.deleteCountrie(id).subscribe(() => this.ngOnInit())
      }
    })
  }
}
