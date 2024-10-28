import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AddResidentDto } from '../../../../Models/addresidentdto';
import { AddresidentService } from '../../../../services/addresident.service';

@Component({
  selector: 'app-addmembers',
  templateUrl: './addmembers.component.html',
  styleUrl: './addmembers.component.css'
})
export class AddmembersComponent {
  addResidentForm: FormGroup;
  successMessage = '';
  errorMessage = '';

  constructor(private residentService: AddresidentService, private fb: FormBuilder) {
    this.addResidentForm = this.fb.group({
      userName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      passwordHash: ['', Validators.required],
      flatNo: ['', Validators.required],
      name: ['', Validators.required],
      phoneNumber: ['', [Validators.required, Validators.pattern('[0-9]{10}')]]
    });
  }

  addResident(): void {
    if (this.addResidentForm.valid) {
      const resident: AddResidentDto = this.addResidentForm.value;

      this.residentService.addResident(resident).subscribe({
        next: () => {
          this.successMessage = 'Member added successfully!';
          this.resetForm();
        },
        error: (err) => {
          console.error('Error adding member:', err);
          this.errorMessage = 'Failed to add member. Please try again.';
        }
      });
    }
  }

  resetForm(): void {
    this.addResidentForm.reset();
    this.successMessage = '';
    this.errorMessage = '';
  }

  validateControl(controlName: string): boolean {
    const control = this.addResidentForm.get(controlName);
    return control?.invalid && (control.dirty || control.touched) ? true : false;
  }

  validateControlError(controlName: string, errorType: string): boolean {
    const control = this.addResidentForm.get(controlName);
    return control?.errors?.[errorType] ? true : false;
  }
}