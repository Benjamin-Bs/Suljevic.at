import { Component, OnInit, Renderer2, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-donate',
  templateUrl: './donate.component.html',
  styleUrls: ['./donate.component.css'],
  standalone: false
})
export class DonateComponent implements OnInit {

  constructor(
    private renderer: Renderer2,
    @Inject(PLATFORM_ID) private platformId: Object
  ) { }

  ngOnInit(): void {
    // Ensure the code runs only in the browser context
    if (isPlatformBrowser(this.platformId)) {
      this.loadKofiScript();
    }
  }

  private loadKofiScript(): void {
    const script = this.renderer.createElement('script');
    script.src = 'https://storage.ko-fi.com/cdn/scripts/overlay-widget.js';
    script.onload = () => {
      this.initKofiWidget();
    };
    this.renderer.appendChild(document.body, script);
  }

  private initKofiWidget(): void {
    // Ensure the kofiWidgetOverlay function exists before calling it
    if ((window as any).kofiWidgetOverlay) {
      (window as any).kofiWidgetOverlay.draw('suljevic', {
        type: 'floating-chat',
        'floating-chat.donateButton.text': 'Support me',
        'floating-chat.donateButton.backgroundColor': '#f45d2',
        'floating-chat.donateButton.textColor': '#fff'
      });
    } else {
      console.error('Ko-fi widget overlay is not available.');
    }
  }
}
