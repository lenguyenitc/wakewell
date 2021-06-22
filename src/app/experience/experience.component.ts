import { Component, OnInit } from '@angular/core';
import SwiperCore from 'swiper/core';
import { faFacebookF, faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons';
@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

  faFacebookF = faFacebookF;
  faLinkedinIn = faLinkedinIn;
  faInstagram = faInstagram;
  constructor() { }

  ngOnInit(): void {
  }

  onSwiper(swiper: any) {
    console.log(swiper);
  }
  onSlideChange() {
    console.log('slide change');
  }

}
