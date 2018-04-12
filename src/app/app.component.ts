import { Component } from '@angular/core';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'app';
  public limit = 2;
  public orderBy = 'cash';
  public reverse = false;
  public cashSelected = true;
  public accountSelected = false;
  constructor(public dataService$: DataService) {
    console.log(this.dataService$.accounts);
  }
  public loadMore() {
    this.limit = this.dataService$.accounts.length;
  }
}
