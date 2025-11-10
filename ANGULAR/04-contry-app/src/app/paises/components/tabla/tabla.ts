import { Component, input } from '@angular/core';
import { Pais } from '../../interfaces/pais';
import { DecimalPipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-tabla',
  imports: [DecimalPipe, RouterLink],
  templateUrl: './tabla.html'
})
export class Tabla {
  paises = input.required<Pais[]>()

  errorMensaje = input<string|unknown|undefined|null>();
  isLoading = input<boolean>(false);
  isEmpty = input<boolean>(false);

}
