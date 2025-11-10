import { Component, input } from '@angular/core';
import { Pais } from '../../../interfaces/pais';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-codigo-pais-info',
  imports: [DecimalPipe],
  templateUrl: './codigo-pais-info.html'
})
export class CodigoPaisInfo {
  pais = input.required<Pais>();

}
