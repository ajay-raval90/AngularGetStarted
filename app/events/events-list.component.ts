import { Component,OnInit } from '@angular/core'
import {EventService} from './shared/event-service'
import { ToastrService } from '../common/toastr-service'

@Component({
    selector: 'events-list',
    template: `<div>
                <h1>Upcoming Angular Events</h1>
                <hr/>
                <div class="row" >
                    <div (click)="showEventName(event?.name)" class="col-md-5" *ngFor="let event of events">
                        <event-thumbnail  [event]="event"></event-thumbnail>
                    </div>
                </div>
            </div>`,
})
export class EventsListComponent implements OnInit{
    events:any[];
    constructor(private eventServcice:EventService,private toastrService:ToastrService) {
    }
    ngOnInit(){
        this.events = this.eventServcice.getEvents();
    }
    showEventName(name)
    {
      this.toastrService.suceess(name);
    }
}