import { Component, inject, linkedSignal, resource, signal } from '@angular/core';
import { BuscaInput } from "../../components/busca-input/busca-input";
import { Tabla } from "../../components/tabla/tabla";
import { PaisService } from '../../services/pais.service';
import { of } from 'rxjs';
import { rxResource } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-pagina-pais',
  imports: [BuscaInput, Tabla],
  templateUrl: './pagina-pais.html'
})
export class PaginaPais {
  paisServicio = inject(PaisService);
  activateRoute = inject(ActivatedRoute);
  router = inject(Router);

  queryParam =this.activateRoute.snapshot.queryParamMap.get('query') ?? '';
  query = linkedSignal(() => this.queryParam);

  paisRecurso = rxResource(
  {
    params: () => ({
      query: this.query()
    }),
    stream: ({params}) => {
      if(!params.query) return of([]);
      this.router.navigate(['pais/pais'], {
        queryParams: {
          query: params.query
        }
      });
      return this.paisServicio.buscarPorPais(params.query)
    }
  }
);

  // paisRecurso = resource({
  //   params: () => ({
  //     query: this.query()
  //   }),
  //   loader: async({params}) => {
  //     if (!params.query) {
  //       return [];
  //     }
  //     return await firstValueFrom(this.paisServicio.buscarPorPais(params.query));
  //   }
  // });
}
