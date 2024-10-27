import { Component } from '@angular/core';

export interface CarrerStep {
  company: string,
  date: string,
  description: string
}

@Component({
  selector: 'app-carrer-path',
  templateUrl: './carrer-path.component.html',
  styleUrl: './carrer-path.component.css'
})
export class CarrerPathComponent {

  carrerSteps: CarrerStep[] = [

  ];

}
