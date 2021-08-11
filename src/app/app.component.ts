import { Component, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Sports Cars';
  @ViewChild('target') MyProp!: ElementRef;
  recommend:boolean = false;
  recommendMake?:string;
  recommendModel?:string;
  recommendYear?:any;
  submit:boolean = false;
  make?:string;
  model?:string;
  year?:any;
  recommendArray:any = [];

  
  constructor (private router: Router) {}
  
  japanRoute() {
    this.router.navigate(['/Japanese'])
  }

  germanRoute() {
    this.router.navigate(['/German'])
    this.MyProp.nativeElement.scrollIntoView({  block: "start"  });
  }

  italianRoute() {
    this.router.navigate(['/Italian'])
  }
  
    scroll() {
    this.MyProp.nativeElement.scrollIntoView({  block: "start"  });
  }

  button() {
    this.recommend = true;
  }
  onSubmit() {
    this.submit = true;
    this.year = this.recommendYear
    this.make = this.recommendMake
    this.model = this.recommendModel
    this.recommendYear = '';
    this.recommendModel = '';
    this.recommendMake = '';
    this.recommendArray.push({year: this.year, make: this.make, model: this.model})
    }
}
