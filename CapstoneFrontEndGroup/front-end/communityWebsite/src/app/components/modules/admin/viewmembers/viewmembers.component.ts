import { Component } from '@angular/core';
import { catchError, map, of } from 'rxjs';
import { ResidentDto } from '../../../../Models/residentDto';
import { ResidentService } from '../../../../services/resident.service';

@Component({
  selector: 'app-viewmembers',
  templateUrl: './viewmembers.component.html',
  styleUrl: './viewmembers.component.css'
})
export class ViewmembersComponent {
  residents:ResidentDto[]=[];
  loading=true;
  error:string|null=null;
  constructor(private residentService:ResidentService){}
  ngOnInit(){
    this.loadresidents();
  }
  loadresidents():void{
    this.residentService.getAllResidents().pipe(
      map((response: { residents: ResidentDto[] }) => response.residents),
      catchError((error) => {
        console.error('Error fetching residents:', error);
        this.error = 'Failed to load residents. Please try again later.';
        this.loading = false; 
        return of([]); 
      })
    ).subscribe({
      next: (residents: ResidentDto[]) => {
        this.residents = residents;
        this.loading = false;
      },
      error: () => {
        this.loading = false; 
      }
    });
  }
  deleteResident(id: string): void {
    this.residentService.deleteResident(id).pipe(
      catchError((error) => {
        console.error('Error deleting resident:', error);
        this.error = 'Failed to delete resident. Please try again later.';
        return of(void 0);
      })
    ).subscribe(() => {
      this.residents = this.residents.filter(resident => resident.id !== id);
    });
 
  }

}
