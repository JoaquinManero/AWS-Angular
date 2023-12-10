import { Component, OnInit } from '@angular/core';
import { AppService } from './services/app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  public message = '';
  constructor(private readonly appService: AppService) {}

  ngOnInit(): void {
    this.appService.getMessage().subscribe((response) => {
      this.message = response;
      console.log(response);
    });
  }
}
