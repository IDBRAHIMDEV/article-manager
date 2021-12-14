import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() title = ''
  @Input() image = ''
  @Input() text = ''
  @Input() id = 0

  @Output() sendIdToDelete = new EventEmitter()
  
  constructor() { }

  ngOnInit(): void {
  }

  sendId(id: number) {
    
    this.sendIdToDelete.emit({id, message: "Please delete one article"})
  }

}
