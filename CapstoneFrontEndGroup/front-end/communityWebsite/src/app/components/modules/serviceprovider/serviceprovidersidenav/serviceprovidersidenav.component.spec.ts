import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceprovidersidenavComponent } from './serviceprovidersidenav.component';

describe('ServiceprovidersidenavComponent', () => {
  let component: ServiceprovidersidenavComponent;
  let fixture: ComponentFixture<ServiceprovidersidenavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ServiceprovidersidenavComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceprovidersidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
