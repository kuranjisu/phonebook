import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Contacts } from '../../interfaces/contacts';
import { ContactsService } from '../../services/contacts.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  contactForm: Contacts = {
    id: 0,
    name: '',
    email: '',
    number: ''
  };
 
  constructor(private contactsService:ContactsService,
    private router:Router) {}
 
  ngOnInit(): void {}
 
  create(){
    this.contactsService.create(this.contactForm)
    .subscribe({
      next:(data) => {
        this.router.navigate(["/contacts/components/home"])
      },
      error:(err) => {
        console.log(err);
      }
    })
  }
}
