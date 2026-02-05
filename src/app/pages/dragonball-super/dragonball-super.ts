import { Component, inject, signal } from '@angular/core';
import { Character } from '../../types';
import { DragonballList } from "../../components/dragonball/dragonball-list/dragonball-list";
import { DragonballListDown } from "../../components/dragonball/dragonball-list-down/dragonball-list-down";
import { DrangonballAdd } from "../../components/dragonball/drangonball-add/drangonball-add";
import { DragonBallService } from '../../services/drangonball.service';

@Component({
  selector: 'app-dragonball',
  imports: [DragonballList, DragonballListDown, DrangonballAdd],
  templateUrl: './dragonball-super.html',
  styleUrl: './dragonball-super.css',
})
export class DragonballSuper {
  public dragonBallService = inject(DragonBallService); 
  protected name = signal('');
  protected power = signal(0);

}
