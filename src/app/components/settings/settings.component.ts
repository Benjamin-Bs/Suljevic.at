import { Component } from '@angular/core';

@Component({
  selector: 'app-settings',
  standalone: false,
  
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.css'
})
export class SettingsComponent {

  constructor(){}

  isPanelOpen: boolean = false;

  togglePanel(): void {
    this.isPanelOpen = !this.isPanelOpen;
  }


  onClick(): void {
    console.log('Floating button clicked!');
  }

}
