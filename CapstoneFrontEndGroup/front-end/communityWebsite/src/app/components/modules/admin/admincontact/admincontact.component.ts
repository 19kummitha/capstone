import { Component } from '@angular/core';

@Component({
  selector: 'app-admincontact',
  templateUrl: './admincontact.component.html',
  styleUrl: './admincontact.component.css'
})
export class AdmincontactComponent {
  adminContact = {
    name: 'Bharath Kumar',
    email: 'bharathk@example.com',
    phoneNumber: '+91 9897969594'
  };
}
