import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MotivationComponent } from './motivation/motivation.component';
import { ProductivityComponent } from './productivity/productivity.component';
import { DesignComponent } from './design/design.component';
import { StudyComponent } from './study/study.component';
import { BodcastComponent } from './study/bodcast/bodcast.component';
import { DownloadsComponent } from './study/downloads/downloads.component';
import { PlayallComponent } from './study/playall/playall.component';
import { VideoComponent } from './study/video/video.component';
import { Video1Component } from './design/video1/video1.component';
import { All1Component } from './design/all1/all1.component';
import { Articles1Component } from './design/articles1/articles1.component';
import { Downloads1Component } from './design/downloads1/downloads1.component';
import { Bodcast1Component } from './design/bodcast1/bodcast1.component';
import { Playall1Component } from './design/playall1/playall1.component';
import { Playall2Component } from './productivity/playall2/playall2.component';
import { All2Component } from './productivity/all2/all2.component';
import { Articles2Component } from './productivity/articles2/articles2.component';
import { Video2Component } from './productivity/video2/video2.component';
import { Bodcast2Component } from './productivity/bodcast2/bodcast2.component';
import { Download2Component } from './productivity/download2/download2.component';
import { Download3Component } from './motivation/download3/download3.component';
import { All3Component } from './motivation/all3/all3.component';
import { Playall3Component } from './motivation/playall3/playall3.component';
import { Bodcast3Component } from './motivation/bodcast3/bodcast3.component';
import { Video3Component } from './motivation/video3/video3.component';
import { Articles3Component } from './motivation/articles3/articles3.component';

@NgModule({
  declarations: [
    AppComponent,
    MotivationComponent,
    ProductivityComponent,
    DesignComponent,
    StudyComponent,
    BodcastComponent,
    DownloadsComponent,
    PlayallComponent,
    VideoComponent,
    Video1Component,
    All1Component,
    Articles1Component,
    Downloads1Component,
    Bodcast1Component,
    Playall1Component,
    Playall2Component,
    All2Component,
    Articles2Component,
    Video2Component,
    Bodcast2Component,
    Download2Component,
    Download3Component,
    All3Component,
    Playall3Component,
    Bodcast3Component,
    Video3Component,
    Articles3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
