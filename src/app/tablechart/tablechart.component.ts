import { Component, OnInit,ViewChild } from '@angular/core';
import { FakServiceService } from '../fak-service.service';
import { FakeUser } from '../fake-user';
import {MatPaginatorModule} from '@angular/material/paginator';


@Component({
  selector: 'app-tablechart',
  templateUrl: './tablechart.component.html',
  styleUrls: ['./tablechart.component.scss']
})
export class TablechartComponent implements OnInit {

  // @ViewChild(MatSort) sort: MatSort;

  constructor(public User:FakServiceService) { }

  ngOnInit(): void {
    this.retrieveAllFakeUsers();
  }

  name = 'Angular';
  tabIndex = 0 ;
  felements:Array<FakeUser> = [];
  list?:any;
  displayedColumns : any[] = ['id','firstName','lastName','age','username','domain'];

  changeTab(event:any){
    console.log(event.index)
    this.tabIndex = event.index;
  }

  retrieveAllFakeUsers(){
    this.User.retrieveFakeUsers().subscribe(result=>{
      
      this.felements=result;
      
      for(let i=0;i<Object.values(this.felements).length;i++) {
        //console.log(Object.values(this.felements)[i].city);
        console.log("----------");
        this.list = Object.values(this.felements)[0];
        console.log(this.list);
      }
      // result.forEach(element => {
      //     this.list.push(element.id.toString());
      //     this.list.push(element.firstName.toString());
      //     this.list.push(element.lastName.toString());
      //     this.list.push(element.age.toString());
      //     this.list.push(element.city.toString());
      //     this.list.push(element.username.toString());
      //     this.list.push(element.domain.toString());
      //   console.log(element);
      // });

      // console.log(this.list)

    })  
  }
}
