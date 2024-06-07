import { Component } from '@angular/core';
import { FirestoreService } from '../services/firestore.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router'; // Adicione RouterModule
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-d.diogo-sousa',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, HeaderComponent, FooterComponent],
  templateUrl: './d.diogo-sousa.component.html',
  styleUrl: './d.diogo-sousa.component.scss'
})
export class DDiogoSousaComponent {

}
