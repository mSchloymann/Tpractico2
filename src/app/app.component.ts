import { Component } from '@angular/core';
import { HomeComponent } from "./home/home.component";
import { CatalogoComponent } from "./catalogo/catalogo.component";
import { RegistroComponent } from "./registro/registro.component";
import { LoginComponent } from "./login/login.component";
import { DetalleComponent } from "./detalle/detalle.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, CatalogoComponent, LoginComponent, DetalleComponent, RegistroComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Tpractico2';
}
