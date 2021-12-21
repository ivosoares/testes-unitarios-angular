import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-change-title',
  templateUrl: './change-title.component.html',
  styleUrls: ['./change-title.component.css']
})
export class ChangeTitleComponent {
  @Input() message: string = '';
  @Output() changeTitleEvent: EventEmitter<string> = new EventEmitter();

  changeTitle(newTitle: string): void {
    if(newTitle) {
      this.changeTitleEvent.emit(newTitle);
    }
  }
}
