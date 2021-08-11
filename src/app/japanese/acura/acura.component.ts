import { Car } from './../../car.model';
import { CarsService } from 'src/app/cars.service';
import { Component, OnInit, ViewChild, ElementRef, Output } from '@angular/core';

@Component({
  selector: 'app-acura',
  templateUrl: './acura.component.html',
  styleUrls: ['./acura.component.css']
})
export class AcuraComponent implements OnInit {
  @Output() car1?:string;
  @ViewChild('target') MyProp?: ElementRef;
  acuraInfo:boolean = false;
  acura?: Array<Car>;
  
  constructor(private CarsService: CarsService) { }

  ngOnInit(): void {
    this.acura = this.CarsService.getJapaneseByMake('Acura')
  }

  displayAcura() {
    this.acuraInfo = !this.acuraInfo;
  }

  scroll() {
    if(this.acuraInfo === true)
    this.MyProp?.nativeElement.scrollIntoView({ behavior: "smooth", block: "center"  });
  }

}
