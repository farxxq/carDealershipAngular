import { NgStyle } from '@angular/common';
import { Component, ElementRef, Input, AfterViewInit, ViewChild } from '@angular/core';
import VanillaTilt from 'vanilla-tilt';

@Component({
  selector: 'app-tilt-card',
  standalone: true,
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
  imports:[NgStyle]
})
export class CardComponent implements AfterViewInit {
  @Input() title = '';
  @Input() subtitle = '';
  @Input() img = '';
  @Input() color = 'yellow';
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
      reset: true
    });
  }
}

