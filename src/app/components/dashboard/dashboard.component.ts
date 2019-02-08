import { Component, OnInit } from '@angular/core';
import { DashboardGridsterConfigService } from './dashboard-gridster-config.service';
import { GridsterConfig } from 'angular-gridster2';
import { TrainingAngularGridsterItem } from './interfaces/training-angular-gridster-item';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  config: GridsterConfig;
  items: Array<TrainingAngularGridsterItem>;
  constructor(private dashboardGridsterConfigService: DashboardGridsterConfigService) { }

  ngOnInit() {
    this.config = this.dashboardGridsterConfigService.getConfig();
    this.items = environment.trainingAngularConfig.items;
  }
}
