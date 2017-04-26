import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ValidatejsonComponent } from './component/validatejson/validatejson.component';
import { IntentSelectorComponent } from './component/intent-selector/intent-selector.component';
import {JsonFileHandleService} from "./Services/json-file-handle.service";
import { EntitySelectorComponent } from './component/entity-selector/entity-selector.component';

@NgModule({
  declarations: [
    AppComponent,
    ValidatejsonComponent,
    IntentSelectorComponent,
    EntitySelectorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [JsonFileHandleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
