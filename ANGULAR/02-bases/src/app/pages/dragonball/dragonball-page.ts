import { Component, computed, signal } from '@angular/core';

interface Character {
  id: number;
  name: string;
  power: number;
}
@Component({
  selector: 'app-dragonball-page',
  imports: [],
  templateUrl: './dragonball-page.html',
  styleUrl: './dragonball-page.css'
})
export class DragonballPage {
  name = signal('Gohan');
  power = signal(9999);

  characters = signal<Character[]>([
    { id: 1, name: 'Goku', power: 9001},
    { id: 2, name: 'Vegeta', power: 8000},
    { id: 3, name: 'Picolo', power: 3000},
    { id: 4, name: 'Yamcha', power: 200},
  ]);

  addCharacter() {
    if (!this.name() || !this.power() || this.power() < 0) {
      return;
    }
    const newCharacter: Character = {
      id: this.characters().length + 1,
      name: this.name(),
      power: this.power()
    }
    // Agregar nuevo
    this.characters.update(
      (list) => [... list, newCharacter]
    );
    //Agrega pero no es la mejor forma
    // this.characters().push(newCharacter);
    console.log(this.name(), this.power());
    this.resetFields();
  }
  resetFields(){
    this.name.set('');
    this.power.set(0);
  }
  // powerClasses = computed(
  //   () => {
  //     return {
  //       'text-danger': true
  //     }
  //   }
  // );
}
