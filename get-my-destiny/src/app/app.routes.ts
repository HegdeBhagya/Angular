
import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { TravelListComponent } from './travels/travel-list.component';
import { BookingComponent } from './booking/booking.component';
import { TravelDetailsComponent } from './travel-details/travel-details.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { RegisterComponent} from './register/register.component';
import { TravelFormComponent } from './travel-form/travel-form.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';

export const routes: Routes = [
    {
        path:'',
        redirectTo: '/login',
        pathMatch: 'full'
    },
 
    {
        path:'home',
        component:HomeComponent
    },
 
    {
        path:'about-us',
        component:AboutUsComponent
    },
   
    {
        path:'travel-list',
        component:TravelListComponent
    },
    {
        path:'travel-details/:placeID',
        component:TravelDetailsComponent
    },

    {
        path:'contact-us',
        component:ContactUsComponent
    },

{
    path:'register',
    component:RegisterComponent

},
{
    path:'travel-details/:id/edit',
    component:TravelFormComponent
},
{
    path:'login',
    component:LoginComponent
},
{
    path:'dashboard',
    component:DashboardComponent
}
 
 
];


// import { Routes } from '@angular/router';
// import { HomeComponent } from './home/home.component';
// import { AboutUsComponent } from './about-us/about-us.component';
// import { TravelListComponent } from './travels/travel-list.component';
// import { TravelDetailsComponent } from './travel-details/travel-details.component';
// import { TravelFormComponent } from './travel-form/travel-form.component';

// export const routes: Routes = [
//     { path: '', redirectTo: '/home', pathMatch: 'full' },
//     { path: 'home', component: HomeComponent },
//     { path: 'about-us', component: AboutUsComponent },
//     { path: 'travel-list', component: TravelListComponent },
//     { path: 'travel-details/:placeID', component: TravelDetailsComponent },
//     { path: 'travel-details/:placeID/edit', component: TravelFormComponent },
// ];

