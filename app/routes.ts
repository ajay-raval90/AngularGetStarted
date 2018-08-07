import { Routes } from '@angular/router';
import { EventsListComponent } from './events/events-list.component';
import { EventDetailsComponent } from "./events/event-details.component";
import { Error404Component } from "./errors/404.component";
import {CreateEventComponent} from './events/create-event.component';
export const routes: Routes = [
    { path: 'events/new', component: CreateEventComponent },
    { path: 'events', component: EventsListComponent },
    { path: 'events/:id', component: EventDetailsComponent },
    { path: '404', component: Error404Component  },
    { path: '', redirectTo: '/events', pathMatch: 'full' }
];