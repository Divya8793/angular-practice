import { Component, OnInit } from '@angular/core';
import { ServiceCallService } from '../services/service-call.service';
import { ForgotUsernameModel } from '../models/service';

@Component({
  selector: 'app-service-call',
  templateUrl: './service-call.component.html',
  styleUrls: ['./service-call.component.scss']
})
export class ServiceCallComponent implements OnInit {
 newData: any;
 postData: any;
 errorMessage: string;
  constructor(private service: ServiceCallService) { }

  ngOnInit() {
  }

  onGetCall() {
    this.service.getServiceCall().subscribe((data) => {
     this.newData = data;
    },
    (err) => {
      console.log(err);
      switch (err.status) {
     case 404:
    this.errorMessage = err.error;
    break;
    case 412:
      this.errorMessage = 'User Not found';
      break;
    }
  });
  }


  onPostCall() {
    const body: ForgotUsernameModel = {
      firstName : 'avi',
      lastName : 'Mar',
      age: '25'
    };
    this.service.postServiceCall(body).subscribe((data) => {
      this.postData = data;
    });
  }
}
