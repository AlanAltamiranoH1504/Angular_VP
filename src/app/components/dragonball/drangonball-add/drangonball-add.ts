import { Component, EventEmitter, output, Output, signal } from '@angular/core';
import { Character } from '../../../types';

@Component({
  selector: 'app-drangonball-add',
  imports: [],
  templateUrl: './drangonball-add.html',
  styleUrl: './drangonball-add.css',
})
export class DrangonballAdd {
  protected name = signal("");
  protected power = signal(0);
  character_to_send = output<Character>();

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
        alert('Llena el formulario 2');
        return;
      }
      const new_character: Character = {
        id: 100,
        name: this.name(),
        power: this.power()
      }

      this.character_to_send.emit(new_character);
    }
}
