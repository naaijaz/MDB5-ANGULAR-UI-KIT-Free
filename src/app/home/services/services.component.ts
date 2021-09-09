import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  constructor() { }

  ServiceCards= [

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
    },
    {
      heading:"Recycling",
      imageUrl:"../../../assets/Images/Recycling.jpg",
      description:"Some quick example text to build on the card title and make up the bulk of the card",
      buttonLink: "#!"
    },
    {
      heading:"Quality",
      imageUrl:"../../../assets/Images/quality.jpg",
      description:"Some quick example text to build on the card title and make up the bulk of the card",
      buttonLink: "#!"
    }
  ]

  ngOnInit(): void {
  }

}
