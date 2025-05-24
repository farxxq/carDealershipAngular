import { NgStyle, CommonModule, NgClass } from '@angular/common';
import {
  Component,
  ElementRef,
  Input,
  AfterViewInit,
  ViewChild,
} from '@angular/core';
import VanillaTilt from 'vanilla-tilt';

@Component({
  selector: 'app-tilt-card',
  standalone: true,
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
  imports: [NgStyle, CommonModule, NgClass],
})
export class CardComponent implements AfterViewInit {
  @Input() title = 'Loading...';
  @Input() subtitle = 'Loading...';
  @Input() badgeText?: string = '';
  @Input() color = 'blue'; // or 'lavender' to test other variant
  @Input() bg = '';
  @Input() mask = '';

  @ViewChild('cardRef', { static: true }) cardRef!: ElementRef;

  ngAfterViewInit(): void {
    VanillaTilt.init(this.cardRef.nativeElement, {
      max: 12,
      speed: 500,
      perspective: 1500,
      glare: true,
      'max-glare': 0.5,
      scale: 1.03,
      reset: true,
    });
  }
}
