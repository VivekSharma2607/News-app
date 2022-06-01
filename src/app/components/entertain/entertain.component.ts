import { Component, OnInit } from '@angular/core';
import { NewapiService } from 'src/app/services/newapi.service';
@Component({
  selector: 'app-entertain',
  templateUrl: './entertain.component.html',
  styleUrls: ['./entertain.component.css']
})
export class EntertainComponent implements OnInit {

  constructor(private _service:NewapiService) { }
  enterDisplay:any = [];
  ngOnInit(): void {
    this._service.entertain().subscribe((result)=>{
      console.log(result);
      this.enterDisplay=result.articles;
    })
  }

}
