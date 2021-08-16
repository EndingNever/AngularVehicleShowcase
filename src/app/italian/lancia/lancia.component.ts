import { CarsService } from 'src/app/cars.service';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-lancia',
  templateUrl: './lancia.component.html',
  styleUrls: ['./lancia.component.css']
})
export class LanciaComponent implements OnInit {
  @ViewChild('target') MyProp!: ElementRef;
  lanciaInfo:boolean = false;
  lancia!: any;
  constructor(private CarsService: CarsService) { }

  ngOnInit(): void {
    this.lancia = this.CarsService.getItalianByMake('Lancia')
  }

  displayFerrari() {
    this.lanciaInfo = !this.lanciaInfo
  }

  scroll() {
    if(this.lanciaInfo === true)
    this.MyProp.nativeElement.scrollIntoView({ behavior: "smooth", block: "center"  });
  }
  
}
