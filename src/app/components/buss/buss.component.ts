import { Component, OnInit } from '@angular/core';
import { NewapiService } from 'src/app/services/newapi.service';
@Component({
  selector: 'app-buss',
  templateUrl: './buss.component.html',
  styleUrls: ['./buss.component.css']
})
export class BussComponent implements OnInit {

  constructor(private _services:NewapiService) { }

  bussNewDisplay: any =[];

  ngOnInit(): void {

    this._services.buss().subscribe((result) => {
      this.bussNewDisplay = result.articles;
    })
  }

}
