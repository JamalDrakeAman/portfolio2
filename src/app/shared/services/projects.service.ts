import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

  constructor() { }

  projects = [
    {
      name: 'Join',
      description: 'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
      imgDesktop: '/assets/projects/join-kanban-img.png',
      imgPhone: '/assets/projects/join-phone.png',
      skills: 'JavaScript | HTML | CSS',
      github: 'https://github.com/JamalDrakeAman/Join',
      live: 'https://join.jamalaman.com'
    },
    {
      name: 'Captain Pirate',
      description: 'A simple Jump-and-Run game based on an object-oriented approach. Join Captain Pirate on his adventurous journey, collect coins and cannonballs, and face the fearsome island monster.',
      imgDesktop: '/assets/projects/captain-pirate-img.png',
      imgPhone: '/assets/projects/join-phone.png',
      skills: 'JavaScript | HTML | CSS',
      github: 'https://github.com/JamalDrakeAman/Captain-Pirate',
      live: 'https://captain-pirate.jamalaman.com/'
    },
    {
      name: 'Pokédex',
      description: 'Based on the PokéAPI a simple library that provides and catalogues pokemon information.',
      imgDesktop: '/assets/projects/pokedex-img.png',
      imgPhone: '/assets/projects/pokedex-phone.png',
      skills: 'JavaScript | HTML | CSS | Api',
      github: 'https://github.com/JamalDrakeAman/Pokedex',
      live: 'https://pokedex.jamalaman.com'
    },
  ]

}
