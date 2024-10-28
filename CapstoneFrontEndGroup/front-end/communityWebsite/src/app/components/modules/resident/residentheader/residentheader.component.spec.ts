import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResidentheaderComponent } from './residentheader.component';

describe('ResidentheaderComponent', () => {
  let component: ResidentheaderComponent;
  let fixture: ComponentFixture<ResidentheaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ResidentheaderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResidentheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
