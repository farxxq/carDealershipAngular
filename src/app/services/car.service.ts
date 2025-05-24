import { Observable } from 'rxjs';
import { ICar } from './../models/car.model';
import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CarService {
  private json = 'assets/json/carInfo.json';

  http = inject(HttpClient);

  getData(): Observable<ICar[]> {
    return this.http.get<ICar[]>(this.json);
  }
}
