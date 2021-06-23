import { Component, OnInit } from '@angular/core';
import SwiperCore from 'swiper/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {
  
  constructor(private modalService: BsModalService) {
    
  }

  ngOnInit(): void {
  }

  onSwiper(swiper: any) {
    console.log(swiper);
  }
  onSlideChange() {
    console.log('slide change');
  }
  openModal(mymodal: any) {
    this.modalService.show(mymodal);
  }
}
