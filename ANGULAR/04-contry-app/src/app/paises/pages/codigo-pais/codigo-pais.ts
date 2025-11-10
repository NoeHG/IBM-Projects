import { Component, inject } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { PaisService } from '../../services/pais.service';
import { NotFound } from "../../../shared/components/not-found/not-found";
import { CodigoPaisInfo } from "./codigo-pais-info/codigo-pais-info";

@Component({
  selector: 'app-codigo-pais',
  imports: [NotFound, CodigoPaisInfo],
  templateUrl: './codigo-pais.html'
})
export class CodigoPais {
  codigoPais = inject(ActivatedRoute).snapshot.params['code'];
  paisServicio = inject(PaisService);

  codigoRecurso = rxResource({
    params: () => ({
      codigo: this.codigoPais
    }),
    stream: ({params}) => {
      return this.paisServicio.buscarPaisPorCodigo(params.codigo)
    }
  });
}
