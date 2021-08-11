import { Component, Input, OnInit } from '@angular/core';
import { Car } from '../car.model';
import { CarsService } from '../cars.service';


@Component({
  selector: 'app-german',
  templateUrl: './german.component.html',
  styleUrls: ['./german.component.css']
})
export class GermanComponent implements OnInit {
  @Input() make:any = this.carsService.getGermanByMake('Audi')[0].make;
  constructor(private carsService: CarsService) { }

  ngOnInit(): void {

  }

  
  log(value:any) {
    
  }


}



