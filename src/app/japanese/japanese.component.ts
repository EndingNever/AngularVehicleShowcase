import { CarsService } from 'src/app/cars.service';
import { Component, OnInit, ViewChild, ElementRef, Output } from '@angular/core';
import { Car } from '../car.model';


@Component({
  selector: 'app-japanese',
  templateUrl: './japanese.component.html',
  styleUrls: ['./japanese.component.css']
})
export class JapaneseComponent  implements OnInit{
  @Output() hideCarTitle:boolean = false;
  
  
  ngOnInit() {

  }
}
