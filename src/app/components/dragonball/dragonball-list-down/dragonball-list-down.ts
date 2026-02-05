import { Component, input } from '@angular/core';
import { Character } from '../../../types';

@Component({
  selector: 'app-dragonball-list-down',
  imports: [],
  templateUrl: './dragonball-list-down.html',
  styleUrl: './dragonball-list-down.css',
})
export class DragonballListDown {
  public characters = input.required<Character[]>();
  public listName = input.required<String>();
}
