import { Component, Input } from '@angular/core'
import { ISession } from "./shared/index";
@Component({
    selector:'session-list',
    templateUrl:'app/events/session-list.component.html'
})
export class SessionListComponent
{
    @Input() sessions : ISession[];
}