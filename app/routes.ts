import { Routes } from '@angular/router';
import { EventsListComponent } from './events/events-list.component';
import { EventDetailsComponent } from "./events/event-details.component";
import { Error404Component } from "./errors/404.component";
import {CreateEventComponent} from './events/create-event.component';
import {EventRouteActivator} from './events/event-route-activator'
import { EventRouteDeactivator } from './events/event-route-deactivator';
export const routes: Routes = [
    { path: 'events/new', component: CreateEventComponent,canDeactivate:[EventRouteDeactivator] },
    { path: 'events', component: EventsListComponent },
    { path: 'events/:id', component: EventDetailsComponent, canActivate:[EventRouteActivator] },
    { path: '404', component: Error404Component  },
    { path: '', redirectTo: '/events', pathMatch: 'full' }
];