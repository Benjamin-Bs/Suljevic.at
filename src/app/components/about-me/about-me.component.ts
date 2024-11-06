import { Component } from '@angular/core';

@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.css'
})
export class AboutMeComponent {

    downloadFile(){
      const filePath = '../../../assets/test.txt'

      const link = document.createElement('a');
      link.href = filePath;
      link.download = 'test.txt'

      link.click();
    }

}
