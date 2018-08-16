import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {
    EventsAppComponent,
    EventsListComponent,
    EventThumbnailComponent,
    EventDetailsComponent,
    CreateEventComponent,
    EventRouteActivator,
    EventRouteDeactivator,
    EventListResolver,
    CreateSessionComponent,
    SessionListComponent
} from './events/index'


import { NavBarCompnent } from './nav/nav.component';
import { EventService } from './events/shared/event-service';
import {
    TOASTR_TOKEN,
    JqService,
    CollapsibleWellComponent,
    LODASH_TOKEN,
    IToastr
} from './common/index';
import { RouterModule } from "@angular/router";
import { routes } from './routes';
import { Error404Component } from './errors/404.component';
import { AuthService } from "./user/auth.service";
import { ReactiveFormsModule, FormsModule } from "@angular/forms/";
import { DurationPipe } from "./events/shared/index";

declare let _: any
declare let toastr:IToastr
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
        CreateSessionComponent,
        SessionListComponent,
        CollapsibleWellComponent,
        DurationPipe
    ],
    providers: [EventService,
        JqService,
        EventRouteActivator,
        EventRouteDeactivator,
        EventListResolver,
        AuthService,
        { provide: LODASH_TOKEN, useValue : _ },
        { provide: TOASTR_TOKEN, useValue : toastr },
        
    ],
    bootstrap: [EventsAppComponent]
})
export class AppModule {

}