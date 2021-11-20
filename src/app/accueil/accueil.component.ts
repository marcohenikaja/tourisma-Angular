import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit,AfterViewInit {

  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
    this.slideAuto();
  }
  slideAuto(){        
   let slideIndex = 0;
   showSlides();

    function showSlides() {
      var i:number;
      var slides:HTMLCollectionOf<Element> = document.getElementsByClassName("mySlides")!;
      var dots:HTMLCollectionOf<Element> = document.getElementsByClassName("dot")!;
      for (i = 0; i < slides.length; i++) {
        slides[i].setAttribute("style","display:none");     
      }
      slideIndex++;
      if (slideIndex > slides.length) {slideIndex = 1}    
      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
      }
      slides[slideIndex-1].setAttribute("style","display:block");      
      dots[slideIndex-1].className += " active";
      setTimeout(showSlides, 2000); // Change image every 2 seconds
    }
  }
}
