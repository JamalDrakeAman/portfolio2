import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-single-project',
  imports: [],
  templateUrl: './single-project.component.html',
  styleUrl: './single-project.component.scss'
})
export class SingleProjectComponent {


  @Input() project = {
    name: 'Join',
    description: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
    imgDesktop: '/assets/projects/join-kanban-img.png',
    imgPhone: '/assets/projects/join-phone.png',
    skills: 'JavaScript | HTML | CSS',
    github: 'https://github.com/JamalDrakeAman/Join',
    live: 'https://join.jamalaman.com'
  }
}
