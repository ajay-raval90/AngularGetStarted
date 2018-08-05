import {Injectable} from '@angular/core'
declare let jQuery :any
@Injectable()
export class JqService{
    _$:any = jQuery;
    
}