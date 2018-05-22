
import {Component, ElementRef, OnInit, ViewChild, Input} from '@angular/core';

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
import { DataService } from '../../../../services/data.service';
import { Issue } from '../../../../models/issue';
import { AddDialogComponent } from '../../../../dialogs/add/add.dialog.component';
import { EditDialogComponent } from '../../../../dialogs/edit/edit.dialog.component';
import { DeleteDialogComponent } from '../../../../dialogs/delete/delete.dialog.component';



@Component({
  selector: 'app-crudtable',
  templateUrl: './crudtable.component.html',
  styleUrls: ['./crudtable.component.scss']
})
export class CrudtableComponent implements OnInit {
 
  btsName: string;
  btsID: string;
  displayedColumns = ['actions','btsID', 'btsName', 'latLoc', 'longLoc', 'username','time', ];
  exampleDatabase: DataService | null;
  dataSource: ExampleDataSource | null;
  index: number;
  id: number;

  constructor(public httpClient: HttpClient,
              public dialog: MatDialog,
              public dataService: DataService) {}

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild('filter') filter: ElementRef;
  @Input() public mapData : MapData;
  ngOnInit() {
    this.loadData();
  }

  refresh() {
    this.loadData();
    console.log(this.mapData);
  }

  addNew(issue: Issue) {

    console.log("ADDDDDDD");
    const dialogRef = this.dialog.open(AddDialogComponent, {
      data: {issue: issue }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 1) {
        // After dialog is closed we're doing frontend updates
        // For add we're just pushing a new row inside DataService
        this.exampleDatabase.dataChange.value.push(this.dataService.getDialogData());
        this.refreshTable();
      }
    });
  }

  startEdit(i: number, btsID: string, btsName: string, latLoc: string, longLoc: string , time:string) {
    this.btsID = btsID;
    // index row is used just for debugging proposes and can be removed
    this.index = i;
    console.log(this.index);
    const dialogRef = this.dialog.open(EditDialogComponent, {
      data: { btsID: btsID, btsName: btsName, latLoc: latLoc, longLoc: longLoc, time: time }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 1) {
        // When using an edit things are little different, firstly we find record inside DataService by id
        const foundIndex = this.exampleDatabase.dataChange.value.findIndex(x => x.btsID === this.btsID);
        // Then you update that record using data from dialogData (values you enetered)
        this.exampleDatabase.dataChange.value[foundIndex] = this.dataService.getDialogData();
        // And lastly refresh table
        this.refreshTable();
      }
    });
  }
 
  deleteItem(i: number, btsID: string, btsName: string, latLoc: string, longLoc: string , time:string) {
    this.index = i;
    this.btsName = btsName ;
    const dialogRef = this.dialog.open(DeleteDialogComponent, {
      data: {btsID: btsID, btsName: btsName, latLoc: latLoc, longLoc: longLoc , time:time}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result === 1) {
        const foundIndex = this.exampleDatabase.dataChange.value.findIndex(x => x.btsName === this.btsName);
        // for delete we use splice in order to remove single object from DataService
        this.exampleDatabase.dataChange.value.splice(foundIndex, 1);
        this.refreshTable();
      }
    });
  }



mapDataF(mapData:Issue){
  this.exampleDatabase.dataChange.value.push(mapData);
  this.refreshTable();
  console.log(mapData);
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

class MapData {
  btsName: string;
  btsID: string;
  lat : number;
  lng : number;
  makeTime : string;
  username : string;
  constructor() {
      
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

    return Observable.merge(...displayDataChanges).map(() => {
      // Filter data
      this.filteredData = this._exampleDatabase.data.slice().filter((issue: Issue) => {
        const searchStr = (issue.btsID + issue.btsName + issue.latLoc + issue.longLoc + issue.time + issue.username).toLowerCase();
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
        case 'longLoc': [propertyA, propertyB] = [a.longLoc, b.longLoc]; break;
        case 'latLoc': [propertyA, propertyB] = [a.latLoc, b.latLoc]; break;
        case 'time': [propertyA, propertyB] = [a.time, b.time]; break;
        case 'username': [propertyA, propertyB] = [a.username, b.username]; break;
    
 
      }

      const valueA = isNaN(+propertyA) ? propertyA : +propertyA;
      const valueB = isNaN(+propertyB) ? propertyB : +propertyB;

      return (valueA < valueB ? -1 : 1) * (this._sort.direction === 'asc' ? 1 : -1);
    });
  }
}

