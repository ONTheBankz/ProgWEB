import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { ReviewComponent } from '../review/review.component';

@Component({
  selector: 'app-paco-duques',
  standalone: true,
  imports: [CommonModule, HeaderComponent, FooterComponent, ReviewComponent],
  templateUrl: './paco-duques.component.html',
  styleUrls: ['./paco-duques.component.scss']
})
export class PacoDuquesComponent {
  
}