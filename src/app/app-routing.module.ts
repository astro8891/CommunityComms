import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'


//Volunteer
import { VolunteerSignupComponent } from './VolunteerSignup/volunteer-signup.component';
import { VolunteerQueryComponent } from './Volunteer-query/volunteer-query.component'
import { VolunteerListComponent } from './VolunteerList/volunteer-list.component'

//Jobs
import { JobSignupComponent } from './JobSignup/job-signup.component';
import { JobListComponent } from './JobList/job-list.component'
import { JobEditComponent } from './JobEdit/job-edit.component'


//Orginisations
import { OrganisationSignupComponent } from './OrganisationSignup/organisation-signup.component';

const appRoutes: Routes = [
    { path: 'VolunteerSignup', component: VolunteerSignupComponent },
    { path: 'VolunteerQuery', component: VolunteerQueryComponent },
    { path: 'VolunteerList', component: VolunteerListComponent },
    { path: 'JobSignup', component: JobSignupComponent },
    { path: 'JobList', component: JobListComponent },
    { path: 'JobEdit', component: JobEditComponent },

    { path: 'OrginisationSignup', component: OrganisationSignupComponent },
    { path: '', redirectTo: '/VolunteerList', pathMatch: 'full'}
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
