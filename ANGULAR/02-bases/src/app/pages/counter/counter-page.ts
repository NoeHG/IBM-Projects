import { Component, signal } from "@angular/core";

@Component({
  templateUrl: './counter-page.html',
  styles: `
    button {
      padding: 5px;
      margin: 5px 10px;
      width: 75px;
    }
  `,
})
export class CounterPage {
  counter = 10;
  counterSignal = signal(10); // Señales

  aumentarPorUno(valor: number) {
    this.counter += valor;

    // Señales
    // this.counterSignal.set(this.counterSignal() + valor);
    this.counterSignal.update((current) => current + valor);
  }

  disminuirPorUno(valor: number) {
    this.counter -= valor;
    this.counterSignal.update((current) => current - valor);
  }

  reiniciarCounter() {
    this.counter = 10;
    // Señales
    this.counterSignal.set(10);
  }

}
