import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export class ProjectsComponent {
  projects = [
    {
      name: 'Piscicultura',
      descrip: 'Proyecto de cachamas',
      img: 'assets/images/proyectos-cachama.jpg',
    },
    {
      name: 'Cultivo de yuca',
      descrip: 'Cosecha de yuca dulce harinosa',
      img: 'assets/images/proyectos-yuca.jpg',
    },
    {
      name: 'Pollos',
      descrip: 'Pollos purina de engorde',
      img: 'assets/images/proyectos-pollos.jpg',
    },
  ];
}
