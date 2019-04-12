import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LocalStorage, JSONSchema } from '@ngx-pwa/local-storage';
import { Cat } from './interface/cat';
import { Cats } from './interface/cats';
import * as _ from 'lodash';

const schema: JSONSchema = {
  type: 'array',
  items: {
    type: 'object',
    properties: {
      category: { type: 'string' },
      catUrl: { type: 'string' }
    }
  }
};

@Injectable({
  providedIn: 'root'
})
export class CatAPIService {

  public groupedCatArray = [];
  public displayList: Cats = {};
  private catArray: Cat[] = [];
  private catApiUrl = 'http://aws.random.cat/meow';

  constructor(public http: HttpClient, protected localStorage: LocalStorage) {}

  /**
   * @description Gets cats stored in IndexDb/Localstorage
   * @returns boolean
   * @memberof CatAPIService
   */
  getAllCats() {
    return this.localStorage.getItem<Cat[]>('cat');
  }

  /**
   * @description Sets previously saved cats from local store to state array, also updates grouped array
   * @param {Cat[]} catArray
   * @memberof CatAPIService
   */
  setCatArray(catArray: Cat[]) {
    this.catArray = catArray;
    this.setGroupedCatArray();
  }

  /**
   * @description Takes the local cat array and groups them by category and item.
   * @memberof CatAPIService
   */
  setGroupedCatArray() {
    this.groupedCatArray = _.chain(this.catArray)
    .groupBy('category')
    .toPairs()
    .map((currentItem) => _.zipObject(['category', 'items'], currentItem))
    .value();
  }

  /**
   * @description Queries random cat aPI for new random image url.
   * @returns Cat image URL.
   * @memberof CatAPIService
   */
  getCatImg() {
    return this.http.get(this.catApiUrl);
  }

  /**
   * @description Updates local cat array and grouped array before finally saving the cat array to local storage.
   * @param {Cat} cat
   * @returns boolean
   * @memberof CatAPIService
   */
  postCat(cat: Cat) {
    this.catArray.push(cat);
    this.setGroupedCatArray();
    return this.localStorage.setItem('cat', this.catArray);
  }
}
