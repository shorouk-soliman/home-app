import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HousingService {

  constructor(private Http:HttpClient) { }
  getallproperties()
  {
   return this.Http.get('assets/data/properties.json');
     

  }
}
