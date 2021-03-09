import { Component } from '@angular/core';
import { Block } from '../block';
import { BlockService } from '../block.service';

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.css']
})
export class ClassComponent {
  blocks: Block[] = [];
  addBlock: boolean = false;

  constructor(
    private blockService: BlockService,
  ) {}

  ngOnInit() {
    this.getBlocks();
    console.log(this.blocks);
  }

  getBlocks(): void {
    console.log(this.blockService.getBlocks());
    this.blockService.getBlocks()
      .subscribe(blocks => this.blocks = blocks);
  }

  toggleAddBlock() {
    this.addBlock = !this.addBlock;
  }

  addSingleBlock(index) {
    let tmp = 1;
    // this.blocks.splice(index, 0, tmp);
    this.toggleAddBlock();
    console.log(`New number added ${tmp}`);
    console.log(this.blocks);
  }
  
  addDoubleBlock(index) {
    let tmp = 2;
    // this.blocks.splice(index, 0, tmp);
    this.toggleAddBlock();
    console.log(`New number added ${tmp}`);
    console.log(this.blocks);
  }
}