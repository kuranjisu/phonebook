import { Component, OnInit } from '@angular/core';
import { Contacts } from '../../interfaces/contacts';
import { ContactsService } from '../../services/contacts.service';

declare var window: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  allContacts: Contacts[] = [];
  deleteModal: any;
  idTodelete: number = 0;
 
  constructor(private contactsService: ContactsService) {}
 
  ngOnInit(): void {
    this.deleteModal = new window.bootstrap.Modal(
      document.getElementById('deleteModal')
    );
 
    this.get();
  }
 
  get() {
    this.contactsService.get().subscribe((data) => {
      this.allContacts = data;
    });
  }
 
  openDeleteModal(id: number) {
    this.idTodelete = id;
    this.deleteModal.show();
  }
 
  delete() {
    this.contactsService.delete(this.idTodelete).subscribe({
      next: (data) => {
        this.allContacts = this.allContacts.filter(_ => _.id != this.idTodelete)
        this.deleteModal.hide();
      },
    });
  }
}