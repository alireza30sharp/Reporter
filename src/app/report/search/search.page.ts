import {
  Component,
  OnInit,
} from '@angular/core';
import { SwiperOptions } from 'swiper/types';
@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {
  swiperEl: any;
  constructor() {
  }
  ngOnInit() {
    this.initialize();
  }
  initialize() {
    setTimeout(() => {

      // swiper element
      this.swiperEl = document.getElementById('swiper_search') as any;
      const swiperParams: SwiperOptions = {
        spaceBetween: 30,
        autoplay:{
          delay:5000,
          disableOnInteraction:false,
          pauseOnMouseEnter:true,
          waitForTransition:true
        },
        effect: 'fade',
        fadeEffect: {
          crossFade: true
        },
        navigation: false,
        preventClicks:true,
        preventClicksPropagation:true,
        slideToClickedSlide:true,
        pagination:true,
        breakpoints: {
          640: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        },
        on: {
          //   slideChange: (row) => {
          //     this.activeRow = this.listWord[row.activeIndex];
          //     this.speechSynthesis(this.activeRow.en);
          //   }
        }

      };

      // now we need to assign all parameters to Swiper element
      Object.assign(this.swiperEl, swiperParams);

      // and now initialize it
      this.swiperEl.initialize();
    }, 300);

  }

}
