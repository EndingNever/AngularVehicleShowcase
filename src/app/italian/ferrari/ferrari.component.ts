import { CarsService } from 'src/app/cars.service';
import { Car } from './../../car.model';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-ferrari',
  templateUrl: './ferrari.component.html',
  styleUrls: ['./ferrari.component.css'],
})
export class FerrariComponent implements OnInit {
  @ViewChild('target') MyProp!:ElementRef;
  ferrariInfo:boolean = false;
  ferrari!: any;
  displayText:boolean = true;
  
  constructor(private CarsService: CarsService) { }

  ngOnInit(): void {
    this.ferrari = this.CarsService.getItalianByMake('Ferrari')    
  }

  displayFerrari() {
    this.ferrariInfo = !this.ferrariInfo
  }

  scroll() {
    if(this.ferrariInfo === true)
    this.MyProp.nativeElement.scrollIntoView({ behavior: "smooth", block: "center"  });
  }

  mouseEnter() {
    this.displayText = false;
  }
  mouseLeave() {
    this.displayText = true;
  }
  
}
