import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {userRoutes}from './user.routes';
import {ProfileComponent}from './profile.component';

@NgModule({
    imports:[
        CommonModule,
        RouterModule.forChild(userRoutes)
    ],
    providers:[

    ],
    declarations:[
        ProfileComponent
    ]
})
export class UserModule{}
