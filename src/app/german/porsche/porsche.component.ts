import { Car } from './../../car.model';
import { CarsService } from './../../cars.service';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-porsche',
  templateUrl: './porsche.component.html',
  styleUrls: ['./porsche.component.css']
})
export class PorscheComponent implements OnInit {
  @ViewChild ('target') MyProp!:ElementRef;
  porsche!:Car[];
  porscheInfo:boolean = false;
  constructor(private CarsService: CarsService) { }

  ngOnInit(): void {
    this.porsche = this.CarsService.getGermanByMake("Porsche")
  }

  displayPorsche() {
    this.porscheInfo = !this.porscheInfo;
  }
  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    
  }
  
  scroll() {
    if(this.porscheInfo === true)
    this.MyProp.nativeElement.scrollIntoView({ behavior: "smooth", block: "center"  });
  }

}
