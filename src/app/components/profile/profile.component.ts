import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css',
  standalone: false
})
export class ProfileComponent {

  isArticleVisible: boolean = false;

  toggleArticleVisibility() {
    this.isArticleVisible = !this.isArticleVisible;
  }

  closeArticle() {
    this.isArticleVisible = false;
  }
}
