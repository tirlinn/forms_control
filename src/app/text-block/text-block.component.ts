import { Component, OnInit, Input } from '@angular/core';
import { BlockService } from '../block.service';
import { Block } from '../block';

@Component({
  selector: 'app-text-block',
  templateUrl: './text-block.component.html',
  styleUrls: ['./text-block.component.css']
})
export class TextBlockComponent implements OnInit {
  block: Block;

  @Input() id: number;
  @Input() num: number;
  constructor(
    private blockService: BlockService,
  ) {}
  
  ngOnInit(): void {
    this.getHero();
  }

  getHero(): void {
    this.blockService.getBlock(this.id).subscribe(block => this.block = block);
  }
}
