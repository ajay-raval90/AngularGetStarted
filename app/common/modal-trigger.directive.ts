import { Directive, OnInit, Inject, ElementRef } from '@angular/core'
import { JQ_TOKEN } from "./index";

@Directive({
    selector: '[modal-trigger]',
})
export class ModalTriggerDirective implements OnInit {
    private el: HTMLElement;
    private jqueryEl :any;

    constructor(@Inject(JQ_TOKEN) private $: any, ref: ElementRef) {
        this.el = ref.nativeElement;
        this.jqueryEl = this.$(this.el);
    }
    ngOnInit(): void {
        this.jqueryEl.on("click",()=>{
            this.$("#simple-modal").modal({});
        });
    }
    
}