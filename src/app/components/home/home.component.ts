import { Component } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrl: './home.component.css',
    standalone: false
})
export class HomeComponent {

    isArticleVisible: boolean = false;

    toggleArticleVisibility() {
        this.isArticleVisible = !this.isArticleVisible;
    }

    closeArticle() {
        this.isArticleVisible = false;
    }

}
