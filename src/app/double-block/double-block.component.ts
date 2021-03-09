import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-double-block',
  templateUrl: './double-block.component.html',
  styleUrls: ['./double-block.component.css']
})
export class DoubleBlockComponent implements OnInit {
  @Input() id: number;
  constructor() { }

  ngOnInit(): void {
  }
}
