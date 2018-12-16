import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListofprodService {

  constructor() { }

  getProd(){
    return [
      {name:"Anniversary", price:"500pkr"},
      {name:"Birthday", price:"550pkr"},
      {name:"Surprise", price:"300pkr"},
      {name:"Children", price:"200pkr"}
    ]
  }
}
