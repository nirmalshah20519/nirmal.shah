import { animate, style, transition, trigger } from '@angular/animations';
import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('routeFade', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('2s ease-in-out', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        animate('2s ease-in-out', style({ opacity: 0 })),
      ]),
    ]),
  ],
})
export class AppComponent {
  title = 'Nirmal\'s portfolio';

}
