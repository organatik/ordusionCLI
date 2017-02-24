import {Component} from '@angular/core';
declare var $: any;

@Component({
  selector: 'engineering',
  styleUrls: ['./Engineering.component.sass'],
  templateUrl: './Engineering.component.html'
})
export class EngineeringComponent  {

  ngOnInit(){
    $(document).ready(function(){
      $(".owl-carousel").owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        items: 1,
        autoplay:true,
        autoplayTimeout:5000,
        autoplayHoverPause:true
      });
    });

  }
}

