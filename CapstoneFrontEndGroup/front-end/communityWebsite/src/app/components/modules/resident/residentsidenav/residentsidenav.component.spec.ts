import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResidentsidenavComponent } from './residentsidenav.component';

describe('ResidentsidenavComponent', () => {
  let component: ResidentsidenavComponent;
  let fixture: ComponentFixture<ResidentsidenavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ResidentsidenavComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResidentsidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
