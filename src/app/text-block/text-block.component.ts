import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-text-block',
  templateUrl: './text-block.component.html',
  styleUrls: ['./text-block.component.css']
})
export class TextBlockComponent implements OnInit {
  
  text = 'Test';
  constructor() {}
  
  

  ngOnInit(): void {
  }

  saveText(text:any): void {
    console.log(text);
  }

}