import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public user = {name:'Anil Soni',phone:8100541258,company:'TCS'};
  constructor(public dataService:DataService) { }

  ngOnInit() {
  }

login(user){
  console.log(user);
  console.log(user.email);
  this.dataService.postUserWithObservable(this.user)
                  .subscribe(function(res){
                    console.log("success");
                    console.log(res);
                  },function(err){
                    console.log("error");
                  });
  }
}
