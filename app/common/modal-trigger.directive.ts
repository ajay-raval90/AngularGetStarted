import { Directive, OnInit, Inject, ElementRef } from '@angular/core'
import { JQ_TOKEN } from "./index";

declare let $ :any;
@Directive({
    selector: '[modal-trigger]',
})
export class ModalTriggerDirective implements OnInit {
    private el: HTMLElement;
    private jqueryEl :any;

    constructor(@Inject(JQ_TOKEN) private jQuery: any, ref: ElementRef) {
        $ = this.jQuery;
        this.el = ref.nativeElement;
        this.jqueryEl = $(this.el);
    }
    ngOnInit(): void {
        this.jqueryEl.on("click",function(){ 
            $("#simple-modal").modal({});
        })
    }

}
