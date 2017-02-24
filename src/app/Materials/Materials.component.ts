import {Component} from '@angular/core';
declare var $: any;

@Component({
  selector: 'materials',
  styleUrls: ['./Materials.component.sass'],
  templateUrl: './Materials.component.html'
})
export class MaterialsComponent  {

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

