import { CommonModule } from '@angular/common';
import { Component, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  @Input() size: 'small' | 'medium' | 'large' = 'small';
  @Input() type: 'fill' | 'border' | 'ghost' = 'fill';


}
