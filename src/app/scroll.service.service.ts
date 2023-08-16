import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ScrollServiceService {

  constructor() { }
  scrollToBottomEvent: EventEmitter<void> = new EventEmitter<void>();

  scrollToBottom(): void {
    this.scrollToBottomEvent.emit();
  }
}
