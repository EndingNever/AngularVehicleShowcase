import { CarsService } from 'src/app/cars.service';
import { Car } from './../car.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-italian',
  templateUrl: './italian.component.html',
  styleUrls: ['./italian.component.css'],
  providers: [CarsService]
})
export class ItalianComponent implements OnInit {
  constructor(private readonly CarsService: CarsService) { }

  ngOnInit(): void {
  }

}
