import { Component, OnInit, Inject, Input, Output,EventEmitter} from '@angular/core';
import {MailService} from "../mail.service";
@Component({
  selector: 'app-ztt-component',
  templateUrl: './ztt-component.component.html',
  // template: `
  //   <div>
  //    <input #myInput type="text">
  //    <button (click)="onClick(myInput.value)">点击</button>
  //   </div>
  // `,
  styleUrls: ['./ztt-component.component.css']
})
export class ZttComponentComponent implements OnInit {
isMousedown: boolean;
 name: String;
 updateValue: String;
 @Input() fromappComponetnt:string;
 @Output() update = new EventEmitter<{test: string}>();
  constructor(
    private mailService:MailService, 
    @Inject('apiUrl') private apiUrl) { 
    // 不过对于 Type 类型(函数类型) 的对象，我们一般使用 constructor(private mailService: MailService) 方式进行注入。而 Inject 装饰器一般用来注入非 Type 类型的对象。
    this.name = 'hello ztt';
  }
 onClick(value){
   console.log(value);
   console.log(event);
 }

 onEnter(event, value){
   console.log(value);
   console.log(event);
 }
  ngOnInit() {
  }

}
 