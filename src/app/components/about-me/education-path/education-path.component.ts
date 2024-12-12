import { Component } from '@angular/core';

export interface EducationStep {
  school: string;
  date: string;
  // dagree: string;
  description: string;
}

@Component({
  selector: 'app-education-path',
  templateUrl: './education-path.component.html',
  styleUrl: './education-path.component.css'
})
export class EducationPathComponent {

  educationSteps: EducationStep[] = [
    {
      school: 'Volksschule Nappersdorf – Kammersdorf',
      date: '2012 – 2016',
      description: ''
    },
    {
      school: 'Bundesgymnasium und Bundesrealgymnasium Hollabrunn',
      date: '2016 - 2020',
      description: ''
    },
    {
      school: 'HTL Hollabrunn (Abteilung Informationstechnologie) ',
      date: '2020 - 2025',
      description: ''
    }
  ]

}
