import {Injectable} from '@angular/core';

declare let toastr : any
@Injectable()
export class ToastrService
{
    suceess(message){
        toastr.success(message)
    }
    warning(message){
        toastr.warning(message)
    }
    error(message){
        toastr.error(message)
    }
}