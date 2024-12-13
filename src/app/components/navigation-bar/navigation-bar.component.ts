import { Component, ViewChild } from '@angular/core';

@Component({
    selector: 'app-navigation-bar',
    templateUrl: './navigation-bar.component.html',
    styleUrl: './navigation-bar.component.css',
    standalone: false
})
export class NavigationBarComponent {

  toggleBurgerMenu(): void {
    const menu = document.querySelector('#navbarMenu') as HTMLElement;
    menu.classList.toggle('is-active'); 
  }

}
