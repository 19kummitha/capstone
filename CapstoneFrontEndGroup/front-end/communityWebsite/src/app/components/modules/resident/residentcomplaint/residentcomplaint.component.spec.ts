import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResidentcomplaintComponent } from './residentcomplaint.component';

describe('ResidentcomplaintComponent', () => {
  let component: ResidentcomplaintComponent;
  let fixture: ComponentFixture<ResidentcomplaintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ResidentcomplaintComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResidentcomplaintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
