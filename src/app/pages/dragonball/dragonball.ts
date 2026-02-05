import { Component, signal } from '@angular/core';
import { Character } from '../../types';
import { retry } from 'rxjs';

@Component({
  selector: 'app-dragonball',
  imports: [],
  templateUrl: './dragonball.html',
  styleUrl: './dragonball.css',
})
export class Dragonball {
  protected characters = signal<Character[]>([
    { id: 1, name: 'Vegeta', power: 11000 },
    // { id: 2, name: 'Goku', power: 9000 },
    // { id: 3, name: 'Gohan', power: 13000 },
    // { id: 4, name: 'Piccolo', power: 7000 },
    // { id: 5, name: 'Trunks', power: 7000 },
    // { id: 6, name: 'Yamcha', power: 1000 },
  ]);

  protected name = signal('');
  protected power = signal(0);

  save_name(event: Event) {
    const inputName = event.target as HTMLInputElement;
    this.name.set(inputName.value);
  }

  save_power(event: Event) {
    const inputPower = event.target as HTMLInputElement;
    this.power.set(Number(inputPower.value));
  }

  save_character() {
    if (this.name() === '' || this.power() === 0) {
      alert('Llena el formulario');
      return;
    }
    const new_character: Character = {
      id: this.characters().length + 1,
      name: this.name(),
      power: this.power()
    }
    this.characters.update((characters) => [...characters, new_character]);
  }
}
