import { Component, Input } from '@angular/core';
@Component({
    selector:'collapsible-well',
    template:`
    <div class="well  pointable" (click)="toggleContent()">
        <h4>{{title}}</h4>
        <ng-content *ngIf="visible"></ng-content>
    <div>
    `
})
export class CollapsibleWellComponent{
    @Input() title:string;
    visible:boolean = true;
    toggleContent(){
        this.visible = !this.visible;
    }
}