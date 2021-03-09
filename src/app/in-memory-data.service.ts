import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

import { Block } from './block';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const blocks = [
      { id: 11, type: 2, content: ["OSNS", "ОСНС"] },
      { id: 12, type: 1, content: ["OSNS", ""] },
    ];
    return { blocks };
  }

  genId(blocks: Block[]): number {
    return blocks.length > 0 ? Math.max(...blocks.map(block => block.id)) + 1 : 11;
  }
}
