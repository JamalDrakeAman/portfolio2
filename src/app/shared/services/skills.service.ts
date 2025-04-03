import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

  constructor() { }

  skills = [
    {
      name: 'HTML',
      img: '/assets/skills/html.svg'
    },
    {
      name: 'CSS',
      img: '/assets/skills/css.svg'
    },
    {
      name: 'JavaScript',
      img: '/assets/skills/js.svg'
    },
    {
      name: 'TypeScript',
      img: '/assets/skills/ts.svg'
    },
    {
      name: 'Angular',
      img: '/assets/skills/angular.svg'
    },
    {
      name: 'Firebase',
      img: '/assets/skills/firebase.svg'
    },
    {
      name: 'Git',
      img: '/assets/skills/git.svg'
    },
    {
      name: 'Rest-Api',
      img: '/assets/skills/api.svg'
    },
    {
      name: 'Scrum',
      img: '/assets/skills/scrum.svg'
    },
    {
      name: 'Material Design',
      img: '/assets/skills/material.svg'
    }

  ]



}
