import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BodcastComponent } from './study/bodcast/bodcast.component';
import { PlayallComponent } from './study/playall/playall.component';
import { StudyComponent } from './study/study.component';
import { VideoComponent } from './study/video/video.component';
import { ArticlesComponent } from './study/articles/articles.component';
import { DownloadsComponent } from './study/downloads/downloads.component';
import { AllComponent } from './study/all/all.component';
import { DesignComponent } from './design/design.component';
import { MotivationComponent } from './motivation/motivation.component';
import { ProductivityComponent } from './productivity/productivity.component';
import { Playall1Component } from './design/playall1/playall1.component';
import { Video1Component } from './design/video1/video1.component';
import { Bodcast1Component } from './design/bodcast1/bodcast1.component';
import { Articles1Component } from './design/articles1/articles1.component';
import { All1Component } from './design/all1/all1.component';
import { Downloads1Component } from './design/downloads1/downloads1.component';
import { Playall2Component } from './productivity/playall2/playall2.component';
import { Video2Component } from './productivity/video2/video2.component';
import { Bodcast2Component } from './productivity/bodcast2/bodcast2.component';
import { Articles2Component } from './productivity/articles2/articles2.component';
import { All2Component } from './productivity/all2/all2.component';
import { Download2Component } from './productivity/download2/download2.component';
import { Playall3Component } from './motivation/playall3/playall3.component';
import { Video3Component } from './motivation/video3/video3.component';
import { Bodcast3Component } from './motivation/bodcast3/bodcast3.component';
import { Articles3Component } from './motivation/articles3/articles3.component';
import { All3Component } from './motivation/all3/all3.component';
import { Download3Component } from './motivation/download3/download3.component';

const routes: Routes = [
  {
    path: 'study', component:StudyComponent,
    children:[
      { path: 'playAll',component: PlayallComponent },
      { path: 'video', component: VideoComponent },
      { path: 'bodcast', component: BodcastComponent },
      { path: 'articles', component: ArticlesComponent },
      { path: 'all', component: AllComponent },
      { path: 'downloads', component: DownloadsComponent },
    ]
  },
  {
    path: 'design', component: DesignComponent,
    children: [
      { path: 'playAll',component: Playall1Component },
      { path: 'video', component: Video1Component },
      { path: 'bodcast', component: Bodcast1Component },
      { path: 'articles', component: Articles1Component },
      { path: 'all', component: All1Component },
      { path: 'downloads', component: Downloads1Component },
    ]
  },
  {
    path: 'motivation', component: MotivationComponent,
    children: [
      { path: 'playAll',component: Playall3Component },
      { path: 'video', component: Video3Component },
      { path: 'bodcast', component: Bodcast3Component },
      { path: 'articles', component: Articles3Component },
      { path: 'all', component: All3Component },
      { path: 'downloads', component: Download3Component },
    ]
  },
  {
    path: 'productivity', component: ProductivityComponent,
    children: [
      { path: 'playAll',component: Playall2Component },
      { path: 'video', component: Video2Component },
      { path: 'bodcast', component: Bodcast2Component },
      { path: 'articles', component: Articles2Component },
      { path: 'all', component: All2Component },
      { path: 'downloads', component: Download2Component },
    ]
  },
  { path: '', redirectTo: '/motivation', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
