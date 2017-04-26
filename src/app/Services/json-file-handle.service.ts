import { Injectable } from '@angular/core';

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
  constructor() {

  }

  getIntent(){
    return this.file.intent;
  }

  getText(){
    return this.file._text;
  }

}

interface EntitiesInterface{
  start?:number;
  end?:number;
  value?:string;
  entity?:string;
}
