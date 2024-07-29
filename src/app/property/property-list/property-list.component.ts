import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrl: './property-list.component.css'
})
export class PropertyListComponent  implements OnInit{
  shorouk: Array<any> = [
    { id: 1, Name: "Birla house", type: "house", price: 120000 },
    { id: 2, Name: "villa", type: "house", price: 120000 },
    { id: 3, Name: "smart house", type: "house", price: 120000 },
    { id: 4, Name: "Birla house", type: "house", price: 120000 },
    { id: 5, Name: "Birla house", type: "house", price: 120000 },
    { id: 5, Name: "Birla house", type: "house", price: 120000 }
  ];

  constructor() {}

  ngOnInit(): void {}
}
    
  
   

