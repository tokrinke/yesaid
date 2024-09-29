import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AlbumComponent } from "./album/album.component";

@Component({
  selector: 'app-container',
  standalone: true,
  imports: [CommonModule, AlbumComponent],
  templateUrl: './container.component.html',
  styleUrl: './container.component.scss'
})
export class ContainerComponent {
  xhr: any
  quote = 'Everything you do in life stems from either fear or love';
  getKanyesQuote(){
    this.xhr = new XMLHttpRequest();
    this.xhr.open('GET', 'https://api.kanye.rest/text', true);
    this.xhr.send();
    this.xhr.onload = () => {
      let receivedQuote = this.xhr.responseText;
      this.quote = receivedQuote;
    }
  }
}
