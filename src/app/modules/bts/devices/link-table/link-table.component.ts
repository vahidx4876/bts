
import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {MatDialog, MatPaginator, MatSort} from '@angular/material';
import {Observable} from 'rxjs/Observable';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {DataSource} from '@angular/cdk/collections';
import 'rxjs/add/observable/merge';
import 'rxjs/add/observable/fromEvent';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import { Router } from '@angular/router';

import { Issue } from './model';
import { DataService } from './DataService';

@Component({
  selector: 'app-link-table',
  templateUrl: './link-table.component.html',
  styleUrls: ['./link-table.component.scss']
})
export class LinkTableComponent implements OnInit {


  displayedColumns = [ 'btsID','btsName','longLoc','latLoc','alaramStatus'];
  exampleDatabase: DataService | null;
  dataSource: ExampleDataSource | null;
  index: number;
  id: number;
  imgurl : string = "http://www.hyperlinkcode.com/images/sample-image.jpg";

  constructor(public httpClient: HttpClient,
    private router : Router,
              public dataService: DataService ) {}

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild('filter') filter: ElementRef;

  ngOnInit() {
   
    this.loadData();
  }

  refresh() {
    this.loadData();
  }

  linkItem(id: string ,name : string , lat : string , lng : string){

    console.log(id+ name+lat+lng);
    this. goBtsDetail(id ,name , lat , lng );
  }


  goBtsDetail(id: string ,name : string , lat : string , lng : string) {

    this.router.navigate(['auth','mappin','pintab',{'NAVID':"LINK2D",'id':id ,'lab':name ,'lat':lat ,'lng':lng}]).then(nav => {
      console.log(nav+" pin 2 detail "); // true if navigation is successful
    }, err => {
      console.log(err) // when there's an error
    });
    
    }






  // If you don't need a filter or a pagination this can be simplified, you just use code from else block
  private refreshTable() {
    // if there's a paginator active we're using it for refresh
    if (this.dataSource._paginator.hasNextPage()) {
      this.dataSource._paginator.nextPage();
      this.dataSource._paginator.previousPage();
      // in case we're on last page this if will tick
    } else if (this.dataSource._paginator.hasPreviousPage()) {
      this.dataSource._paginator.previousPage();
      this.dataSource._paginator.nextPage();
      // in all other cases including active filter we do it like this
    } else {
      this.dataSource.filter = '';
      this.dataSource.filter = this.filter.nativeElement.value;
    }
  }

  public loadData() {
    this.exampleDatabase = new DataService(this.httpClient);

    this.dataSource = new ExampleDataSource(this.exampleDatabase, this.paginator, this.sort);

   
    Observable.fromEvent(this.filter.nativeElement, 'keyup')
      .debounceTime(150)
      .distinctUntilChanged()
      .subscribe(() => {
        if (!this.dataSource) {
          return;
        }
        this.dataSource.filter = this.filter.nativeElement.value;
      });
  }
}


export class ExampleDataSource extends DataSource<Issue> {

  _filterChange = new BehaviorSubject('');

  get filter(): string {
    return this._filterChange.value;
  }

  set filter(filter: string) {
    this._filterChange.next(filter);
  }

  filteredData: Issue[] = [];
  renderedData: Issue[] = [];

  constructor(public _exampleDatabase: DataService,
              public _paginator: MatPaginator,
              public _sort: MatSort) {
    super();
    // Reset to the first page when the user changes the filter.
    this._filterChange.subscribe(() => this._paginator.pageIndex = 0);
  }

  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<Issue[]> {
    // Listen for any changes in the base data, sorting, filtering, or pagination
    const displayDataChanges = [
      this._exampleDatabase.dataChange,
      this._sort.sortChange,
      this._filterChange,
      this._paginator.page
    ];

    this._exampleDatabase.getAllIssues();
  //  ['actions', 'btsID','btsName','longLoc','latLoc','alaramStatus'];
    return Observable.merge(...displayDataChanges).map(() => {
      // Filter data
      this.filteredData = this._exampleDatabase.data.slice().filter((issue: Issue) => {
        const searchStr = (issue.btsName + issue.btsID + issue.alaramStatus+issue.latLoc + issue.longLoc).toLowerCase();
        return searchStr.indexOf(this.filter.toLowerCase()) !== -1;
      });

      // Sort filtered data
      const sortedData = this.sortData(this.filteredData.slice());

      // Grab the page's slice of the filtered sorted data.
      const startIndex = this._paginator.pageIndex * this._paginator.pageSize;
      this.renderedData = sortedData.splice(startIndex, this._paginator.pageSize);
      return this.renderedData;
    });
  }
  disconnect() {
  }



  /** Returns a sorted copy of the database data. */
  sortData(data: Issue[]): Issue[] {
    if (!this._sort.active || this._sort.direction === '') {
      return data;
    }

    return data.sort((a, b) => {
      let propertyA: number | string = '';
      let propertyB: number | string = '';

      switch (this._sort.active) {
        case 'btsID': [propertyA, propertyB] = [a.btsID, b.btsID]; break;
        case 'btsName': [propertyA, propertyB] = [a.btsName, b.btsName]; break;
        case 'latLoc': [propertyA, propertyB] = [a.latLoc, b.latLoc]; break;
        case 'longLoc': [propertyA, propertyB] = [a.longLoc, b.longLoc]; break;
        case 'alaramStatus': [propertyA, propertyB] = [a.alaramStatus, b.alaramStatus]; break;
 
      
      }

      const valueA = isNaN(+propertyA) ? propertyA : +propertyA;
      const valueB = isNaN(+propertyB) ? propertyB : +propertyB;

      return (valueA < valueB ? -1 : 1) * (this._sort.direction === 'asc' ? 1 : -1);
    });
  }
}


