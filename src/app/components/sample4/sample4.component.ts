import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sample4',
  template: `
    <p>
      {{ message }}
    </p>
    <div><input type="text" [(ngModel)]="message" /></div>
    <p>
      {{ text }}
    </p>
    <button (click)="click()">자식의 버튼</button>
  `,
  styles: []
})
export class Sample4Component implements OnInit {
  @Input() text;
  @Input() click;

  @Output() myEvent = new EventEmitter();

  message = 'sample4 works';
  constructor() {}
  ngOnInit() {
    // 컴포넌트가 초기화 되었을때 실행되는 로직
    setTimeout(() => {
      this.message = 'Changed!';
      this.myEvent.emit();
    }, 2000);
  }
}
