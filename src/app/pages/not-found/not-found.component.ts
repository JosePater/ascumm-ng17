import { Component, OnInit, inject } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [],
  templateUrl: './not-found.component.html',
  styleUrl: './not-found.component.css',
})
export class NotFoundComponent implements OnInit {
  private titulo: Title = inject(Title);

  private _router: Router = inject(Router);

  ngOnInit(): void {
    this.titulo.setTitle('Not Found');
    
    // Regresar a la página de inicio en 5s
    setTimeout(() => {
      this._router.navigate(['/']);
    }, 5000);
  }
}
