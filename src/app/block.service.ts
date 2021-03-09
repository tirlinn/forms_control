import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Block } from './block';

@Injectable({
  providedIn: 'root'
})
export class BlockService {
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  private blocksUrl = 'api/blocks';

  constructor(
    private http: HttpClient,
  ) { }

  getBlocks(): Observable<Block[]> {
    console.log(this.http.get<any>(this.blocksUrl));
    return this.http.get<Block[]>(this.blocksUrl);
  }

  updateBlock(block: Block): Observable<any> {
    console.log(block);
    return this.http.put(this.blocksUrl, block, this.httpOptions);
  }

  getBlock(id: number): Observable<Block> {
    const url = `${this.blocksUrl}/${id}`;
    return this.http.get<Block>(url);
  }

  addHero(block: Block): Observable<any> {
    console.log(block);
    return this.http.post<Block>(this.blocksUrl, block, this.httpOptions);
  }
}
