import { effect, Injectable, signal } from '@angular/core';
import { Character } from '../types';

function loadFromLocalStorage() {
    const characters = localStorage.getItem("characters");
    return characters ? JSON.parse(characters) : [];
}
@Injectable({providedIn: 'root'})
export class DragonBallService {
  public characters = signal<Character[]>(loadFromLocalStorage());

  save_to_local_storage = effect(() => {
    localStorage.setItem("characters", JSON.stringify(this.characters()));
  }) 

  public add_character(character: Character) {
    this.characters.update((chars) => [...chars, character]);
  }
}
