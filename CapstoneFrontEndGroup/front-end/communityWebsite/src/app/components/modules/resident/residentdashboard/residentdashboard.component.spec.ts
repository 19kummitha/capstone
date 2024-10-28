import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResidentdashboardComponent } from './residentdashboard.component';

describe('ResidentdashboardComponent', () => {
  let component: ResidentdashboardComponent;
  let fixture: ComponentFixture<ResidentdashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ResidentdashboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResidentdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
