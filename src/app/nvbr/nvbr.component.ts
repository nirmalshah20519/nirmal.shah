import { Component } from '@angular/core';

@Component({
  selector: 'app-nvbr',
  templateUrl: './nvbr.component.html',
  styleUrls: ['./nvbr.component.css']
})
export class NvbrComponent {
  showMobileMenu: boolean = false; // Add this line

  constructor() {}

  ngOnInit(): void {}

  toggleMobileMenu(): void {
    this.showMobileMenu = !this.showMobileMenu;
  }
}
