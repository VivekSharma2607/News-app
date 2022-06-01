import { Component, OnInit } from '@angular/core';
import { NewapiService } from 'src/app/services/newapi.service';

@Component({
  selector: 'app-sport',
  templateUrl: './sport.component.html',
  styleUrls: ['./sport.component.css']
})
export class SportComponent implements OnInit {

  constructor(private _service:NewapiService) { }

  sportDisplay:any = [];
  ngOnInit(): void {
    this._service.sport().subscribe((result)=>{
      console.log(result);
      this.sportDisplay=result.articles;
    })
  }

}
