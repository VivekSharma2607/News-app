import { Component, OnInit } from '@angular/core';
import { NewapiService } from 'src/app/services/newapi.service';
@Component({
  selector: 'app-heading',
  templateUrl: './heading.component.html',
  styleUrls: ['./heading.component.css']
})
export class HeadingComponent implements OnInit {

  constructor(private _service:NewapiService) { }


  headingDisplay:any = [];

  ngOnInit(): void {
    this._service.heading().subscribe((result)=> {
      console.log(result);
      this.headingDisplay = result.articles;
    })
  }

}
