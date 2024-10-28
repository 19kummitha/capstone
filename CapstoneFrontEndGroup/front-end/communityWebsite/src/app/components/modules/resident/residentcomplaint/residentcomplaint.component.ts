import { Component } from '@angular/core';
import { Complaint } from '../../../../Models/Complaint';
import { CreatecomplaintService } from '../../../../services/createcomplaint.service';

@Component({
  selector: 'app-residentcomplaint',
  templateUrl: './residentcomplaint.component.html',
  styleUrl: './residentcomplaint.component.css'
})
export class ResidentcomplaintComponent {
  complaint:Complaint={
    personName: '',
    flatNo: '',
    title: '',
    description: '',
    complaintId: 0,
    status: 0,
    residentId: ''
  };
  successMessage: string = '';
  errorMessage: string = '';
  constructor(private createComplaint:CreatecomplaintService ){}
  onSubmit(): void {
    if (this.complaint.personName && this.complaint.flatNo && this.complaint.title && this.complaint.description) {
      this.createComplaint.addComplaint(this.complaint).subscribe(
        (response) => {
          this.successMessage = 'Complaint added successfully!';
          this.errorMessage = '';
          this.clearForm();
        },
        (error) => {
          this.errorMessage = 'Failed to add complaint. Please try again.';
          this.successMessage = '';
        }
      );
    } else {
      this.errorMessage = 'All fields are required.';
    }
  }

  clearForm(): void {
    this.complaint = {
      personName: '',
    flatNo: '',
    title: '',
    description: '',
    complaintId: 0,
    status: 0,
    residentId: ''
    };
  }
}
