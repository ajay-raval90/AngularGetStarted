import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EventsAppComponent } from './events-app.component';
import { EventsListComponent } from './events/events-list.component';
import { EventThumbnailComponent } from './events/event-thumbnail.component';
import { NavBarCompnent } from './nav/nav.component';
import { EventService } from './events/shared/event-service';
import { ToastrService } from './common/toastr-service';
import { JqService } from './common/jquery-service';
import { EventDetailsComponent } from "./events/event-details.component";
import { RouterModule } from "@angular/router";
import {routes} from './routes';
import {Error404Component} from './errors/404.component';
import {CreateEventComponent} from './events/create-event.component';
import {EventRouteActivator} from './events/event-route-activator'
import { EventRouteDeactivator } from './events/event-route-deactivator';
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
    providers: [EventService,ToastrService,JqService,EventRouteActivator,EventRouteDeactivator],
    bootstrap: [EventsAppComponent]
})
export class AppModule {

}