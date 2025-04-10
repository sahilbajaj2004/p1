import { Component, OnInit, Renderer2, ElementRef } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  imageIndex = 0;
  images: string[] = [
    'bg1.jpeg',
    'bg2.jpeg',
    'bg3.jpeg'
  ];

  constructor(private renderer: Renderer2, private el: ElementRef) {}

  ngOnInit(): void {
    this.changeBackground();
    setInterval(() => this.changeBackground(), 5000);
  }

  changeBackground() {
    const imageUrl = `url(${this.images[this.imageIndex]})`;
    const container = this.el.nativeElement.querySelector('.home-container');
    this.renderer.setStyle(container, 'background-image', imageUrl);
    this.imageIndex = (this.imageIndex + 1) % this.images.length;
  }
}
