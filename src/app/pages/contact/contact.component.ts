import { Component, OnInit, inject } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent implements OnInit {
  private _titulo: Title = inject(Title);

  contact = {
    email: 'ascumsampues@gmail.com',
    address: 'Calle 15E carrera 18C - 9 Urb Geney',
    phone: ['314 7016179', '314 5508626', '320 3155111'],
  };

  ngOnInit(): void {
    this._titulo.setTitle('Contacto | ASCUMM');
  }
}
