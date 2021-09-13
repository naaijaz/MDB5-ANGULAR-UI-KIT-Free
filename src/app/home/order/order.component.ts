import { Component, OnInit } from '@angular/core';
import { Image } from '../models';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

public selectedImage?:number=null;

  public images = [
    {
      url: '/assets/Images/gallery/1.jpeg',
      row: '1/3'
    },

    {
      url: '/assets/Images/gallery/2.jpeg',

    },
    {
      url: '/assets/Images/gallery/3.jpeg',

    },

    {
      url: '/assets/Images/gallery/4.jpeg',

    },
    {
      url: '/assets/Images/gallery/5.jpeg',

    },
    {
      url: '/assets/Images/gallery/6.jpeg',

    },
    {
      url: '/assets/Images/gallery/7.jpeg',

    },

    {
      url: '/assets/Images/gallery/8.jpeg',
      row: '2/4',
      col: '3'
    },

  ] as Array<Image>;
  constructor() { }

  ngOnInit(): void {
  }

}
