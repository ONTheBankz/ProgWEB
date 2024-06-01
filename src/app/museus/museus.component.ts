import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router'; 
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-museus',
  standalone: true,
  imports: [RouterModule, HeaderComponent],
  templateUrl: './museus.component.html',
  styleUrls: ['./museus.component.scss']
})
export class MuseusComponent {

}
