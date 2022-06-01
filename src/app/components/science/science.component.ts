import { Component, OnInit } from '@angular/core';
import { NewapiService } from 'src/app/services/newapi.service';

@Component({
  selector: 'app-science',
  templateUrl: './science.component.html',
  styleUrls: ['./science.component.css']
})
export class ScienceComponent implements OnInit {

  constructor(private _service:NewapiService) { }

  scienceDisplay:any = [];
  ngOnInit(): void {

    this._service.science().subscribe((result)=>{
      console.log(result);
      this.scienceDisplay = result.articles;
    })
  }

}
