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
  quote = 'You basically can say anything to someone on an email or text as long as you put LOL at the end.';
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
