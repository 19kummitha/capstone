import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';

import { AuthGuard } from './guards/auth.guard';

import { AdmindashboardComponent } from './components/modules/admin/admindashboard/admindashboard.component';
import { AdmincontactComponent } from './components/modules/admin/admincontact/admincontact.component';
import { AdminComponent } from './components/modules/admin/admin.component';
import { ResidentComponent } from './components/modules/resident/resident.component';
import { ServiceproviderComponent } from './components/modules/serviceprovider/serviceprovider.component';
import { ViewmembersComponent } from './components/modules/admin/viewmembers/viewmembers.component';
import { AddmembersComponent } from './components/modules/admin/addmembers/addmembers.component';
import { RequestserviceComponent } from './components/modules/shared/requestservice/requestservice.component';
import { AddserviceproviderComponent } from './components/modules/admin/addserviceprovider/addserviceprovider.component';
import { CreatepostComponent } from './components/modules/admin/createpost/createpost.component';

import { SendnotificationsComponent } from './components/modules/admin/sendnotifications/sendnotifications.component';
import { ViewcomplaintsComponent } from './components/modules/admin/viewcomplaints/viewcomplaints.component';

import { AddeventsComponent } from './components/modules/admin/addevents/addevents.component';
import { ResidentdashboardComponent } from './components/modules/resident/residentdashboard/residentdashboard.component';
import { ServiceproviderdashboardComponent } from './components/modules/serviceprovider/serviceproviderdashboard/serviceproviderdashboard.component';


import { ResidentcomplaintComponent } from './components/modules/resident/residentcomplaint/residentcomplaint.component';

import { ViewrequestComponent } from './components/modules/serviceprovider/viewrequest/viewrequest.component';

import { GetcomplaintsComponent } from './components/modules/resident/getcomplaints/getcomplaints.component';
import { EventsComponent } from './components/modules/shared/events/events.component';
import { PostsComponent } from './components/modules/shared/posts/posts.component';
import { ServicesComponent } from './components/modules/shared/services/services.component';
import { SharedcontactComponent } from './components/modules/shared/sharedcontact/sharedcontact.component';
import { WeatherComponent } from './components/modules/shared/weather/weather.component';



const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  {
    path: 'dashboard/admin',
    component: AdminComponent,
    children: [
      { path: '', component: AdmindashboardComponent },
      { path: 'viewmembers', component: ViewmembersComponent },
      { path: 'addmembers', component: AddmembersComponent },
      { path: 'requestservice', component: RequestserviceComponent },
      { path: 'addserviceprovider', component: AddserviceproviderComponent },
      { path: 'createpost', component: CreatepostComponent },
      { path: 'viewpost', component: PostsComponent },
      { path: 'sendnotification', component: SendnotificationsComponent },
      { path: 'viewevents', component: EventsComponent },
      { path: 'addevents', component: AddeventsComponent },
      { path: 'complaints', component: ViewcomplaintsComponent },
      { path: 'admincontact', component: AdmincontactComponent },
      { path: 'weather',component:WeatherComponent},
      { path: 'viewservices', component: ServicesComponent}
    ],
    canActivate: [AuthGuard],
    data: { role: 'Admin' }
  },

  {
    path: 'dashboard/resident',
    component: ResidentComponent,
    children: [
      { path: '', component: ResidentdashboardComponent },
      { path: 'viewpost', component: PostsComponent },
      { path: 'viewevents', component: EventsComponent },
      { path: 'requestservice', component: RequestserviceComponent },
      {path: 'residentcontact', component: SharedcontactComponent},
      {path:'complaints',component: ResidentcomplaintComponent},
      { path: 'viewservices', component: ServicesComponent},
      { path: 'weather',component:WeatherComponent},
      { path: 'getcomplaints', component: GetcomplaintsComponent}
    ],
    canActivate: [AuthGuard],
    data: { role: 'User' }
  },




  {
    path: 'dashboard/serviceprovider',
    component: ServiceproviderComponent,
    children: [
      { path: '', component: ServiceproviderdashboardComponent },
      { path: 'viewpost', component: PostsComponent },
      { path: 'serviceprovidercontact',component:SharedcontactComponent},
      { path: 'weather',component:WeatherComponent},
      {path:'viewrequest',component:ViewrequestComponent}
    ], 
    canActivate: [AuthGuard],
    data: {
      role: 'ServiceProvider'
    }
  },
  { path: '**', redirectTo: '', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
