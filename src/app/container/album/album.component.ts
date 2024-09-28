import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-album',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './album.component.html',
  styleUrl: './album.component.scss'
})
export class AlbumComponent {
  albums = [
    {
      name: 'College Dropout' ,
      spotify: 'https://open.spotify.com/album/4Uv86qWpGTxf7fU7lG5X6F?si=O777y-qwQmGjJqXfuul8AQ',
      gif: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/26daef69314457.5b7ccc327774b.gif'
    },
    {
      name: 'Late Registration' ,
      spotify: 'https://open.spotify.com/album/5ll74bqtkcXlKE7wwkMq4g?si=01XPxMJJRc2_eJYnK3a2dQ',
      gif: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/d6355769314457.5b7ccc327860a.gif'
    },
    {
      name: 'Graduation' ,
      spotify: 'https://open.spotify.com/album/4SZko61aMnmgvNhfhgTuD3?si=6NnFb5x5RfqXwOxh7Oj5GA',
      gif: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/f9892769314457.5b7ccc3277e85.gif'
    },
    {
      name: '808s & Heartbreak' ,
      spotify: 'https://open.spotify.com/album/3WFTGIO6E3Xh4paEOBY9OU?si=_wvb17yAS7uCQvmVhfRObw',
      gif: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/1d2eb569314457.5b7ccc3278b4b.gif'
    },
    {
      name: 'MBDTF' ,
      spotify: 'https://open.spotify.com/album/20r762YmB5HeofjMCiPMLv?si=Szv3aeoZQnWPqUopKzZfwA',
      gif: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/75aca969314457.5b7ccc32798f0.gif'
    },
    {
      name: 'Yeezus' ,
      spotify: 'https://open.spotify.com/album/7D2NdGvBHIavgLhmcwhluK?si=Co4HemAwQf2QQ0XoOwM7jw',
      gif: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/845dfa69314457.5b7ccc3279da9.gif'
    },
    {
      name: 'The Life Of Pablo' ,
      spotify: 'https://open.spotify.com/album/7gsWAHLeT0w7es6FofOXk1?si=kkG4C5VTRk2wqU-LNzl2_w',
      gif: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/2790d169314457.5b7ccc327a183.gif'
    },
    {
      name: 'Cruel Summer' ,
      spotify: 'https://open.spotify.com/album/0bcOGgwJpwBjfFBTApoqSn?si=w-5tLbS4S3mchnym-GejCw',
      gif: 'https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/00c0c869314457.5b7ccc327922c.gif'
    }
  ]
}
