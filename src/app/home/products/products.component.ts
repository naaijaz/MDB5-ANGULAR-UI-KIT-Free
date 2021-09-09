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
      imageUrl:"../../../assets/Images/qualityproduct.jpg",
      description:"Some quick example text to build on the card title and make up the bulk of the card",
      buttonLink: "#!"
    },

    {
      heading:"Customer Service",
      imageUrl:"../../../assets/Images/customerservice.jpg",
      description:"Some quick example text to build on the card title and make up the bulk of the card",
      buttonLink: "#!"
    },

    {
      heading:"Development",
      imageUrl:"../../../assets/Images/development.jpg",
      description:"Some quick example text to build on the card title and make up the bulk of the card",
      buttonLink: "#!"
    },
    {
      heading:"Eco Friendly",
      imageUrl:"../../../assets/Images/ecofriendly.jpg",
      description:"Some quick example text to build on the card title and make up the bulk of the card",
      buttonLink: "#!"
    }
  
  ]
  ngOnInit(): void {
  }

}
