import { CarsService } from 'src/app/cars.service';
import { Car } from './../../car.model';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-toyota',
  templateUrl: './toyota.component.html',
  styleUrls: ['./toyota.component.css']
})
export class ToyotaComponent implements OnInit {
  @ViewChild('target') MyProp?: ElementRef;
  hideCarTitle:boolean=false;
  toyotaInfo:boolean = false;
  toyota?: Array<Car>;
  
  constructor(private CarsService: CarsService) { }

  ngOnInit(): void {
    this.toyota = this.CarsService.getJapaneseByMake('Toyota')
  }


  displayToyota() {
    this.toyotaInfo = !this.toyotaInfo;
    this.hideCarTitle = !this.hideCarTitle;
  }

  scroll() {
    if(this.toyotaInfo === true)
    this.MyProp?.nativeElement.scrollIntoView({ behavior: "smooth", block: "center"  });
  }

  
}
