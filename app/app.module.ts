import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EventsAppComponent } from './events-app.component';
import { EventsListComponent } from './events/events-list.component';
import { EventThumbnailComponent } from './events/event-thumbnail.component';
import { NavBarCompnent } from './nav/nav.component';
import { EventService } from './events/shared/event-service';
@NgModule({
    imports: [BrowserModule],
    declarations: [
        EventsAppComponent,
        EventsListComponent,
        EventThumbnailComponent,
        NavBarCompnent
    ],
    providers: [EventService],
    bootstrap: [EventsAppComponent]
})
export class AppModule {

}