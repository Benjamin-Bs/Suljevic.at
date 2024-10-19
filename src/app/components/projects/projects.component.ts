import { Component } from '@angular/core';
import { GithubService } from '../../services/github.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  repositories: any[] = [];

  constructor(private gitHubService: GithubService) { }

  ngOnInit(): void {
    this.gitHubService.getRepositories().subscribe((data) => {
      console.log(data);
      this.repositories = data;
    });
  }
}
