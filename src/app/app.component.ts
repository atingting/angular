import { Component } from '@angular/core';
import * as $ from 'jquery';
import * as $$ from 'bootstrap';
import {MailService} from "./mail.service";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(private mailService: MailService){
    
  }


   onUpdate() {
    console.log("dsflsdlkfjsdlfjsao;l");
  }
}
