import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule} from '@angular/forms'

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { searchService } from './search.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    TopBarComponent
  ],
  bootstrap: [ AppComponent ],
  providers: [ searchService ]
})
export class AppModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/