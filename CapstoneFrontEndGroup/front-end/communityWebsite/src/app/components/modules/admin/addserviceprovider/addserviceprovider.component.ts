import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AddServiceProviderDto } from '../../../../Models/serviceproviderdto';
import { AddserviceproviderService } from '../../../../services/addserviceprovider.service';

@Component({
  selector: 'app-addserviceprovider',
  templateUrl: './addserviceprovider.component.html',
  styleUrls: ['./addserviceprovider.component.css']
})
export class AddserviceproviderComponent {
  addServiceForm: FormGroup;
  successMessage = '';
  errorMessage = '';

  constructor(private serviceProviderService: AddserviceproviderService, private fb: FormBuilder) {
    this.addServiceForm = this.fb.group({
      userName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      passwordHash: ['', Validators.required],
      serviceType: ['', Validators.required],
      name: ['', Validators.required],
      phoneNumber: ['', [Validators.required, Validators.pattern('[0-9]{10}')]]
    });
  }

  addServiceProvider(): void {
    if (this.addServiceForm.valid) {
      const serviceProvider: AddServiceProviderDto = this.addServiceForm.value;

      this.serviceProviderService.addServiceProvider(serviceProvider).subscribe({
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
    this.addServiceForm.reset();
    this.successMessage = '';
    this.errorMessage = '';
  }

  validateControl(controlName: string): boolean {
    const control = this.addServiceForm.get(controlName);
    return control?.invalid && (control.dirty || control.touched) ? true : false;
  }

  validateControlError(controlName: string, errorType: string): boolean {
    const control = this.addServiceForm.get(controlName);
    return control?.errors?.[errorType] ? true : false;
  }
}
