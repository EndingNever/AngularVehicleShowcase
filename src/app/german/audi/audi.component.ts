
import { CarsService } from 'src/app/cars.service';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-audi',
  templateUrl: './audi.component.html',
  styleUrls: ['./audi.component.css']
})
export class AudiComponent implements OnInit {
  @ViewChild ('target') MyProp!: ElementRef;
  audi?:any;
  audiInfo:boolean = false;
    
  constructor(private CarsService: CarsService,) { }

  ngOnInit(): void {
          this.audi = this.CarsService.getGermanByMake('Audi');
  }
  
  displayAudi() {
    this.audiInfo = !this.audiInfo
  }
  
  scroll() {
    if(this.audiInfo === true)
    this.MyProp.nativeElement.scrollIntoView({ behavior: "smooth", block: "center"  });
  }

}
