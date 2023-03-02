import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Contacts } from '../../interfaces/contacts';
import { ContactsService } from '../../services/contacts.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  contactForm: Contacts = {
    id: 0,
    name: '',
    email: '',
    number: '',
  };
  constructor(
    private route: ActivatedRoute,
    private router:Router,
    private contactsService: ContactsService
  ) {}
 
  ngOnInit(): void {
    this.route.paramMap.subscribe((param) => {
      var id = Number(param.get('id'));
      this.getById(id);
    });
  }
 
  getById(id: number) {
    this.contactsService.getById(id).subscribe((data) => {
      this.contactForm = data;
    });
  }
 
  update() {
    this.contactsService.update(this.contactForm)
    .subscribe({
      next:(data) => {
        this.router.navigate(["/contacts/components/home"]);
      },
      error:(err) => {
        console.log(err);
      }
    })
  }
}