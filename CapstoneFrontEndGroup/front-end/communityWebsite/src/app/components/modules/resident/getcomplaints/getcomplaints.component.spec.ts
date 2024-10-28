import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetcomplaintsComponent } from './getcomplaints.component';

describe('GetcomplaintsComponent', () => {
  let component: GetcomplaintsComponent;
  let fixture: ComponentFixture<GetcomplaintsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GetcomplaintsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetcomplaintsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
