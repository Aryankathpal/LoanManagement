import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css']
})
export class CalcComponent {
  disabled = false;
  showTicks = true;
  thumbLabel = false;     
   amount = {
    value : 10000,
    min:10000,
    max:1000000,
    step:1000
  }

  roi = {
    value : 1,
    min:1,
    max:30,
    step:1
  }

  tenture = {
    value : 1,
    min:1,
    max:30,
    step:1
  }

}
