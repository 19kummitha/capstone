import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceproviderheaderComponent } from './serviceproviderheader.component';

describe('ServiceproviderheaderComponent', () => {
  let component: ServiceproviderheaderComponent;
  let fixture: ComponentFixture<ServiceproviderheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ServiceproviderheaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceproviderheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
