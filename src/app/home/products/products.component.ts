import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor() { }
  ProductCards= [

    {
      heading:" Quality Products",
      icon:"star",
      description:"Some quick example text to build on the card title and make up the bulk of the card",
      buttonLink: "#!"
    },
  
    {
      heading:"Customer Service",
      icon:"smile",
      description:"Some quick example text to build on the card title and make up the bulk of the card",
      buttonLink: "#!"
    },

    {
      heading:"Development",
      icon:"analyse",
      description:"Some quick example text to build on the card title and make up the bulk of the card",
      buttonLink: "#!"
    },
    {
      heading:"Eco Friendly",
      icon:"tree",
      description:"Some quick example text to build on the card title and make up the bulk of the card",
      buttonLink: "#!"
    }
  
  ]
  ngOnInit(): void {
  }

}
