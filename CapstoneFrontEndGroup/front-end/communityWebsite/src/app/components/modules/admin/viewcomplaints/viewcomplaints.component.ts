import { Component, OnInit } from '@angular/core';
import { Complaint } from '../../../../Models/Complaint';
import { ViewcomplaintService } from '../../../../services/viewcomplaint.service';

@Component({
  selector: 'app-viewcomplaints',
  templateUrl: './viewcomplaints.component.html',
  styleUrl: './viewcomplaints.component.css'
})
export class ViewcomplaintsComponent implements OnInit {
  complaints: Complaint[] = [];
  errorMessage:string='';
  residentId?:string;
  constructor(private complaintService:ViewcomplaintService){}
  ngOnInit(): void {
    this.loadComplaints();
  }
  loadComplaints() {
    this.complaintService.getComplaints(this.residentId).subscribe(
      (data: Complaint[]) => {
        this.complaints = data;
      },
      (error) => {
        console.error('Error fetching complaints:', error);
        this.errorMessage = 'Failed to fetch complaints. Please check the backend and endpoint URL.';
      }
    );
  
  
  }
  deleteComplaint(complaintId: number) {
    if (confirm('Are you sure you want to delete this complaint?')) {
      this.complaintService.deleteComplaint(complaintId).subscribe(
        () => {
          this.complaints = this.complaints.filter(c => c.complaintId !== complaintId);
          alert('Complaint deleted successfully.');
        },
        (error) => {
          console.error('Error deleting complaint:', error);
          this.errorMessage = 'Failed to delete complaint. Please try again.';
        }
      );
    }
  }
  updateComplaintStatus(complaint: Complaint) {
    const newStatus = complaint.status === 1 ? 0 : 1; 
    if (confirm('Are you sure you want to update the status of this complaint?')) {
      this.complaintService.updateComplaintStatus(complaint.complaintId, newStatus).subscribe(
        () => {
          complaint.status = newStatus; 
          alert('Complaint status updated successfully.');
        },
        (error) => {
          console.error('Error updating complaint status:', error);
          this.errorMessage = 'Failed to update complaint status. Please try again.';
        }
      );
    }
  }

}
