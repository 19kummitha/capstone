import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { SignupComponent } from './components/signup/signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideHttpClient } from '@angular/common/http';

import { LoginComponent } from './components/login/login.component';


import { AdminComponent } from './components/modules/admin/admin.component';
import { AdmindashboardComponent } from './components/modules/admin/admindashboard/admindashboard.component';
import { AdminheaderComponent } from './components/modules/admin/adminheader/adminheader.component';

import { AdminsidenavComponent } from './components/modules/admin/adminsidenav/adminsidenav.component';
import { AdmincontactComponent } from './components/modules/admin/admincontact/admincontact.component';
import { ResidentComponent } from './components/modules/resident/resident.component';
import { ServiceproviderComponent } from './components/modules/serviceprovider/serviceprovider.component';
import { ViewcomplaintsComponent } from './components/modules/admin/viewcomplaints/viewcomplaints.component';
import { SendnotificationsComponent } from './components/modules/admin/sendnotifications/sendnotifications.component';
import { CreatepostComponent } from './components/modules/admin/createpost/createpost.component';

import { RequestserviceComponent } from './components/modules/shared/requestservice/requestservice.component';
import { AddserviceproviderComponent } from './components/modules/admin/addserviceprovider/addserviceprovider.component';
import { ViewmembersComponent } from './components/modules/admin/viewmembers/viewmembers.component';
import { AddmembersComponent } from './components/modules/admin/addmembers/addmembers.component';
import { ResidentheaderComponent } from './components/modules/resident/residentheader/residentheader.component';

import { ResidentsidenavComponent } from './components/modules/resident/residentsidenav/residentsidenav.component';
import { ServiceproviderheaderComponent } from './components/modules/serviceprovider/serviceproviderheader/serviceproviderheader.component';

import { ServiceprovidersidenavComponent } from './components/modules/serviceprovider/serviceprovidersidenav/serviceprovidersidenav.component';
import { AddeventsComponent } from './components/modules/admin/addevents/addevents.component';
import { ResidentdashboardComponent } from './components/modules/resident/residentdashboard/residentdashboard.component';
import { ServiceproviderdashboardComponent } from './components/modules/serviceprovider/serviceproviderdashboard/serviceproviderdashboard.component';
import { ResidentcomplaintComponent } from './components/modules/resident/residentcomplaint/residentcomplaint.component';
import { ViewrequestComponent } from './components/modules/serviceprovider/viewrequest/viewrequest.component';
import { GetcomplaintsComponent } from './components/modules/resident/getcomplaints/getcomplaints.component';
import { DashboardfooterComponent } from './components/modules/shared/dashboardfooter/dashboardfooter.component';
import { PostsComponent } from './components/modules/shared/posts/posts.component';
import { EventsComponent } from './components/modules/shared/events/events.component';
import { ServicesComponent } from './components/modules/shared/services/services.component';
import { SharedcontactComponent } from './components/modules/shared/sharedcontact/sharedcontact.component';
import { WeatherComponent } from './components/modules/shared/weather/weather.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    SignupComponent,
    LoginComponent,
    AdmindashboardComponent,
    AdminheaderComponent,
    
    AdminsidenavComponent,
    AdmincontactComponent,
    AdminComponent,
    AdminComponent,
    ResidentComponent,
    ServiceproviderComponent,
    ViewcomplaintsComponent,
    SendnotificationsComponent,
    CreatepostComponent,
   
    RequestserviceComponent,
    AddserviceproviderComponent,
    ViewmembersComponent,
    AddmembersComponent,
    ResidentheaderComponent,
   
    ResidentsidenavComponent,
    ServiceproviderheaderComponent,
   
    ServiceprovidersidenavComponent,
   
    AddeventsComponent,
    ResidentdashboardComponent,
    ServiceproviderdashboardComponent,
   
    ResidentcomplaintComponent,
    ViewrequestComponent,
    
    GetcomplaintsComponent,
    DashboardfooterComponent,
    PostsComponent,
    EventsComponent,
    ServicesComponent,
    SharedcontactComponent,
    WeatherComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
    
  ],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent]
})
export class AppModule { }
