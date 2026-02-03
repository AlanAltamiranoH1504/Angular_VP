import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'app-counter-component',
  imports: [],
  templateUrl: './counter-component.html',
  styleUrl: './counter-component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CounterComponent {
  protected counter = 10;
  protected counterSignal = signal(10);

  incrementCounter(value: number) {
    this.counter +=value;
    this.counterSignal.update((oldValue) => oldValue + value); // ! Actualizacion de una señal
  }

  resetCounter() {
    this.counter = 0;
    this.counterSignal.set(0); // ! Seteo de valor de una señal
  }

  get get_counter() {
    return this.counter;
  }
}
