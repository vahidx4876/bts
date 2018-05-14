import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-crm',
  templateUrl: './dashboard-crm.component.html',
  styleUrls: ['./dashboard-crm.component.scss']
})
export class DashboardCrmComponent implements OnInit {

    stroke  : string = "12";



    public btsData = [
        {colorDark: '#5C6BC0',colorLight: '#7986CB', number: 12, message: 'number of online Devices' , isdashboard : 'true'},
        {colorDark: '#42A5F5',colorLight: '#64B5F6', number: 4, message: 'number of offline devices' , isdashboard : 'true'},

    ]

   

    tableData = [
        { country: 'India', sales: 5400, percentage: '40%' },
        { country: 'Us', sales: 3200, percentage: '30.33%' },
        { country: 'Australia', sales: 2233, percentage: '18.056%' },
        { country: 'Spaim', sales: 600, percentage: '6%' },
        { country: 'China', sales: 200, percentage: '4.50%' },
        { country: 'Brazil', sales: 100, percentage: '2.50%' },
    ];

    constructor() { }

    ngOnInit() {
    }

}
