import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

<<<<<<< HEAD
  it(`should have as title 'AngularVehicleShowcase'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('AngularVehicleShowcase');
=======
  it(`should have as title 'final'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('final');
>>>>>>> 5c88925dc02647c58aff11a445ae19483214c383
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
<<<<<<< HEAD
    expect(compiled.querySelector('.content span').textContent).toContain('AngularVehicleShowcase app is running!');
=======
    expect(compiled.querySelector('.content span').textContent).toContain('final app is running!');
>>>>>>> 5c88925dc02647c58aff11a445ae19483214c383
  });
});
