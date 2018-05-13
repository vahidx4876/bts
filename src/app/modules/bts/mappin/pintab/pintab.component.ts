import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-pintab',
  templateUrl: './pintab.component.html',
  styleUrls: ['./pintab.component.scss']
})
export class PintabComponent implements OnInit {

  data: any;
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const Paramsmap = this.route.snapshot.paramMap;
   const routeParams = this.route.snapshot.params;
  var id = Paramsmap.get("id");
   var name = Paramsmap.get("name");
    console.log(id+"........"+name);
  }
}


export interface modeldata{
 id : string;
 name :string;
}
