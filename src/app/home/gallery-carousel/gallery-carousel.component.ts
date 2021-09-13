import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { trigger, state, style, animate, transition, animation } from '@angular/animations';
import { Image } from '../models';

@Component({
  selector: 'app-gallery-carousel',
  templateUrl: './gallery-carousel.component.html',
  styleUrls: ['./gallery-carousel.component.scss'],
  animations: [
    trigger('slide-in', [
      state('left', style({
        opacity: 0,
        transform: 'translateX(-100%)'
      })),
      state('middle', style({
        opacity: 1,
        transform: 'translateX(0)'
      })),
      state('right', style({
        opacity: 0,
        transform: 'translateX(100%)'
      })),
      transition('left=>middle', [
        style({
          opacity: 0,
          transform: 'translateX(100%)'
        }),
        animate('250ms')
      ]),
      transition('right=>middle', [
        style({
          opacity: 0,
          transform: 'translateX(-100%)'
        }),
        animate('250ms')
      ]),
      transition('middle=>*', [
        animate('250ms')
      ])

    ])
  ]
})
export class GalleryCarouselComponent implements OnInit {

  @Input() images: Array<Image>;
  @Input() selectedImage: number;
  @Output() closeCarousel = new EventEmitter<void>();


  public animStage = 'middle';
  public animImage: number;

  ngOnInit(): void {
    this.animImage = this.selectedImage;
  }

  constructor() { }

  public close(): void {
    this.closeCarousel.emit();
  }

  public previous(): void {

    this.animStage = 'left';
    this.selectedImage = this.selectedImage > 0 ? this.selectedImage - 1 : this.images.length - 1;
    this.blur();
  }
  public next(): void {
    this.animStage = 'right';
    this.selectedImage = this.selectedImage < this.images.length - 1 ? this.selectedImage + 1 : 0;
    this.blur();
  }

  public animDone(): void {
    this.animImage = this.selectedImage;
    this.animStage = 'middle';
  }
  public onEvent(event: Event): void {
    event.stopPropagation();
  }

  private blur(): void {

    const activeElement = document.activeElement as HTMLElement;
    if (activeElement != null) {
      activeElement.blur();
    }
  }

}
