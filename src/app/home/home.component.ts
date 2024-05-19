import { Component, ElementRef, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements AfterViewInit {

  constructor(private el: ElementRef) { }

  ngAfterViewInit(): void {
    this.setupMenuToggle();
    this.setupLoginToggle();
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
}
