import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EjerciciosDirectivasComponent } from './ejercicios-directivas/ejercicios-directivas.component';
import { EjerciciosComponent } from './ejercicios/ejercicios.component';





@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, EjerciciosDirectivasComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Abril15';
}
