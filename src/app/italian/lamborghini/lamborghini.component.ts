import { CarsService } from 'src/app/cars.service';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-lamborghini',
  templateUrl: './lamborghini.component.html',
  styleUrls: ['./lamborghini.component.css']
})
export class LamborghiniComponent implements OnInit {
  @ViewChild('target') MyProp!: ElementRef;
  make:string = 'diablo';
  diablo!:any;
  diabloInfo:boolean = false;

  constructor(private CarsService: CarsService) { }

  ngOnInit(): void {
    this.diablo = this.CarsService.getItalianByMake('Lamborghini')
  }

  displayLambo() {
    this.diabloInfo = !this.diabloInfo;
  }

  scroll() {
    if(this.diabloInfo === true)
    this.MyProp.nativeElement.scrollIntoView({ behavior: "smooth", block: "center"  });
  }
  
  mouseEnter(div:string) {
    console.log("mouse enter : " + div);
  }
  mouseLeave(div:string) {
    console.log("mouse leave : " + div);
  }
}
