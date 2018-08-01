import { Component } from '@angular/core';

@Component({
    selector:'events-list',
    templateUrl:'app/events/events-list.component.html'
})
export class EventsListComponent{
    event= {
        id:1,
        name:'Angular Connect',
        date:'09/26/2036',
        time:"10:00 AM",
        price:599.99,
        imageurl:'app/assets/images/angularconnect-shield.png',
        location:{
            address:'1057 DT',
            city:'London',
            country:'England'

        }
    }
}