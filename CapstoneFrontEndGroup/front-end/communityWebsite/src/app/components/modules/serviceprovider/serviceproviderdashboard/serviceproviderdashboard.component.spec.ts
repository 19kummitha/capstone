import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceproviderdashboardComponent } from './serviceproviderdashboard.component';

describe('ServiceproviderdashboardComponent', () => {
  let component: ServiceproviderdashboardComponent;
  let fixture: ComponentFixture<ServiceproviderdashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ServiceproviderdashboardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceproviderdashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
