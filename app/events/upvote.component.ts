import {Component,EventEmitter, Output, Input} from '@angular/core'
@Component({
    selector:'upvote',
    template:`
    <div class="voteingWidgetContainer pointable" (click)="onClick()">
        <div class="well votingWidget">
            <i *ngIf="voted" class="glyphicon glyphicon-heart"></i>
            <i *ngIf="!voted" class="glyphicon glyphicon-heart-empty"></i>
        <div>
        <div class="badge badge-invers votingCount">
            <div>{{count}}</div>
        </div>
    </div>
    `,
    styleUrls:[
        `app/events/upvote.component.css`
    ]
})
export class UpvoteComponet
{
    @Output() vote = new EventEmitter();
    @Input() count:number;
    @Input() voted:boolean;

    onClick(){
        this.vote.emit({});
    }
}
