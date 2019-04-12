import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatLoaderComponent } from './cat-loader.component';

describe('CatLoaderComponent', () => {
  let component: CatLoaderComponent;
  let fixture: ComponentFixture<CatLoaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatLoaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
