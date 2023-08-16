import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { ScrollServiceService } from '../scroll.service.service';

@Component({
  selector: 'app-nvbr',
  templateUrl: './nvbr.component.html',
  styleUrls: ['./nvbr.component.css']
})
export class NvbrComponent {
  constructor(private scrollService: ScrollServiceService) {}

  scrollToBottom(): void {
    // this.scrollService.scrollToBottom();
    document.getElementById('designed')?.scrollIntoView({ behavior: "smooth" });
    this.toggleMobileMenu()
  }
  showMobileMenu: boolean = false; // Add this line


  toggleMobileMenu(): void {
    this.showMobileMenu = !this.showMobileMenu;
  }


  
}
