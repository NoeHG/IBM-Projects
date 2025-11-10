import { Routes } from '@angular/router';
import { PaginaInicio } from './shared/pages/pagina-inicio/pagina-inicio';

export const routes: Routes = [
  {
    path: '',
    component: PaginaInicio,
  },
  {
    path: 'pais',
    loadChildren: () => import('./paises/pais.routes'), // en el archivo pais.routes se manejan las routas de menos nivel de pais
  },
  {
    path: '**',
    redirectTo: '',
  }
];
