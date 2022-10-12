import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderDetailsService {

  constructor() { }

  // detalles de la comida 
  
  foodDetails = [
    {
      id:1,
      foodName:"Sandwich Intercontinental",
      foodDetails:"Pan tostado, queso, tocino y huevos.",
      foodPrice:20.2,
      foodImg:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/wzfq7djolqxgdhghebbq"
    },
    {
      id:2,
      foodName:"Vegana Suprema",
      foodDetails:"Cebolla, aceitunas, champiñones, jalapeños, maiz dulce y extra queso",
      foodPrice:45.9,
      foodImg:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/sgbobtbxlojbtdnr2m5k"
    },
    {
      id:3,
      foodName:"Mila Burger",
      foodDetails:"Milanesa hecha hamburguesa",
      foodPrice:14.9,
      foodImg:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/xbeqlsck3p0kei53to7k"
    },
    {
      id:4,
      foodName:"Kebab ultra Vegano",
      foodDetails:"Una seleccion de vegetales mezcladas con puré, con nuestro toque personaliado de sazón, garantizan una combinacion explosiva.",
      foodPrice:12,
      foodImg:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/l2ng6gtge30sqaafqng7"
    },
    {
      id:5,
      foodName:"Brownie del Ultimo Bocado",
      foodDetails:"Disfruta de la combinacion de chocolate de barra y chocolate líquido, déjate atrapar por el Ultimo Bocado.",
      foodPrice:10,
      foodImg:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/iqlmbg1hlyc0dspdyzzv"
    },
    {
      id:6,
      foodName:"Oreo Cheesecake",
      foodDetails:"Oreo, helado y crema, que mas podria pedir?",
      foodPrice:13,
      foodImg:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/wtj8esaeslvlscv8glj6"
    }
  ]


  

}
