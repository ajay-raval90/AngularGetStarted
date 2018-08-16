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
    ToastrService,
    JqService,
    CollapsibleWellComponent,
    LODASH_TOKEN
} from './common/index';
import { RouterModule } from "@angular/router";
import { routes } from './routes';
import { Error404Component } from './errors/404.component';
import { AuthService } from "./user/auth.service";
import { ReactiveFormsModule, FormsModule } from "@angular/forms/";
import { DurationPipe } from "./events/shared/index";

declare let _: any

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
        ToastrService,
        JqService,
        EventRouteActivator,
        EventRouteDeactivator,
        EventListResolver,
        AuthService,
        { provide: LODASH_TOKEN, useValue : _ }
    ],
    bootstrap: [EventsAppComponent]
})
export class AppModule {

}