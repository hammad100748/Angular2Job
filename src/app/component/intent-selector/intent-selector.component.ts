import { Component, OnInit,Output, EventEmitter } from '@angular/core';
import {JsonFileHandleService} from "../../Services/json-file-handle.service";
@Component({
  selector: 'app-intent-selector',
  templateUrl: './intent-selector.component.html',
  styleUrls: ['./intent-selector.component.css']
})
export class IntentSelectorComponent implements OnInit {

  @Output() select=new EventEmitter();
  intent="file_search";
  intents=["file_search","personality"];

  constructor(private _jsonHandlerService:JsonFileHandleService) { }

  ngOnInit() {
    this.select.emit(this._jsonHandlerService.getIntent());
  }

}
