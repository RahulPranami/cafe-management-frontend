import { AfterViewInit, Component } from '@angular/core';
import { DashboardService } from '../services/dashboard.service';
import { SnackbarService } from '../services/snackbar.service';
import { GlobalConstant } from '../shared/global-constant';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements AfterViewInit {
  responesMessage: any;
  data: any;

  ngAfterViewInit() {}

  constructor(
    private dashboardService: DashboardService,
    private snackbarService: SnackbarService
  ) {
    // this.ngxService.start();
    this.dashboardData();
  }

  dashboardData() {
    this.dashboardService.getDetails().subscribe(
      (response: any) => {
        // this.ngxService.stop();
        this.data = response;
      },
      (error: any) => {
        // this.ngxService.stop();
        console.log(error);
        if (error.error?.message) {
          this.responesMessage = error.error?.message;
        } else {
          this.responesMessage = GlobalConstant.genericError;
        }
        this.snackbarService.openSnackBar(
          this.responesMessage,
          GlobalConstant.error
        );
      }
    );
  }
}
