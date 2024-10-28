import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RequestServiceDto } from '../../../../Models/requestService';
import { EventsService } from '../../../../services/events.service';
import { LoginService } from '../../../../services/login.service';
import { RequestService } from '../../../../services/request.service';


@Component({
  selector: 'app-residentdashboard',
  templateUrl: './residentdashboard.component.html',
  styleUrls: ['./residentdashboard.component.css']
})
export class ResidentdashboardComponent implements OnInit {
  userName: string = '';
  totalNoOfRequests: number = 0;
  requests: any;
  upcomingEventsCount: number = 0;

  constructor(
    private router: Router,
    private loginService: LoginService,
    private requestService: RequestService,
    private eventService: EventsService
  ) {}

  ngOnInit(): void {
    this.loadUserDetails();
    this.getAllRequests();
    this.getUpcomingEvents();
  }

  loadUserDetails() {
    const token = localStorage.getItem('token');
    if (token) {
      const decodeToken = JSON.parse(atob(token.split('.')[1]));
      for (const key in decodeToken) {
        if (key.endsWith('/claims/name')) {
          this.userName = decodeToken[key];
        }
      }
    }
  }

  getAllRequests() {
    this.requestService.getAllRequests().subscribe(
      (response) => {
        this.requests = response;
        this.totalNoOfRequests = this.requests.length;
      },
      (error) => {
        console.error('Error fetching requests:', error);
      }
    );
  }
  getUpcomingEvents() {
    this.eventService.getEvents().subscribe((response: any[]) => {
      console.log('Response:', response);
      const today = new Date();
      const upcomingEvents = response.filter((event: { startDate: string | number | Date }) => new Date(event.startDate) >= today);
      console.log('Upcoming events:', upcomingEvents);
      this.upcomingEventsCount = upcomingEvents.length;
    });
  }
}
