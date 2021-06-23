import { Component, OnInit, TemplateRef,ChangeDetectorRef, } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { combineLatest, Subscription } from 'rxjs';
declare var $: any;  // Declaring $ as a variable so that we can use it to access jQuery
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  header_title:string = '';
  modalRef?:BsModalRef;
  subscriptions: Subscription[] = [];
  messages: string[] = [];
  constructor(private route: ActivatedRoute,
    private titleService: Title,
    private modalService: BsModalService,
    private changeDetection: ChangeDetectorRef
    ) { }
  
  runSlider(){
    var valMap = [5, 10, 15, 20, 25];

    $("#slider").slider({
            max: valMap.length - 1,
            slide: function(event:any, ui:any) {
                $("#radiusAmount").val(valMap[ui.value]);
            }
        })
        .each(function() {

            var opt = $(this).data().uiSlider.options;

            var vals = opt.max - opt.min;


            var arrayLength = valMap.length;
            for (var i = 0; i < arrayLength; i++) {

                var el = $('<label>' + (valMap[i]) + '</label>').css('left', (i / vals * 100) + '%');

                $("#slider").append(el);

            }

        });
  }
  
  ngOnInit(): void {
    this.header_title = this.route.snapshot.data['title'];
    this.titleService.setTitle(this.header_title);
    this.runSlider(); 
  }

  openModal(template: TemplateRef<any>) {

    this.messages = [];
 
    const _combine = combineLatest(
      this.modalService.onShow,
      this.modalService.onShown,
      this.modalService.onHide,
      this.modalService.onHidden
    ).subscribe(() => this.changeDetection.markForCheck());
 
    this.subscriptions.push(
      this.modalService.onShow.subscribe(() => {
        this.messages.push(`onShow event has been fired`);
        
      })
    );
    this.subscriptions.push(
      this.modalService.onShown.subscribe(() => {
        this.messages.push(`onShown event has been fired`);
        this.runSlider(); 
      })
    );
    this.subscriptions.push(
      this.modalService.onHide.subscribe((reason: string | any) => {
        if (typeof reason !== 'string') {
          reason = `onHide(), modalId is : ${reason.id}`;
        }
        const _reason = reason ? `, dismissed by ${reason}` : '';
        this.messages.push(`onHide event has been fired${_reason}`);
      })
    );
    this.subscriptions.push(
      this.modalService.onHidden.subscribe((reason: string | any) => {
        if (typeof reason !== 'string') {
          reason = `onHide(), modalId is : ${reason.id}`;
        }
        const _reason = reason ? `, dismissed by ${reason}` : '';
        this.messages.push(`onHidden event has been fired${_reason}`);
        this.unsubscribe();
      })
    );
 
    this.subscriptions.push(_combine);
    this.modalRef = this.modalService.show(template);
  }

  unsubscribe() {
    this.subscriptions.forEach((subscription: Subscription) => {
      subscription.unsubscribe();
    });
    this.subscriptions = [];
  }

  openModalWithComponent() {

    this.modalRef = this.modalService.show(ModalContentComponent);
    this.modalRef.content.title = 'Modal with component';

  }

}

@Component({
  selector: 'modal-content',
  template: `
    <div class="modal-header">
      <h4 class="modal-title pull-left">{{title}}</h4>
  
    </div>
    <div class="modal-body">
    <input type="text" placeholder="Last Name">

    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-primary" >Save Last Name</button>
    </div>
  `
})
export class ModalContentComponent {
  title?: string;
  constructor(private modalService: BsModalService) {}
}
