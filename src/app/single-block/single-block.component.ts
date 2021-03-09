import { Component, OnInit, Input } from '@angular/core';
import { Block } from '../block';

@Component({
  selector: 'app-single-block',
  templateUrl: './single-block.component.html',
  styleUrls: ['./single-block.component.css']
})
export class SingleBlockComponent implements OnInit {
  @Input() id: number;
  constructor() { }

  ngOnInit(): void {
  }

}
