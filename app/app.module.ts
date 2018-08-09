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
EventListResolver
} from './events/index'


import { NavBarCompnent } from './nav/nav.component';
import { EventService } from './events/shared/event-service';
import { ToastrService } from './common/toastr-service';
import { JqService } from './common/jquery-service';
import {  } from "./events/event-details.component";
import { RouterModule } from "@angular/router";
import {routes} from './routes';
import {Error404Component} from './errors/404.component';
@NgModule({
    imports: [BrowserModule,
    RouterModule.forRoot(routes)
    ],
    declarations: [
        EventsAppComponent,
        EventsListComponent,
        EventThumbnailComponent,
        NavBarCompnent,
        EventDetailsComponent,
        Error404Component,
        CreateEventComponent
    ],
    providers: [EventService,
    ToastrService,
    JqService,
    EventRouteActivator,
    EventRouteDeactivator,
    EventListResolver],
    bootstrap: [EventsAppComponent]
})
export class AppModule {

}