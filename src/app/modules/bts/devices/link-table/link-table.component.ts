
import {Component, ViewChild,OnInit} from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import { Router } from '@angular/router';
import { DevicesService } from '../../../../services/DevicesService';

/**
 * @title Data table with sorting, pagination, and filtering.
 */

@Component({
  selector: 'app-link-table',
  templateUrl: './link-table.component.html',
  styleUrls: ['./link-table.component.scss']
})
export class LinkTableComponent implements OnInit {
  devices = [];
  displayedColumns = ['id', 'name', 'long', 'lat','actions'];
  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private router : Router , private _devicesService: DevicesService) {
    // Create 100 users
    const users: UserData[] = [];
    for (let i = 1; i <= 100; i++) { users.push(createNewUser(i)); }

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(users);
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


  // goPlaces(id:string , name: string) {
  //   this.router.navigate(['auth','mappin','pintab',{'id':id ,'name':name}]).then(nav => {
  //     console.log(nav+"pin from dtaeail "); // true if navigation is successful
  //   }, err => {
  //     console.log(err) // when there's an error
  //   });

  //   }

  ngOnInit(){

    this._devicesService.getDevices()
    .subscribe(
      ((res) => {this.devices = res;
      
      }),
      err => console.log(err)
    )

    
  }

  /**
   * Set the paginator and sort after the view init since this component will
   * be able to query its view for the initialized paginator and sort.
   */
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
}

/** Builds and returns a new User. */
function createNewUser(id: number): UserData {
  const name =
      NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
      NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';

  return {
    id: id.toString(),
    name: name,
    long: Math.round(Math.random() * 100).toString(),
    lat : Math.round(Math.random() * 200).toString(),
    alarmStatus : "on"
  };
}

/** Constants used to fill up our data base. */
const COLORS = ['maroon', 'red', 'orange', 'yellow', 'olive', 'green', 'purple',
  'fuchsia', 'lime', 'teal', 'aqua', 'blue', 'navy', 'black', 'gray'];
const NAMES = ['Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack',
  'Charlotte', 'Theodore', 'Isla', 'Oliver', 'Isabella', 'Jasper',
  'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'];

export interface UserData {
  id: string;
  name: string;
  long: string;
  lat: string;
  alarmStatus : string;
}


/**  Copyright 2018 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */

