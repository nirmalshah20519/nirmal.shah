import { Component, ElementRef, ViewChild, Renderer2 } from '@angular/core';
import { ScrollServiceService } from '../scroll.service.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  @ViewChild('content', { static: false }) contentRef!: ElementRef;

  constructor(private scrollService: ScrollServiceService, private renderer: Renderer2) {}

  ngOnInit(): void {
    this.scrollService.scrollToBottomEvent.subscribe(() => {
      if (this.contentRef) {
        console.log(this.contentRef.nativeElement.scrollTop);
        const ele = this.contentRef.nativeElement;
        console.log(ele.scrollHeight);
        this.contentRef.nativeElement.scroll({
          top: this.contentRef.nativeElement.scrollHeight,
          left: 0,
          behavior: 'smooth'
        })
      }
    });
  }
}
