import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, NgForm } from '@angular/forms';
import { debounceTime, distinctUntilChanged, map, switchMap } from 'rxjs/operators';
import { searchService } from '../search.service';
import { Search } from '../interface/search.interface';


@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css'],
})
export class TopBarComponent implements AfterViewInit {
  searchresult:Search;
  searchresultcount:number;
  @ViewChild('searchForm') searchForm: NgForm;
  constructor(private _searchservice: searchService) {}
  

  ngAfterViewInit() {
    const formvalue = this.searchForm.valueChanges;
    formvalue
      .pipe(
        map((data) => data.searchTerm),
        debounceTime(500),
        distinctUntilChanged(),
        switchMap(data=>this._searchservice.getSearches(data))
      )
      .subscribe((res) => {
        console.log(res);
        this.searchresult=res;
        this.searchresultcount=Object.keys(res).length
      });
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/
