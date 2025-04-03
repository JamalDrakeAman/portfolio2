import { Component } from '@angular/core';
import { SkillsService } from '../../shared/services/skills.service';

@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {

  constructor(public skillService: SkillsService) {

  }

  openPull() {
    console.log('open');
    document.getElementById('label1')?.classList.add('diagonal-move1');
    document.getElementById('label2')?.classList.add('diagonal-move2');
  }

}
