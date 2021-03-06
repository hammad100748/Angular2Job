import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {Entity} from "../Entity";


@Injectable()
export class JsonFileHandleService {

  file={
    "entities": [
      {
        "start": 0,
        "end": 11,
        "value": "get started",
        "entity": "object_to_search"
      },
      {
        "start": 12,
        "end": 14,
        "value": "pdf",
        "entity": "file_type"
      },
      {
        "start": 19,
        "end": 31,
        "value": "google drive",
        "entity": "source"
      },
      {
        "start": 33,
        "end": 42,
        "value": "last week",
        "entity": "datetime"
      }
    ],
    "intent": "file_search",
    "_text": "get started pdf in google drive last week"
  };

  constructor(private _http:Http) {

  }

  getIntent(){
    return this.file.intent;
  }

  getText(){
    return this.file._text;
  }

  getEntities(){
    return this.file.entities;
  }

  saveJson(entities:any){

    var json_out=JSON.stringify(entities);

    // Final json
    console.log(json_out);
  }

}
