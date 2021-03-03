import { Component } from '@angular/core';

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.css']
})
export class ClassComponent {
  arr=[1];
  title = 'text-editor';
  content = "Wow";

  classFunc(){}

  myFunc() {
    let arr = Math.max(...this.arr) + 1;
    this.arr.push(arr);
    console.log(`New number added ${arr}`);
    console.log(this.arr);
  }
  myFunc2() {
    let arr = Math.max(...this.arr) + 1;
    this.arr.push(arr);
    console.log(`New number added ${arr}`);
    console.log(this.arr);
  }
}