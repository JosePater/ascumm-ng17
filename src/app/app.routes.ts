import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ContactComponent } from './pages/contact/contact.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

export const routes: Routes = [
  { path: '', title: 'ASCUMM', component: HomeComponent },
  { path: 'nosotros', title: 'Nosotros', component: AboutUsComponent },
  {
    path: 'proyectos',
    title: 'Proyectos | ASCUMM',
    component: ProjectsComponent,
  },
  { path: 'contacto', title: 'Contacto | ASCUMM', component: ContactComponent },
  {
    path: '**',
    title: 'Página no encontrada',
    component: NotFoundComponent,
    pathMatch: 'full',
  },
];
