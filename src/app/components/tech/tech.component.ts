import { Component, OnInit } from '@angular/core';
import { NewapiService } from 'src/app/services/newapi.service';

@Component({
  selector: 'app-tech',
  templateUrl: './tech.component.html',
  styleUrls: ['./tech.component.css']
})
export class TechComponent implements OnInit {

  constructor(private _service:NewapiService) { }
  techDisplay:any = [];
  ngOnInit(): void {
    this._service.tech().subscribe((result)=>{
      console.log(result);
      this.techDisplay=result.articles;
    })
  }

}
