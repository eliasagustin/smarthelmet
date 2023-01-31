import { Component, OnInit } from '@angular/core';

import { HeaderComponent } from '../productViewer/header/header.component';
import { HeroSectionComponent } from '../productViewer/hero-section/hero-section.component';
@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnInit {
  padre = 'asfdasdf';
  producto = {
    nombre: 'Casco Inteligente',
    descripcion: 'Esta es la descripción del producto 1',
    imagen: 'https://img.remediosdigitales.com/c34ab4/jarvish-x-ar-/1366_2000.jpg',
    caracteristicas: ['caracteristica 1', 'caracteristica 2', 'caracteristica 3'],
    video: 'https://www.youtube.com/shorts/Sg8PBkNsWzo'
  };
  
  constructor() { }

  ngOnInit(): void {
  }

}
