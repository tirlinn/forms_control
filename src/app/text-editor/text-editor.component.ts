import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-text-editor',
  templateUrl: './text-editor.component.html',
  styleUrls: ['./text-editor.component.css']
})
export class TextEditorComponent implements OnInit {
  @Input() content = "bhbjhbbjnj";
  constructor() { }
  
  ngOnInit(): void {

    //wow
  }
  
}
