import { Component } from '@angular/core';
import { Product } from './models/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'intermedio-ng';
  img = '';
  showImg = true;

  onLoaded(img: string) {
    console.log('padre', img);
  }
  toggleImg() {
    this.showImg = !this.showImg;
  }
}
