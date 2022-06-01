import { Component, OnInit } from '@angular/core';
import { NewapiService } from 'src/app/services/newapi.service';

@Component({
  selector: 'app-health',
  templateUrl: './health.component.html',
  styleUrls: ['./health.component.css']
})
export class HealthComponent implements OnInit {

  constructor(private _service:NewapiService) { }
  healthDisplay:any = []
  ngOnInit(): void {

    this._service.health().subscribe((result)=>{
      console.log(result);
      this.healthDisplay = result.articles;
    })
  }

}
