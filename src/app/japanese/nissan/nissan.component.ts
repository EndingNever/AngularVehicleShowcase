import { Car } from './../../car.model';
import { CarsService } from 'src/app/cars.service';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-nissan',
  templateUrl: './nissan.component.html',
  styleUrls: ['./nissan.component.css']
})
export class NissanComponent implements OnInit {
  @ViewChild('target') MyProp!: ElementRef;
  nissanInfo:boolean = false;
  nissan!: Array<Car>;
  
  constructor(private CarsService: CarsService) { }

  ngOnInit(): void {
    this.nissan = this.CarsService.getJapaneseByMake('Nissan')
  }

  displayNissan() {
    this.nissanInfo = !this.nissanInfo;
  }

  scroll() {
    if(this.nissanInfo === true)
    this.MyProp.nativeElement.scrollIntoView({ behavior: "smooth", block: "center"  });
  }
  
}
