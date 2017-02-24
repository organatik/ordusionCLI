import {Component} from '@angular/core';
declare var $: any;

@Component({
  selector: 'home',
  styleUrls: ['./home.component.sass'],
  templateUrl: './home.component.html'
})
export class HomeComponent {

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
