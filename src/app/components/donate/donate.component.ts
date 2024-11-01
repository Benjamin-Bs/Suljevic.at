import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-donate',
  templateUrl: './donate.component.html',
  styleUrl: './donate.component.css'
})
export class DonateComponent implements OnInit {

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
    // Load the Ko-fi script dynamically
    const script = this.renderer.createElement('script');
    script.src = 'https://storage.ko-fi.com/cdn/scripts/overlay-widget.js';
    script.onload = () => {
      // Initialize the widget after the script is loaded
      this.initKofiWidget();
    };
    this.renderer.appendChild(document.body, script);
  }

  private initKofiWidget(): void {
    // Call the kofiWidgetOverlay.draw function to render the widget
    (window as any).kofiWidgetOverlay.draw('suljevic', {
      type: 'floating-chat',
      'floating-chat.donateButton.text': 'Support me',
      'floating-chat.donateButton.backgroundColor': '#f45d2',
      'floating-chat.donateButton.textColor': '#fff'
    });
  }
}
