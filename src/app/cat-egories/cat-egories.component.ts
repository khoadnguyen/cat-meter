import { Component, OnInit } from '@angular/core';
import { CatAPIService } from '../cat-api.service';
import { Cat } from '../interface/cat';
import { Cats } from '../interface/cats';

@Component({
  selector: 'app-cat-egories',
  templateUrl: './cat-egories.component.html',
  styleUrls: ['./cat-egories.component.scss']
})
export class CategoriesComponent implements OnInit {

  constructor(public api: CatAPIService) {}

  ngOnInit() {}

  /**
   * @description Sets currently selected categoy as display category
   * @param {Cats} category
   * @memberof CategoriesComponent
   */
  setDisplayCatList(category: Cats) {
    this.api.displayList = category;
  }
}
