import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { AfterViewInit } from '@angular/core';
import { CarsService } from 'src/app/cars.service';

@Component({
  selector: 'app-mercedes',
  templateUrl: './mercedes.component.html',
  styleUrls: ['./mercedes.component.css']
})
export class MercedesComponent implements OnInit {
  @ViewChild ('target') MyProp!: ElementRef;
  mercedes:any;
  mercedesInfo:boolean = false;
  
  constructor(private CarsService: CarsService) { }

  ngOnInit(): void {
    this.mercedes=this.CarsService.getGermanByMake('Mercedes')
  }

  displayMercedes() {
    this.mercedesInfo = !this.mercedesInfo;
  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    // this.MyProp.nativeElement.scrollIntoView();
  }
  
  scroll() {
    if(this.mercedesInfo === true)
    this.MyProp.nativeElement.scrollIntoView({ behavior: "smooth", block: "center"  });
  }


}
