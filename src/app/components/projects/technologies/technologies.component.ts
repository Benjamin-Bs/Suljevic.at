import { AfterViewInit, Component } from '@angular/core';
import Swiper from 'swiper';
import 'swiper/swiper-bundle.css';



@Component({
  selector: 'app-technologies',
  templateUrl: './technologies.component.html',
  styleUrl: './technologies.component.css',
  standalone: false
})
export class TechnologiesComponent implements AfterViewInit {

  icons: string[] = [
    'fab fa-angular',
    'fab fa-node',
    'fab fa-git',
    'fab fa-github',
    'fab fa-java',
    'fab fa-react',
  ];

  ngAfterViewInit() {

  }

}
