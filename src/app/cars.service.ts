import { Car } from './car.model';
import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class CarsService {
  displayText:boolean = true;
  
  german: Car[] = [
    {
      make: 'Mercedes',
      model: 'CLK GTR',
      year: 1999,
      horsepower: 600,
      engine: 'Mercedes-Benz M120 V12',
      curbWeight: "2,216 lb",
      ptw: '.27 lb/hp', //power to weight
      sixty: '3.3s',
      topSpeed: '214mph',
      hundred: '5.9s',
      photo: "assets/img/AMGCLKGTR1.jpg"
    },
    {
      make: 'Porsche',
      model: '993 GT2',
      year: 1993,
      horsepower: 444,
      ptw: '.155 hp/lb', //power to weight, the higher the number the faster
      engine: 'Twin Turbocharged flat-6',
      curbWeight: "2,855 lb",
      sixty: '3.9s',
      hundred: '8.7s',
      topSpeed: '187 mph',
      photo: "assets/img/LARGE993.jpg"
    },
    {
      make: 'Audi',
      model: 'Sport Quattro S1',
      year: 1985,
      horsepower: 540,
      ptw: '.224 hp/lb', //power to weight, the higher the number the faster
      engine: 'Turbocharged Inline-5',
      curbWeight: "2,403 lb",
      sixty: '3.1s',
      topSpeed: '136 mph',
      photo: "assets/img/audi3.jpg"
    }
  ]

  italian: Car[] = [
    {
      make: 'Ferrari',
      model: 'F50 GT',
      year: 1996,
      horsepower: 739,
      curbWeight: "2,005 lb",
      ptw: '.36 hp / lb',
      engine: 'F130B V12',
      sixty: '2.9s',
      hundred: '6.7s',
      topSpeed: '236 mph',
      photo: 'assets/img/f50gt.jpg'
    },
    {
      make: 'Lancia',
      model: 'Delta HF Integrale',
      year: 1992,
      horsepower: 265,
      curbWeight: '2469 lb',
      ptw: '0.11 hp / lb',
      engine: 'turbocharged inline-four',
      sixty: '5.0s',
      topSpeed: '137 mph',
      photo: 'assets/img/delta2.jpg'
    },
    {
      make: 'Lamborghini',
      model: 'Diablo VT',
      year: 1993,
      horsepower: 485,
      curbWeight: '3,583 lb',
      ptw: '.13 hp / lb',
      engine: 'Lamborghini V12',
      sixty: '4.4s',
      hundred: '7.7s',
      topSpeed: '202 mph',
      photo: 'assets/img/diablo.jpg'
    }

  ]

  japanese: Car[] = [
    {
      make: 'Nissan',
      model: 'Skyline GT-R',
      year: 1999,
      horsepower: 276,
      engine: 'twin-turbocharged six cylinder',
      curbWeight: "3,439 lb",
      ptw: '.08 lb/hp', //power to weight
      sixty: '4.9s',
      topSpeed: '156mph',
      hundred: '11.8s',
      photo: "assets/img/r34Crop.jpg"
    },
    {
      make: 'Toyota',
      model: 'Celica GT-Four',
      year: 1994,
      horsepower: 300,
      ptw: '.11 hp/lb', //power to weight, the higher the number the faster
      engine: 'Turbocharged 4 cylinder',
      curbWeight: "2,645 lb",
      sixty: '5.9s',
      hundred: '15.4s',
      topSpeed: '152 mph',
      photo: "assets/img/sx4.jpg"
    },
    {
      
        make: 'Acura',
        model: 'NSX',
        year: 1998,
        horsepower: 270,
        ptw: '.08 hp/lb', //power to weight, the higher the number the faster
        engine: 'V6',
        curbWeight: "3,164 lb",
        sixty: '5.3s',
        hundred: '12.7s',
        topSpeed: '172 mph',
        photo: "assets/img/nsx.jpg"
    }
  ]

  getGermanByMake(make: string) {
    return this.german.filter((car) => car.make === make);
  }

  getItalianByMake(make: string) {
    return this.italian.filter((car) => car.make === make);
  }
  
  getJapaneseByMake(make: string) {
    return this.japanese.filter((car) => car.make === make);
  }
  
  mouseEnter(div:string) {
    this.displayText = false;
  }
  mouseLeave(div:string) {
    this.displayText = true;
  }

  constructor() { }
}
