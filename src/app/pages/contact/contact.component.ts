import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent implements OnInit {
  contact = {
    email: 'ascumsampues@gmail.com',
    address: 'Calle 15E carrera 18C - 9 Urb Geney',
    phone: ['314 7016179', '314 5508626', '320 3155111'],
  };

  ngOnInit(): void {}
}
