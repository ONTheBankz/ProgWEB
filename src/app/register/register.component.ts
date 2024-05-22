import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SubHeaderComponent } from '../sub-header/sub-header.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, SubHeaderComponent]
})
export class RegisterComponent {
  name: string = '';
  surname: string = '';
  gender: string = '';
  dob: string = '';
  email: string = '';
  password: string = '';

  onSubmitRegister() {
    // Lógica para criar uma nova conta com todos os campos
    console.log(`Nome: ${this.name}, Sobrenome: ${this.surname}, Gênero: ${this.gender}, Data de Nascimento: ${this.dob}, Email: ${this.email}, Password: ${this.password}`);
  }
}
