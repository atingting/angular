import { Injectable } from '@angular/core';

@Injectable()
export class MailService {
  messages: string[] = [
    '天之骄子，加入修仙之路群',
    'Shadows，加入修仙之路群',
    'Keriy，加入修仙之路群'
  ];
  message: string  ='该消息来自MailService';
  constructor() { }

}
