import { Component, ElementRef, OnInit } from '@angular/core';
declare var Typed: any;

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  constructor(private elementRef: ElementRef) {}

  ngOnInit(): void {
    this.setupTyped();
  }

  private setupTyped(): void {
    const typedElement = this.elementRef.nativeElement.querySelector('#typed');
    const typed = new Typed(typedElement, {
      strings: ['Nirmal Shah'],
      typeSpeed: 120,
      loop: true,
    });
  }

}
