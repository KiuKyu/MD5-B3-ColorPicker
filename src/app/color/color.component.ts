import {Component, OnInit} from '@angular/core';
import {Icolor} from '../icolor';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {
  selectColor: Icolor = {};
  colors: Icolor[] = [
    {
      choice: 1,
      color: 'red'
    },
    {
      choice: 2,
      color: 'blue'
    },
    {
      choice: 3,
      color: 'green'
    },
    {
      choice: 4,
      color: 'yellow'
    },
    {
      choice: 5,
      color: 'black'
    },
  ];

  cColor: Icolor = {};

  constructor() {
  }

  ngOnInit() {
  }

  getColor() {
    // sử dụng HTMLInputElement để ép kiểu document.getElementById. để sử dụng được property .value
    let str = (<HTMLInputElement> document.getElementById('choice-color')).value;
    let id = parseInt(str);
    for (let i = 0; i < this.colors.length; i++) {
      if (this.colors[i].choice === id) {
        this.selectColor = this.colors[i];
      }
    }
  }
}
