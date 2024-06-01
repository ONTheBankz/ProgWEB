import { Component, AfterViewInit, ElementRef } from '@angular/core';
import { FirestoreService } from '../services/firestore.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router'; 
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule, RouterLink, RouterOutlet] 
})
export class HeaderComponent implements AfterViewInit {
  collectionData: any[] = [];
  email: string = '';
  password: string = '';
  loginMessage: string = '';

  constructor(private el: ElementRef, private firestoreService: FirestoreService, private router: Router) { }

  ngAfterViewInit(): void {
    this.setupMenuToggle();
    this.setupLoginToggle();
    this.loadFirestoreData();
  }

  setupMenuToggle(): void {
    const navMenu = this.el.nativeElement.querySelector('#nav-menu');
    const navToggle = this.el.nativeElement.querySelector('#nav-toggle');
    const navClose = this.el.nativeElement.querySelector('#nav-close');

    if (navToggle) {
      navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu');
      });
    }

    if (navClose) {
      navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu');
      });
    }
  }

  setupLoginToggle(): void {
    const login = this.el.nativeElement.querySelector('#login');
    const loginBtn = this.el.nativeElement.querySelector('#login-btn');
    const loginClose = this.el.nativeElement.querySelector('#login-close');

    if (loginBtn) {
      loginBtn.addEventListener('click', () => {
        login.classList.add('show-login');
      });
    }

    if (loginClose) {
      loginClose.addEventListener('click', () => {
        login.classList.remove('show-login');
      });
    }
  }

  loadFirestoreData(): void {
    this.firestoreService.getCollectionData('user').subscribe(data => {
      this.collectionData = data;
      console.log(data);
    });
  }

  onSubmitLogin() {
    this.firestoreService.checkUserExists(this.email, this.password).subscribe(users => {
      if (users.length > 0) {
        this.loginMessage = 'Login successful!';
      } else {
        this.loginMessage = 'Invalid email or password.';
      }
    });
  }
}
