import { Component } from '@angular/core';
import { AddResidentDto } from '../../../../Models/addresidentdto';
import { Complaint } from '../../../../Models/Complaint';
import { ResidentDto } from '../../../../Models/residentDto';
import { AddServiceProviderDto } from '../../../../Models/serviceproviderdto';
import { ResidentService } from '../../../../services/resident.service';
import { ViewcomplaintService } from '../../../../services/viewcomplaint.service';
import { ViewserviceService } from '../../../../services/viewservice.service';

@Component({
  selector: 'app-admindashboard',
  templateUrl: './admindashboard.component.html',
  styleUrl: './admindashboard.component.css'
})
export class AdmindashboardComponent {
  totalServiceProviders: number = 0;
  serviceProviders: AddServiceProviderDto[] = [];
  totalResidents:number=0;
  resident:ResidentDto[]=[];
  totalComplaints:number=0;
  complaints:Complaint[]=[];

  constructor(private viewService: ViewserviceService,private residentService:ResidentService,private complaintService:ViewcomplaintService) {}

  ngOnInit(): void {
    this.getAllServiceProviders();
    this.getAllResidents();
    this.getComplaints();
  }
  getComplaints() {
    this.complaintService.getComplaints().subscribe(
      (response)=>{
        this.complaints=response;
        this.totalComplaints=this.complaints.length;
      },
      (error) => {
        console.error('Error fetching service providers:', error);
      }
    );
  }
  getAllResidents() {
    this.residentService.getAllResidents().subscribe(
      (response)=>
      {
        this.resident=response.residents;
        this.totalResidents=this.resident.length;
      },
      (error) => {
        console.error('Error fetching service providers:', error);
      }
    );

  }

  getAllServiceProviders(): void {
    this.viewService.getAllServiceProviders().subscribe(
      (response) => {
        this.serviceProviders = response.service;
        this.totalServiceProviders = this.serviceProviders.length;  // Calculate total count
      },
      (error) => {
        console.error('Error fetching service providers:', error);
      }
    );
  }
}
