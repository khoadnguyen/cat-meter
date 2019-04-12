import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { CatAPIService } from '../cat-api.service';
import { Cat } from '../interface/cat';

@Component({
  selector: 'app-cat-loader',
  templateUrl: './cat-loader.component.html',
  styleUrls: ['./cat-loader.component.scss']
})
export class CatLoaderComponent implements OnInit {

  public cat: Cat = {
    category: '',
    catUrl: ''
  };

  constructor(public api: CatAPIService) {
  }

  /**
   * @description On init, get random cat image
   * @memberof CatLoaderComponent
   */
  ngOnInit() {
    this.getRandCat();
  }

  /**
   * @description Calls Cat Service to ping random cat image API and pull new image url.
   * @memberof CatLoaderComponent
   * @service CatAPIService
   */
  getRandCat() {
    this.api.getCatImg().subscribe((res: any) => {
      this.cat.catUrl = res.file;
    });
  }

  /**
   * @description Passes and instance of the currently selected cat off to be saved in local storage and resets the form.
   * @param {FormGroup} f: Current validated form
   * @memberof CatLoaderComponent
   */
  saveCat(f: any) {
    const currentCat: Cat = {
      category: this.cat.category,
      catUrl: this.cat.catUrl,
    };
    this.api.postCat(currentCat).subscribe((res) => {
      f.submitted = false;
      f.reset();
    });

  }

}
