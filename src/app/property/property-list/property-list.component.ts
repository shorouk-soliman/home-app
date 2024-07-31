
import { Component, OnInit } from '@angular/core';
import { HousingService } from '../../housing.service';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrl: './property-list.component.css'
})
export class PropertyListComponent  implements OnInit{
  shorouk: any = [];

  constructor(private housingservice:HousingService) {}

  ngOnInit(): void {
    this.housingservice.getallproperties().subscribe(
      data=>{
        console.log(data);
        this.shorouk=data;
      },
      error=>
      {
        console.log(error)
      }
    )
 
}
    
}
  
   

