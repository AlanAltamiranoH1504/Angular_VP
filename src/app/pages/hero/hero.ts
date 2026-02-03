import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.html',
  styleUrl: './hero.css',
})
export class Hero {
  protected name = signal("Iroman");
  protected age = signal(45);

  getHeroDescription() {
    return `${this.name()} - ${this.age()}`;
  }

  changeHero() {
    this.name.update((oldValue) => oldValue = "Spiderman");
    this.age.update((oldValue) => oldValue = 22);
  }

  resetForm() {
    this.name.set("Ironman");
    this.age.set(45);
  }

  chageAge() {
    this.age.set(60);
  }

  upperCaseName() {
    return this.name().toUpperCase();
  }
}
