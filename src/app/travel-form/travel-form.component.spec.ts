import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelFormComponent } from './travel-form.component';

describe('TravelFormComponent', () => {
  let component: TravelFormComponent;
  let fixture: ComponentFixture<TravelFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TravelFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TravelFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render Hello! TRAVEL',()=>{
    const fixture=TestBed.createComponent(TravelFormComponent);
    fixture.detectChanges();
    const compiled=fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Hello,Travel');
  });


});


