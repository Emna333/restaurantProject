import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChefService { 
   //Destination Address
  chefURL: string = 'http://localhost:3001/chefs';
  //httpClient:Livreur
  constructor (private httpClient: HttpClient) { }
  //Response: Array of objects
  getAllChefs() {
    return this.httpClient.get(this.chefURL);
  }
  //Response:One object
  getChefById(id: number) {
    return this.httpClient.get(`${this.chefURL} /${id}`);
    //  +: concaténation
  }
  //Response:Boolean/String
  deleteChefById(id) {
    return this.httpClient.delete(`${this.chefURL} /${id}`);
  }
  //Response:Boolean/String
  addChef(chefObj: any) {
    return this.httpClient.post(this.chefURL, chefObj);

  }
  //chef obj fih les valeurs et l'id donc yaaref win yhot
  //Response:Object/Boolean/String
  editChef(chefObj) {
    return this.httpClient.put(this.chefURL, chefObj);
  }
}
