import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';  // Importar CommonModule para usar directivas comunes de Angular
import { HttpClientModule } from '@angular/common/http';  // Importa HttpClientModule para manejar solicitudes HTTP
import { HeaderComponent } from './header/header.component';  // Importar el componente de encabezado

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CommonModule,  // Asegúrate de importar CommonModule aquí para las directivas comunes
    HeaderComponent,
    HttpClientModule  // Importar HttpClientModule para permitir las solicitudes HTTP en la aplicación
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'restaurante';  // Título de la aplicación
}

