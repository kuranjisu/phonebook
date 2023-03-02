import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Contacts } from '../interfaces/contacts';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  constructor(private http: HttpClient) {}

  get() {
    return this.http.get<Contacts[]>('http://localhost:3000/contacts');
  }

  create(payload: Contacts) {
    return this.http.post<Contacts>('http://localhost:3000/contacts', payload);
  }

  getById(id: number) {
    return this.http.get<Contacts>(`http://localhost:3000/contacts/${id}`);
  }
    
  update(payload:Contacts){
    return this.http.put(`http://localhost:3000/contacts/${payload.id}`,payload);
  }

  delete(id:number){
    return this.http.delete<Contacts>(`http://localhost:3000/contacts/${id}`);
 }
}
