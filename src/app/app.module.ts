import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ServiceWorkerModule } from '@angular/service-worker';

import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { CategoriesComponent } from './cat-egories/cat-egories.component';
import { CatLoaderComponent } from './cat-loader/cat-loader.component';
import { CatListComponent } from './cat-list/cat-list.component';

import { CatAPIService } from './cat-api.service';

@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    CatLoaderComponent,
    CatListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [CatAPIService],
  bootstrap: [AppComponent]
})
export class AppModule { }
