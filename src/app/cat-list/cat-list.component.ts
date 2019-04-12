import { Component, OnInit } from '@angular/core';
import { CatAPIService } from '../cat-api.service';
import { Cat } from '../interface/cat';

@Component({
  selector: 'app-cat-list',
  templateUrl: './cat-list.component.html',
  styleUrls: ['./cat-list.component.scss']
})
export class CatListComponent implements OnInit {

  constructor(public api: CatAPIService) {}

  ngOnInit() {
  }

}
