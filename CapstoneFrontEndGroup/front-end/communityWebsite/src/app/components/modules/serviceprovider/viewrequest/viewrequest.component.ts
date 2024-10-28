import { Component, OnInit } from '@angular/core';
import { RequestServiceDto } from '../../../../Models/requestService';
import { ViewrequestService } from '../../../../services/viewrequest.service';

@Component({
  selector: 'app-viewrequest',
  templateUrl: './viewrequest.component.html',
  styleUrl: './viewrequest.component.css'
})
export class ViewrequestComponent implements OnInit{
  serviceRequests: RequestServiceDto[] = [];
  residentId?: string;
  errorMessage: string | null = null;
  constructor(private viewrequestService:ViewrequestService){}
  ngOnInit(): void {
    this.getServiceRequests();
  }
  getServiceRequests() {
    this.viewrequestService.getAllServiceRequests(this.residentId).subscribe(
      (requests:RequestServiceDto[])=>{
        this.serviceRequests=requests;
      },
      (error)=>{

        this.errorMessage="error while fetching requests";
      }
    );
  }
  fetchRequestsByResidentId(residentId?: string): void {
    if (residentId && residentId.trim()) {
      this.residentId = residentId;
      this.getServiceRequests();
    } else {
      this.errorMessage = 'Please enter a valid Resident ID.';
    }
  }
  
}
