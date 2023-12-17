import { Component, OnInit } from '@angular/core';
import { AppService } from './services/app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent implements OnInit {
  public message = '';
  public files: any[] = [];
  constructor(private readonly appService: AppService) {}

  ngOnInit(): void {
    this.appService.getMessage().subscribe((response) => {
      this.message = response;
      console.log(response);
    });
    this.appService.getFiles().subscribe((response) => {
      this.files = response;
      console.log('files', this.files);
    });
  }
}
