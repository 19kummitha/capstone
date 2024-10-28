import { Component } from '@angular/core';
import { RequestService } from '../../../../services/request.service';

@Component({
  selector: 'app-requestservice',
  templateUrl: './requestservice.component.html',
  styleUrl: './requestservice.component.css'
})
export class RequestserviceComponent {
  request = {
    residentName: '',
    serviceType: '',
    serviceDescription: '',
    flatNo: ''
  };
  message: string | null = null;
  serviceTypes: string[] = ['Plumbing', 'Electrical', 'Cleaning', 'Carpentry', 'Painting']
  constructor(private requestService:RequestService){}
  onSubmit(): void {
    this.requestService.createRequest(this.request).subscribe({
      next: response => {
        this.message = 'Service request created successfully';
        this.resetForm();
      },
      error: err => {
        this.message = 'Failed to create service request';
        console.error(err);
      }
    });
  }
  resetForm():void {
    this.request = {
      residentName: '',
      serviceType: '',
      serviceDescription: '',
      flatNo: ''
    };
  }
}
