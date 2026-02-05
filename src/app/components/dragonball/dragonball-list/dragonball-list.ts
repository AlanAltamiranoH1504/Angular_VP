import {Component, input } from '@angular/core';
import { Character } from '../../../types';

@Component({
  selector: 'app-dragonball-list',
  imports: [],
  templateUrl: './dragonball-list.html',
})
export class DragonballList {
  public characters = input.required<Character[]>();
  public listName = input.required<String>();
}
