import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedcontactComponent } from './sharedcontact.component';

describe('SharedcontactComponent', () => {
  let component: SharedcontactComponent;
  let fixture: ComponentFixture<SharedcontactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SharedcontactComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SharedcontactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
