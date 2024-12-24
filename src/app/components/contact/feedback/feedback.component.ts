import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import emailjs from 'emailjs-com';

@Component({
  selector: 'app-feedback',
  standalone: false,

  templateUrl: './feedback.component.html',
  styleUrl: './feedback.component.css'
})
export class FeedbackComponent {

  model = {
    name: '',
    email: '',
    message: ''
  };

  constructor() { }

  // Diese Methode wird beim Absenden des Formulars aufgerufen
  onSubmit() {
    const serviceID = ''; // Deine ServiceID
    const templateID = ''; // Deine TemplateID
    const userID = 'your_user_id'; // Deine UserID

    const templateParams = {
      name: this.model.name,
      email: this.model.email,
      message: this.model.message
    };

    // EmailJS sendet die E-Mail mit den Daten aus dem Formular
    emailjs.send(serviceID, templateID, templateParams, userID)
      .then((response) => {
        console.log('Feedback erfolgreich gesendet:', response);
        alert('Danke für dein Feedback!');
      }, (error) => {
        console.error('Fehler beim Senden des Feedbacks:', error);
        alert('Es gab einen Fehler. Bitte versuche es später noch einmal.');
      });
  }

}
