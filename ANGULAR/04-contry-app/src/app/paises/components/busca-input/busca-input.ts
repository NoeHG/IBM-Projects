import { Component, effect, input, linkedSignal, output, signal } from '@angular/core';

@Component({
  selector: 'app-busca-input',
  imports: [],
  templateUrl: './busca-input.html',
})
export class BuscaInput {
  sigValor = output<string>();
  placeholder = input<string>('Buscar');
  debounceTime = input<number>(500);

  ValorInicial = input<string>('');

  inputValor = linkedSignal<string>(() => this.ValorInicial());

  debounceEffect = effect((onCleanUp) => {
    const valor = this.inputValor();

    const timeout = setTimeout(() => {
      this.sigValor.emit(valor);
    }, this.debounceTime());

    onCleanUp(() => {
      clearTimeout(timeout);
    });

  });

}
