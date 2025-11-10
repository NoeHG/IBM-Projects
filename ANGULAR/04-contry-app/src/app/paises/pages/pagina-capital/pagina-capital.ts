import { Component, inject, linkedSignal, signal } from '@angular/core';
import { BuscaInput } from "../../components/busca-input/busca-input";
import { Tabla } from "../../components/tabla/tabla";
import { PaisService } from '../../services/pais.service';
import { rxResource } from '@angular/core/rxjs-interop';
import { of } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-pagina-capital',
  imports: [BuscaInput, Tabla],
  templateUrl: './pagina-capital.html'
})
export class PaginaCapital {
  paisServicio = inject(PaisService);
  activateRoute = inject(ActivatedRoute);
  router = inject(Router);

  queryParam =this.activateRoute.snapshot.queryParamMap.get('query') ?? '';
  query = linkedSignal(() => this.queryParam);

  capitalRecurso = rxResource(
  {
    params: () => ({
      query: this.query()
    }),
    stream: ({params}) => {
      if(!params.query) return of([]);
      this.router.navigate(['pais/capital'], {
        queryParams: {
          query: params.query
        }
      });
      return this.paisServicio.buscarPorCapital(params.query)
    }
  }
);

  // capitalRecurso = resource({
  //   params: () => ({
  //     query: this.query()
  //   }),
  //   loader: async({params}) => {
  //     if (!params.query) {
  //       return [];
  //     }
  //     return await firstValueFrom(this.paisServicio.buscarPorCapital(params.query));
  //   }
  // });

  // isLoading = signal(false);
  // isError = signal<string|null>(null);
  // paises = signal<Pais[]>([]);

  // buscarCapital(query: string){

  //   if (this.isLoading()) return;

  //   this.isLoading.set(true);
  //   this.isError.set(null)
  //   this.paisServicio.buscarPorCapital(query).subscribe(
  //     {
  //       next: (respuesta) => {
  //         this.isLoading.set(false);
  //         this.paises.set(respuesta);
  //         console.log(respuesta);
  //       },
  //       error: (err) => {
  //         this.isLoading.set(false);
  //         this.paises.set([]);
  //         this.isError.set(err )
  //       },
  //     }
  //   )
  // }
}
