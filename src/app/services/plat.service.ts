import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlatService {
  //Destination Address
  platURL: string = 'http://localhost:3001/plats';
  //httpClient:Livreur
  constructor (private httpClient: HttpClient) { }
  //Response: Array of objects
  getAllplats() {
    return this.httpClient.get(this.platURL);
  }
  //Response:One object
  getPlatById(id: number) {
    return this.httpClient.get(`${this.platURL }/${id}`);
    //  +: concaténation
  }
  //Response:Boolean/String
  deletePlatById(id) {
    return this.httpClient.delete(`${this.platURL }/${id}`);
  }
  //Response:Boolean/String
  addPlat(platObj: any) {
    return this.httpClient.post(this.platURL, platObj);

  }
  //Response:Object/Boolean/String
  editPlat(platObj) {
    return this.httpClient.put(this.platURL, platObj);
  }
}
