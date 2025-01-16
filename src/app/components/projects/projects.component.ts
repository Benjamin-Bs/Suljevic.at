import { Component } from '@angular/core';
import { GithubService } from '../../services/github/github.service.js';

@Component({
    selector: 'app-projects',
    templateUrl: './projects.component.html',
    styleUrl: './projects.component.css',
    standalone: false
})
export class ProjectsComponent {
  repositories: any[] = [];
  visibleCount: number = 3;

  constructor(private gitHubService: GithubService) { }

  ngOnInit(): void {
    this.gitHubService.getRepositories().subscribe((data) => {
      this.repositories = data;
    });
  }

  showMore(): void{
    this.visibleCount += 3;
  }

  
}
