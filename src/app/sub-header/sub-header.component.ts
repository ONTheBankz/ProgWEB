import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router'; // Adicione RouterModule

@Component({
  selector: 'app-sub-header',
  standalone: true,
  templateUrl: './sub-header.component.html',
  styleUrl: './sub-header.component.scss',
  imports: [RouterModule] // Certifique-se de importar o RouterModule
})
export class SubHeaderComponent {

}
