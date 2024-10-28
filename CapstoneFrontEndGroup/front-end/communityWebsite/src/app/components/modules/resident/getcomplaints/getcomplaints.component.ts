import { Component, OnInit } from '@angular/core';
import { catchError, map } from 'rxjs';
import { Complaint } from '../../../../Models/Complaint';
import { ResidentcomplaintService } from '../../../../services/residentcomplaint.service';

@Component({
  selector: 'app-getcomplaints',
  templateUrl: './getcomplaints.component.html',
  styleUrl: './getcomplaints.component.css'
})
export class GetcomplaintsComponent implements OnInit {
  complaints: Complaint[]=[];
  error: any;

  constructor(private complaintService: ResidentcomplaintService) { }

  ngOnInit(): void {
    this.complaintService.getComplaintsByResident().subscribe((complaints) => {
      this.complaints = complaints;
    });
  }
  deleteComplaint(complaintId:number):void{
    this.complaintService.deleteComplaint(complaintId).pipe(
      catchError((error)=>{
        this.error='Failed to delete complaint';
        return this.error;
      })
      ).subscribe(()=>{
        const index = this.complaints.findIndex(complaint => complaint.complaintId === complaintId);
    if (index !== -1) {
      this.complaints.splice(index, 1);
      }
    }
      )
  }
}
