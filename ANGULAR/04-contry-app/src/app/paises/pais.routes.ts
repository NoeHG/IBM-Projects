import { Routes } from '@angular/router';
import { PaginaCapital } from './pages/pagina-capital/pagina-capital';
import { PaisLayout } from './layouts/pais-layout/pais-layout';
import { PaginaPais } from './pages/pagina-pais/pagina-pais';
import { PaginaRegion } from './pages/pagina-region/pagina-region';
import { CodigoPais } from './pages/codigo-pais/codigo-pais';

export const paisRoutes: Routes = [
  {
    path: '',
    component: PaisLayout, //Me ayudara a rediriguir las rutas internas
    children: [
      {
        path: 'capital',
        component: PaginaCapital
      },
      {
        path: 'pais',
        component: PaginaPais,
      },
      {
        path: 'region',
        component: PaginaRegion
      },
      {
        path: 'by/:code',
        component: CodigoPais,
      },
      {
        path: '**', //Para que no entre a la ruta de paislayout
        redirectTo: 'capital'
      }
    ]
  },
];

export default paisRoutes;
