import { Component, OnInit } from '@angular/core';
import { MyServiceService } from './my-service.service';

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>',
  styleUrls: ['./app.component.scss'],
  providers: [MyServiceService]
})
export class AppComponent implements OnInit {
  title = 'trainingAngular';
  realTime: number = Date.now();
  private data: string[];

  constructor(private myServiceService: MyServiceService) {

  }

  ngOnInit(): void { this.data = this.myServiceService.doSomething(); }
}
