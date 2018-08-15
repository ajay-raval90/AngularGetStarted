import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{
EventsAppComponent,
EventsListComponent,
EventThumbnailComponent,
EventDetailsComponent,
CreateEventComponent,
EventRouteActivator,
EventRouteDeactivator,
EventListResolver,
CreateSessionComponent
} from './events/index'


import { NavBarCompnent } from './nav/nav.component';
import { EventService } from './events/shared/event-service';
import { ToastrService } from './common/toastr-service';
import { JqService } from './common/jquery-service';
import {  } from "./events/event-details.component";
import { RouterModule } from "@angular/router";
import {routes} from './routes';
import {Error404Component} from './errors/404.component';
import { AuthService } from "./user/auth.service";
import { ReactiveFormsModule, FormsModule } from "@angular/forms/";
@NgModule({
    imports: [BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule
    ],
    declarations: [
        EventsAppComponent,
        EventsListComponent,
        EventThumbnailComponent,
        NavBarCompnent,
        EventDetailsComponent,
        Error404Component,
        CreateEventComponent,
        CreateSessionComponent
    ],
    providers: [EventService,
    ToastrService,
    JqService,
    EventRouteActivator,
    EventRouteDeactivator,
    EventListResolver,
    AuthService
    ],
    bootstrap: [EventsAppComponent]
})
export class AppModule {

}