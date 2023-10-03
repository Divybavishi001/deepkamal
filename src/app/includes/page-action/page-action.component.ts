import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'page-action',
  templateUrl: './page-action.component.html',
  styleUrls: ['./page-action.component.css']
})
export class PageActionComponent implements OnInit {
  @Input() pageName = '';
  @Output() getActionName = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }
  actionName(value: string) {
    this.getActionName.emit(value);
  }
}
