import { Component, OnInit } from '@angular/core';
import {JsonFileHandleService} from "../../Services/json-file-handle.service";
import {Entity} from "../../Entity";

@Component({
  selector: 'app-validatejson',
  templateUrl: './validatejson.component.html',
  styleUrls: ['./validatejson.component.css']
})


export class ValidatejsonComponent implements OnInit {

  intent='';
  _text='';
  entities=[];
  inputEntities=[];
  selectedText: string = '';
  _id:number=0;

  constructor(private _jsonFileHandleService: JsonFileHandleService) {

  }


  ngOnInit() {
    this._text=this._jsonFileHandleService.getText();
    this.entities=this._jsonFileHandleService.getEntities();

    console.log(this.inputEntities);
  }


  showSelectedText() {
    var text = "";
    if (window.getSelection) {
      text = window.getSelection().toString();
    }

    if(text!='') {
      this.selectedText=text.replace(/^\s+|\s+$/g, '');;
      var startIndex=this._text.indexOf(this.selectedText);
      var length=this.selectedText.length;
      var endIndex=startIndex+length;

      var entry={
        '_id':this._id++,
        'start':startIndex,
        'end':endIndex,
        'value':this.selectedText,
        'entity':'object_to_search'
      };
      this.entities.push(entry);

    }
  }


  removeEntity(ent:Entity){
    var index=this.entities.indexOf(ent);
    if (index !== -1) {
      this.entities.splice(index, 1);
    }
  }

  ententeChanged(evnt:string,id:number){
    for (var i = 0; i < this.entities.length; i++) {
      if (this.entities[i]._id === id) {
        this.entities[i].entity = evnt;
        break;
      }
    }
  }

  validateData(){
    this._jsonFileHandleService.saveJson({entities:this.entities,intent:this.intent,_text:this._text});
  }

}
