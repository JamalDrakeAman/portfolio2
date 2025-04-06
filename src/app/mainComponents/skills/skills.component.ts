import { Component } from '@angular/core';
import { SkillsService } from '../../shared/services/skills.service';
import { InterestLabelComponent } from "./interest-label/interest-label.component";

@Component({
  selector: 'app-skills',
  imports: [InterestLabelComponent],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {

  constructor(public skillService: SkillsService) {

  }



}
