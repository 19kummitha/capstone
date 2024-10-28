import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../../../services/login.service';

@Component({
  selector: 'app-serviceproviderheader',
  templateUrl: './serviceproviderheader.component.html',
  styleUrl: './serviceproviderheader.component.css'
})
export class ServiceproviderheaderComponent {
  userName:any;
  constructor(private router: Router, private loginService: LoginService) {}
  ngOnInit(): void {
    this.loadUserDetails();
  }
  loadUserDetails(){
    const token=localStorage.getItem('token');
    if(token)
    {
      const decodeToken=JSON.parse(atob(token.split('.')[1]));
      for(const key in decodeToken)
      {
        if(key.endsWith('/claims/name'))
        this.userName=decodeToken[key];
      }
    }
  }
  logout() {
  
    // Clear the token from localStorage
    localStorage.removeItem('token');
    
    // Optionally, clear any other user-specific data
    // this.loginService.clearUserData(); // If you have such a method

    // Redirect to login page
    this.router.navigate(['/login']);
  }
}
