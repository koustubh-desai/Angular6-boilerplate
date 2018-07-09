import { Component, OnInit } from '@angular/core';
import {MessagesService} from '../messages.service';
import { StoreService } from '../store.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  private mydata;
  constructor(
    private messageService:MessagesService,
    private storeService:StoreService
  ) { }

  ngOnInit() {
    this.messageService.add("Loaded Dashboard");
    this.getSomeData();
  }

  getSomeData(){
    this.storeService.getData().subscribe(data=>this.mydata = data);
  }

}
