import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-number2',
  templateUrl: './number2.component.html',
  styleUrls: ['./number2.component.scss']
})
export class Number2Component implements OnInit {
  color: any;
  colorValue: any;
  constructor() { }

  ngOnInit(): void {
  }


  setcolor(colorValue: any) {
    this.color=colorValue;
  }
}
