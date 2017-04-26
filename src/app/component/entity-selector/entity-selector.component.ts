import { Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-entity-selector',
  templateUrl: './entity-selector.component.html',
  styleUrls: ['./entity-selector.component.css']
})
export class EntitySelectorComponent implements OnInit {

  @Output() select=new EventEmitter();
  entity="object_to_search";
  entities=["object_to_search","file_type","source","datetime"];
  constructor() { }

  ngOnInit() {
  }

}
