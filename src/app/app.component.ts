import { Component } from '@angular/core';
import * as electron from 'electron';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor() {
    console.log(electron.remote.require('electron'));
  }
  title = 'app';
}
