import { Component } from '@angular/core';
import { AddServiceProviderDto } from '../../../../Models/serviceproviderdto';
import { ViewserviceService } from '../../../../services/viewservice.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {
  serviceProviders: AddServiceProviderDto[] = [];
  error: string | null = null;

  constructor(private serviceProvider: ViewserviceService) {}

  ngOnInit(): void {
    this.loadServiceProviders();
  }

  loadServiceProviders() {
    this.serviceProvider.getAllServiceProviders().subscribe(
      (response) => {
        this.serviceProviders = response.service || [];
      },
      (error) => {
        console.error('Error fetching service providers:', error);
        this.error = 'Failed to load service providers. Please try again later.';
      }
    );
  }
}
