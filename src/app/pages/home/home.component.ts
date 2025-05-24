import { ICar } from './../../models/car.model';
import { CarService } from './../../services/car.service';
import { RouterLink } from '@angular/router';
import { Component, inject } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';

@Component({
  selector: 'app-home',
  imports: [RouterLink, CardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  carService = inject(CarService);

  cars: ICar[] = [];

  featured: ICar[] = [];

  ngOnInit(): void {
    this.carService.getData().subscribe((data) => {
      this.cars = data;
      this.featured = this.cars.filter((c) => c.featured);
    });
  }
}
