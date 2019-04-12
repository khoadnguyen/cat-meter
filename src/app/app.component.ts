import { Component } from '@angular/core';
import { CatAPIService } from './cat-api.service';
import { Cat } from './interface/cat';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'cat-app';

  constructor(public api: CatAPIService) {
    api.getAllCats().subscribe((res) => {
      if (res) {
        api.setCatArray(res);
      }
    }, (err) => {
      console.log('Cats Error', err);
    });

  }



}
