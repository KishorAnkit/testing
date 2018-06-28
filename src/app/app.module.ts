import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {  HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { YoutubeComponent } from './Components/youtube/youtube.component';
import { EmbedVideo } from 'ngx-embed-video';

import { DataService } from './Services/data.service';
@NgModule({
  declarations: [
    AppComponent,
    YoutubeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    EmbedVideo.forRoot()
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
