import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  texto: string;

  //https://www.npmjs.com/package/ngx-summernote/v/0.7.8
  config = {
    placeholder: "Write or paste your text here...",
    tabsize: 2,
    height: '400px',
    toolbar: [
      ['style', ['bold', 'italic', 'underline','clear']],
      ['font', ['strikethrough']],
      ['color', ['forecolor']],
      ['insert', ['hr']],
      ['misc', ['undo','redo']]
    ]
  }

  constructor() { }

  ngOnInit(): void {
  }

}
