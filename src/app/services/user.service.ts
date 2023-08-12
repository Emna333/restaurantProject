import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

   //Destination Address
   userURL: string = 'http://localhost:3001/users';
   //httpClient:Livreur
   constructor (private httpClient: HttpClient) { }
   //Response: Array of objects
   getAllUsers() {
     return this.httpClient.get(this.userURL);
   }
   //Response:One object
   getUserById(id: number) {
     return this.httpClient.get(`${this.userURL }/${id}`);
     //  +: concaténation
   }
   //Response:Boolean/String
   deleteUserById(id) {
     return this.httpClient.delete(`${this.userURL }/${id}`);
   }
   //Response:Boolean/String
   signup(userObj: any) {
     return this.httpClient.post<{msg:string}>(this.userURL +'/signup', userObj);
 
   }
   //Response:Object/Boolean/String
   editProfile (userObj) {
     return this.httpClient.put(this.userURL, userObj);
   }
   login (userObj) {
     return this.httpClient.post<{msg:string,connectedUser:any}>(this.userURL+'/login', userObj);
   }
}
