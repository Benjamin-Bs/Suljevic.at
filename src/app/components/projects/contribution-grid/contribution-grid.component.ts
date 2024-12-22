import { Component, OnInit } from '@angular/core';
import { GithubService } from '../../../services/github.service.js';

@Component({
  selector: 'app-contribution-grid',
  standalone: false,

  templateUrl: './contribution-grid.component.html',
  styleUrl: './contribution-grid.component.css'
})
export class ContributionGridComponent implements OnInit {

  contributions: any[] = [];

  constructor(private githubService: GithubService) { }

  ngOnInit(): void {
    // const username = 'Benjamin-Bs';
    // this.githubService.getContributions(username).subscribe((result: any) => {
    //   this.contributions = result.data.user.contributionsCollection.contributionCalendar.weeks;
    // });
  }

  // getColor(contributionCount: number): string {
  //   if (contributionCount === 0) return '#ebedf0';
  //   if (contributionCount <= 5) return '#c6e48b';
  //   if (contributionCount <= 10) return '#7bc96f';
  //   if (contributionCount <= 20) return '#239a3b';
  //   return '#196127';
  // }

}
