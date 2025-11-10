import { Component, inject, linkedSignal, signal } from '@angular/core';
import { Tabla } from "../../components/tabla/tabla";
import { Region } from '../../interfaces/region';
import { PaisService } from '../../services/pais.service';
import { rxResource } from '@angular/core/rxjs-interop';
import { of } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-pagina-region',
  imports: [Tabla],
  templateUrl: './pagina-region.html'
})
export class PaginaRegion {
  paisServicio = inject(PaisService);
  activateRoute = inject(ActivatedRoute);
  router = inject(Router);
  public regiones: Region[] =
    [
      'Africa',
      'Americas',
      'Asia',
      'Europe',
      'Oceania',
      'Antarctic'
    ];

  queryParam =this.activateRoute.snapshot.queryParamMap.get('region') ?? '';
  regionSelecionada = linkedSignal(() => this.queryParam);

  // regionSelecionada = signal<Region|null>(null);

  regionRecurso = rxResource(
  {
    params: () => ({
      regionValor: this.regionSelecionada()
    }),
    stream: ({params}) => {
      if(!params.regionValor) return of([]);
      this.router.navigate(['pais/region'], {
        queryParams: {
          region: params.regionValor
        }
      });
      return this.paisServicio.buscarPorRegion(params.regionValor);
    }
  }
);

}
