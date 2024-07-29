import { Component, Input, Output, EventEmitter } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button',
  // standalone: true,
  // imports: [HeaderComponent, CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
})
export class ButtonComponent {
  @Input() text!: string;
  @Input() color!: string;
  @Output() btnClick = new EventEmitter();
  onClick() {
    this.btnClick.emit();
  }
}
